import burger from '$lib/assets/burger.png';
import nachos from '$lib/assets/nachos.png';
import wings from '$lib/assets/wings.png';
import fries from '$lib/assets/fries.png';
import fingers from '$lib/assets/fingers.png';
import friedchicken from '$lib/assets/friedchicken.png';
import tortas from '$lib/assets/tortas.png';
import cheesedip from '$lib/assets/cheesedip.png';
import botana from '$lib/assets/botana.png';
import chickenceviche from '$lib/assets/botana.png';

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

export const menuItems = [
	{
		id: 1,
		title: 'Beef Burger',
		img: burger,
		category: 'Burgers',
		price: '$12.00'
	},
	{
		id: 2,
		title: 'Chicken Strip Burger',
		img: burger,
		category: 'Burgers',
		price: '$14.00'
	},
	{
		id: 3,
		title: 'Chicken Wings',
		img: wings,
		category: 'Finger Foods',
		price: '$18.00'
	},
	{
		id: 4,
		title: 'Chicken Fingers',
		img: fingers,
		category: 'Finger Foods',
		price: '$10.00'
	},
	{
		id: 5,
		title: 'Chicken Ceviche',
		img: chickenceviche,
		category: 'Finger Foods',
		price: '$20.00'
	},
	{
		id: 6,
		title: 'Fries',
		img: fries,
		category: 'Fries',
		price: '$8.00'
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

const wingsAddOnOpts: Map<string, number> = new Map([
	['Extra fies', 2],
	['Extra sauce', 2]
]);

const fingersAddOnOpts: Map<string, number> = new Map([['Extra fies', 2]]);

const burgerAddOnOpts: Map<string, number> = new Map([
	['Extra bacon', 2],
	['Extra cheese', 2]
]);

const botanaOpts: Opts = ['Fries', 'Chips'];

const friedChickenOpts: Opts = ['Leg', 'Breast'];

const nachosAddOnOpts: Map<string, number> = new Map([
	['Extra cheese', 2],
	['Extra meat', 2],
	['Both', 4]
]);

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
		id: 16,
		name: 'Chicken Botana (Large)',
		category: {
			name: 'Finger Foods',
			image: botana
		},
		price: 23,
		options: botanaOpts
	},
	{
		id: 17,
		name: 'Chicken Ceviche (Small)',
		category: {
			name: 'Finger Foods',
			image: chickenceviche
		},
		price: 15,
		options: botanaOpts
	},
	{
		id: 18,
		name: 'Chicken Botana (Medium)',
		category: {
			name: 'Finger Foods',
			image: chickenceviche
		},
		price: 20,
		options: botanaOpts
	},
	{
		id: 19,
		name: 'Chicken Botana (Large)',
		category: {
			name: 'Finger Foods',
			image: chickenceviche
		},
		price: 25,
		options: botanaOpts
	},
	{
		id: 20,
		name: 'Fried Chicken',
		category: {
			name: 'Finger Foods',
			image: friedchicken
		},
		price: 12,
		options: friedChickenOpts
	},
	{
		id: 22,
		name: 'Chicken Torta',
		category: {
			name: 'Tortas',
			image: tortas
		},
		price: 7,
		notes: 'with Fries'
	},
	{
		id: 23,
		name: 'Ham Torta',
		category: {
			name: 'Tortas',
			image: tortas
		},
		price: 7,
		notes: 'with Fries'
	},
	{
		id: 24,
		name: 'Mixed Torta',
		category: {
			name: 'Tortas',
			image: tortas
		},
		price: 8,
		notes: 'with Fries'
	},
	{
		id: 25,
		name: 'Chicken Nachos',
		category: {
			name: 'Nachos',
			image: nachos
		},
		price: 10,
		addOnOptions: nachosAddOnOpts
	},
	{
		id: 26,
		name: 'Beef Nachos',
		category: {
			name: 'Nachos',
			image: nachos
		},
		price: 10,
		addOnOptions: nachosAddOnOpts
	},
	{
		id: 27,
		name: 'Supreme Chicken Nachos',
		category: {
			name: 'Nachos',
			image: nachos
		},
		price: 12,
		addOnOptions: nachosAddOnOpts
	},
	{
		id: 28,
		name: 'Supreme Beef Nachos',
		category: {
			name: 'Nachos',
			image: nachos
		},
		price: 12,
		addOnOptions: nachosAddOnOpts
	},
	{
		id: 29,
		name: 'Nacho Cheesy Fries',
		category: {
			name: 'Fries',
			image: fries
		},
		price: 14
	},
	{
		id: 30,
		name: 'Plain Fries',
		category: {
			name: 'Fries',
			image: fries
		},
		price: 14
	},
	{
		id: 31,
		name: 'Bacon Bites',
		category: {
			name: 'Fries',
			image: fries
		},
		price: 12
	},
	{
		id: 32,
		name: 'Beef Cheesy Fries',
		category: {
			name: 'Fries',
			image: fries
		},
		price: 12
	},
	{
		id: 33,
		name: 'Chips & Dip',
		category: {
			name: 'Other',
			image: cheesedip
		},
		price: 6,
		notes: '& up'
	},
	{
		id: 34,
		name: 'Kids Meal',
		category: {
			name: 'Other',
			image: cheesedip
		},
		price: 6,
		notes: 'comes with?'
	},
	{
		id: 35,
		name: 'Kids Meal with Juice',
		category: {
			name: 'Other',
			image: cheesedip
		},
		price: 8,
		notes: 'comes with?'
	},
	{
		id: 36,
		name: 'Order of fries',
		category: {
			name: 'Other',
			image: cheesedip
		},
		price: 5,
		notes: '& up'
	}
];
