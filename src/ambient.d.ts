declare global {
	type FoodItem = {
		id: number;
		name: string;
		category: FoodCategory;
		price: number;
		options?: Opts;
		addOnOptions?: AddOn[];
		notes?: string;
	};

	type CartItemData = {
		item: FoodItem;
		quantity: number;
		selectedOptions: string;
		addOnOptions: AddOn[];
		instructions: string;
	};

	type AddOn = {
		name: string;
		price: number;
	};

	type Opts = string[];

	type FoodCategory = {
		name: string;
		image: string;
	};
}

export {};
