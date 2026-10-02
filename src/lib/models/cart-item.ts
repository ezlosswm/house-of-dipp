export class CartItem {
	constructor(
		public item: FoodItem,
		public quantity: number,
		public selectedOptions: string,
		public addOnOptions: AddOn[],
		public instructions: string
	) {}

	static fromJSON(data: CartItemData) {
		return new CartItem(
			data.item,
			data.quantity,
			data.selectedOptions,
			data.addOnOptions,
			data.instructions
		);
	}
}
