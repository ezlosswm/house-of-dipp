import { getContext, setContext } from 'svelte';

type CartLine = {
	item: FoodItem;
	quantity: number;
};

const CART_KEY = Symbol('cart');

export function provideCart() {
	let lines = $state<CartLine[]>([]);

	const cart = {
		lines() {
			return lines;
		},

		count() {
			return lines.reduce((total, line) => total + line.quantity, 0);
		},

		total() {
			return lines.reduce((total, line) => total + line.item.price * line.quantity, 0);
		},

		add(item: FoodItem, quantity = 1) {
			const existing = lines.find((line) => line.item.id === item.id);

			if (existing) {
				existing.quantity += quantity;
			} else {
				lines.push({ item, quantity });
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
