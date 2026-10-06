import { getContext, setContext } from 'svelte';
import { CartItem } from '$lib/models/cart-item.svelte';

const CART_KEY = Symbol('cart');
const STORAGE_KEY = 'house-of-dipp-cart';

function initCart(): CartItem[] {
	if (typeof window === 'undefined') return [];

	try {
		const saved = localStorage.getItem(STORAGE_KEY);

		if (!saved) return [];

		const parsed: CartItemData[] = JSON.parse(saved);

		return parsed.map(CartItem.fromJSON);
	} catch (error) {
		console.error('Failed to parse cart from localStorage:', error);

		return [];
	}
}

export function provideCart() {
	let lines = $state<CartItem[]>(initCart());

	$effect(() => {
		if (typeof window !== 'undefined') {
			localStorage.setItem(STORAGE_KEY, JSON.stringify($state.snapshot(lines)));
		}
	});

	const cart = {
		lines() {
			return lines;
		},

		count() {
			return lines.reduce((total, line) => total + line.quantity, 0);
		},

		total() {
			return lines.reduce((total, line) => total + line.total, 0);
		},

		add(cartItem: CartItem) {
			const existing = lines.find((line) => line.item.id === cartItem.item.id);

			if (existing) {
				existing.quantity += cartItem.quantity;
			} else {
				lines.push(cartItem);
			}
		},

		remove(itemId: FoodItem['id']) {
			const existing = lines.find((line) => line.item.id === itemId);

			if (!existing) return;

			if (existing.quantity > 1) {
				existing.quantity -= 1;
			} else {
				lines = lines.filter((line) => line.item.id !== itemId);
			}
		},

		clear() {
			lines = [];
		},

		increment(itemId: number) {
			const existing = lines.find((line) => line.item.id === itemId);

			if (!existing) return;

			existing.increment();
		},

		decrease(itemId: number) {
			const existing = lines.find((line) => line.item.id === itemId);

			if (!existing) return;

			if (existing.quantity === 1) {
				lines = lines.filter((line) => line.item.id !== itemId);

				return;
			}

			existing.decrement();
		}
	};

	setContext(CART_KEY, cart);
	return cart;
}

export function useCart() {
	const cart = getContext<ReturnType<typeof provideCart>>(CART_KEY);

	if (!cart) {
		throw new Error('useCart must be called inside a cart provider');
	}

	return cart;
}
