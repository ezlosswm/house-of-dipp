declare global {
	type FoodItem = {
		id: number;
		name: string;
		category: string;
		image: string;
		price: number;
		sauceOptions?: string[];
		addOnOptions?: Map<string, number>;
	};

	type SauceOpts = string[];
}

export {};
