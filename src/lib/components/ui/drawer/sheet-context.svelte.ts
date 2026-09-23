import { getContext, setContext } from 'svelte';

const SHEET_CONTEXT = Symbol('sheet');

class SheetState {
	open = $state(false);

	constructor(initialOpen = false) {
		this.open = initialOpen;
	}

	show() {
		this.open = true;
	}

	close() {
		this.open = false;
	}

	toggle() {
		this.open = !this.open;
	}
}

export function setSheetContext(initialOpen = false) {
	const state = new SheetState(initialOpen);

	setContext(SHEET_CONTEXT, state);

	return state;
}

export function getSheetContext() {
	return getContext<SheetState>(SHEET_CONTEXT);
}
