import burger from '$lib/assets/burger.png';
import nachos from '$lib/assets/nachos.png';
import wings from '$lib/assets/wings.png';
import fries from '$lib/assets/fries.png';
import fingers from '$lib/assets/fingers.png';
import cheesedip from '$lib/assets/cheesedip.png';
import chickenceviche from '$lib/assets/botana.png';

export const menuCategory = [
	{
		img: burger,
		title: 'Burgers'
	},
	{
		img: nachos,
		title: 'Finger Foods'
	},
	{
		img: wings,
		title: 'Wings'
	},
	{
		img: fries,
		title: 'French Fries'
	},
	{
		img: cheesedip,
		title: 'Other'
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

const wingSauceOpts: SauceOpts = [
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

export const menuItemList: FoodItem[] = [
	{
		id: 1,
		name: 'Chicken Wings 6pc',
		category: 'Finger Foods',
		image: wings,
		price: 12.0,
		sauceOptions: wingSauceOpts,
		addOnOptions: wingsAddOnOpts
	},
	{
		id: 2,
		name: 'Chicken Wings 10pc',
		category: 'Finger Foods',
		image: wings,
		price: 18.0,
		sauceOptions: wingSauceOpts,
		addOnOptions: wingsAddOnOpts
	},
	{
		id: 3,
		name: 'Chicken Wings 15pc',
		category: 'Finger Foods',
		image: wings,
		price: 28.0,
		sauceOptions: wingSauceOpts,
		addOnOptions: wingsAddOnOpts
	},
	{
		id: 4,
		name: 'Chicken Fingers 6pc',
		category: 'Finger Foods',
		image: fingers,
		price: 12.0,
		addOnOptions: fingersAddOnOpts
	},
	{
		id: 5,
		name: 'Chicken Fingers 10pc',
		category: 'Finger Foods',
		image: fingers,
		price: 18.0,
		addOnOptions: fingersAddOnOpts
	},
	{
		id: 6,
		name: 'Chicken Fingers 15pc',
		category: 'Finger Foods',
		image: fingers,
		price: 28.0,
		addOnOptions: fingersAddOnOpts
	}
];
