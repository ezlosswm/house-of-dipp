import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

import Root from './card.svelte';
import Header from './card-header.svelte';
import Content from './card-content.svelte';

export interface CardBaseProps extends HTMLAttributes<HTMLDivElement> {
	class?: string;
	children?: Snippet;
}
export interface CardProps extends CardBaseProps {
	image?: Snippet;
}

export type CardHeaderProps = CardBaseProps;
export type CardContentProps = CardBaseProps;

export { Root, Header, Content };
