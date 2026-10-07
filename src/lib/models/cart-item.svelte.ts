export class CartItem {
	quantity: number;

	constructor(
		public item: FoodItem,
		quantity: number,
		public selectedOptions: string,
		public addOnOptions: AddOn[],
		public instructions: string
	) {
		this.quantity = $state(quantity);
	}

	static fromJSON(data: CartItemData) {
		return new CartItem(
			data.item,
			Number(data.quantity) || 1,
			data.selectedOptions,
			data.addOnOptions,
			data.instructions
		);
	}

	increment() {
		this.quantity++;
	}

	decrement() {
		if (this.quantity > 1) {
			this.quantity--;
		}
	}

	get total() {
		const addOnTotal = this.addOnOptions.reduce((total, addOn) => total + addOn.price, 0);

		return (this.item.price + addOnTotal) * this.quantity;
	}
}
