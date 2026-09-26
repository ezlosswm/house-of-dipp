declare global {
	type FoodItem = {
		id: number;
		name: string;
		category: FoodCategory;
		price: number;
		options?: Opts;
		addOnOptions?: Map<string, number>;
		notes?: string;
	};

	type Opts = string[];

	type FoodCategory = {
		name: string;
		image: string;
	};
}

export {};
