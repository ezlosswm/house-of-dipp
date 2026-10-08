export const burger = 'images/burger.webp';
export const nachos = 'images/nachos.webp';
export const wings = 'images/wings.webp';
export const fries = 'images/fries.webp';
export const fingers = 'images/fingers.webp';
export const friedchicken = 'images/friedchicken.webp';
export const tortas = 'images/tortas.webp';
export const cheesedip = 'images/cheesedip.webp';
export const botana = 'images/botana.webp';
export const chickenceviche = 'images/botana.webp';
export const houseofdipp = 'images/houseofdipp.webp';
export const combomeal = 'images/combo-meal.webp';

export const menuCategory: FoodCategory[] = [
	{
		name: 'Burgers',
		image: burger
	},
	{
		name: 'Tortas',
		image: tortas
	},
	{
		name: 'Finger Foods',
		image: wings
	},
	{
		name: 'Nachos',
		image: nachos
	},
	{
		name: 'French Fries',
		image: fries
	},
	{
		name: 'Other',
		image: cheesedip
	}
];

const wingSauceOpts: Opts = [
	'Spicy BBQ',
	'Regular BBQ',
	'Honey Mustard',
	'Buffalo',
	'Ranch',
	'Naked'
];

const wingsAddOnOpts: AddOn[] = [
	{
		name: 'Extra fries',
		price: 2
	},
	{
		name: 'Extra sauce',
		price: 2
	}
];

const fingersAddOnOpts: AddOn[] = [
	{
		name: 'Extra fries',
		price: 2
	}
];

const burgerAddOnOpts: AddOn[] = [
	{ name: 'Extra bacon', price: 2 },
	{ name: 'Extra cheese', price: 2 }
];

const botanaOpts: Opts = ['Fries', 'Chips'];

const friedChickenOpts: Opts = ['Leg', 'Breast'];

