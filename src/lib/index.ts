// place files you want to import through the `$lib` alias in this folder.
export function formatPrice(amt: number | null): string {
	if (amt === null) return 'Unavailable';

	return `$${amt.toFixed(2)}`;
}

export function decrement(quantity: number) {
	quantity = Math.max(1, quantity - 1);
}
