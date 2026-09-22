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