const nachosAddOnOpts: AddOn[] = [
	{ name: 'Extra cheese', price: 2 },
	{ name: 'Extra meat', price: 2 },
	{ name: 'Both', price: 4 }
];
export const menuItemList: FoodItem[] = [
	{
		id: 1,
		name: 'Chicken Wings (6pc)',
		category: {
			name: 'Finger Foods',
			image: wings
		},
		price: 12.0,
		options: wingSauceOpts,
		addOnOptions: wingsAddOnOpts
	},
	{
		id: 2,
		name: 'Chicken Wings (10pc)',
		category: {
			name: 'Finger Foods',
			image: wings
		},
		price: 18.0,
		options: wingSauceOpts,
		addOnOptions: wingsAddOnOpts
	},
	{
		id: 3,
		name: 'Chicken Wings (15pc)',
		category: {
			name: 'Finger Foods',
			image: wings
		},
		price: 28.0,
		options: wingSauceOpts,
		addOnOptions: wingsAddOnOpts
	},
	{
		id: 4,
		name: 'Chicken Fingers (6pc)',
		category: {
			name: 'Finger Foods',
			image: fingers
		},
		price: 12.0,
		addOnOptions: fingersAddOnOpts
	},
	{
		id: 5,
		name: 'Chicken Fingers (10pc)',
		category: {
			name: 'Finger Foods',
			image: fingers
		},
		price: 18.0,
		addOnOptions: fingersAddOnOpts
	},
	{
		id: 6,
		name: 'Chicken Fingers (15pc)',
		category: {
			name: 'Finger Foods',
			image: fingers
		},
		price: 28.0,
		addOnOptions: fingersAddOnOpts
	},
	{
		id: 7,
		name: 'Chicken Burger',
		category: {
			name: 'Burgers',
			image: burger
		},
		price: 8,
		addOnOptions: burgerAddOnOpts,
		notes: 'with Fries'
	},
	{
		id: 8,
		name: 'Chicken Bacon Burger',
		category: {
			name: 'Burgers',
			image: burger
		},
		price: 10,
		addOnOptions: burgerAddOnOpts,
		notes: 'with Fries'
	},
	{
		id: 9,
		name: 'Beef Burger',
		category: {
			name: 'Burgers',
			image: burger
		},
		price: 8,
		addOnOptions: burgerAddOnOpts,
		notes: 'with Fries'
	},
	{
		id: 10,
		name: 'Beef Bacon Burger',
		category: {
			name: 'Burgers',
			image: burger
		},
		price: 10,
		addOnOptions: burgerAddOnOpts,
		notes: 'with Fries'
	},
	{
		id: 11,
		name: 'Double Patty Bacon Burger',
		category: {
			name: 'Burgers',
			image: burger
		},
		price: 14,
		addOnOptions: burgerAddOnOpts,
		notes: 'with Fries'
	},
	{
		id: 12,
		name: 'Chicken Strip BBQ Burger',
		category: {
			name: 'Burgers',
			image: burger
		},
		price: 10,
		addOnOptions: burgerAddOnOpts,
		notes: 'with Fries'
	},
	{
		id: 13,
		name: 'Chicken Botana (Small)',
		category: {
			name: 'Finger Foods',
			image: botana
		},
		price: 13,
		options: botanaOpts
	},
	{
		id: 14,
		name: 'Chicken Botana (Medium)',
		category: {
			name: 'Finger Foods',
			image: botana
		},
		price: 18,
		options: botanaOpts
	},
	{
		id: 15,
		name: 'Chicken Botana (Large)',
		category: {
			name: 'Finger Foods',
			image: botana
		},
		price: 23,
		options: botanaOpts
	},
	{
		id: 16,
		name: 'Chicken Ceviche (Small)',
		category: {
			name: 'Finger Foods',
			image: chickenceviche
		},
		price: 15,
		options: botanaOpts
	},
	{
		id: 17,
		name: 'Chicken Botana (Medium)',
		category: {
			name: 'Finger Foods',
			image: botana
		},
		price: 20,
		options: botanaOpts
	},
	{
		id: 18,
		name: 'Chicken Botana (Large)',
		category: {
			name: 'Finger Foods',
			image: botana
		},
		price: 25,
		options: botanaOpts
	},
	{
		id: 19,
		name: 'Fried Chicken',
		category: {
			name: 'Finger Foods',
			image: friedchicken
		},
		price: 12,
		options: friedChickenOpts
	},
	{
		id: 20,
		name: 'Chicken Torta',
		category: {
			name: 'Tortas',
			image: tortas
		},
		price: 7,
		notes: 'with Fries'
	},
	{
		id: 21,
		name: 'Ham Torta',
		category: {
			name: 'Tortas',
			image: tortas
		},
		price: 7,
		notes: 'with Fries'
	},
	{
		id: 22,
		name: 'Mixed Torta',
		category: {
			name: 'Tortas',
			image: tortas
		},
		price: 8,
		notes: 'with Fries'
	},
	{
		id: 23,
		name: 'Chicken Nachos',
		category: {
			name: 'Nachos',
			image: nachos
		},
		price: 10,
		addOnOptions: nachosAddOnOpts
	},
	{
		id: 24,
		name: 'Beef Nachos',
		category: {
			name: 'Nachos',
			image: nachos
		},
		price: 10,
		addOnOptions: nachosAddOnOpts
	},
	{
		id: 25,
		name: 'Supreme Chicken Nachos',
		category: {
			name: 'Nachos',
			image: nachos
		},
		price: 12,
		addOnOptions: nachosAddOnOpts
	},
	{
		id: 26,
		name: 'Supreme Beef Nachos',
		category: {
			name: 'Nachos',
			image: nachos
		},
		price: 12,
		addOnOptions: nachosAddOnOpts
	},
	{
		id: 27,
		name: 'Nacho Cheesy Fries',
		category: {
			name: 'French Fries',
			image: fries
		},
		price: 14
	},
	{
		id: 28,
		name: 'Plain Fries',
		category: {
			name: 'French Fries',
			image: fries
		},
		price: 14
	},
	{
		id: 29,
		name: 'Bacon Bites',
		category: {
			name: 'French Fries',
			image: fries
		},
		price: 12
	},
	{
		id: 30,
		name: 'Beef Cheesy Fries',
		category: {
			name: 'French Fries',
			image: fries
		},
		price: 12
	},
	{
		id: 31,
		name: 'Chips & Dip',
		category: {
			name: 'Other',
			image: cheesedip
		},
		price: 6,
		notes: '& up'
	},
	{
		id: 32,
		name: 'Kids Meal',
		category: {
			name: 'Other',
			image: cheesedip
		},
		price: 6,
		notes: 'comes with?'
	},
	{
		id: 33,
		name: 'Kids Meal with Juice',
		category: {
			name: 'Other',
			image: cheesedip
		},
		price: 8,
		notes: 'comes with?'
	},
	{
		id: 34,
		name: 'Order of fries',
		category: {
			name: 'Other',
			image: cheesedip
		},
		price: 5,
		notes: '& up'
	}
];
