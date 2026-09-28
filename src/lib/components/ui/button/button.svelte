<script lang="ts" module>
	import { type VariantProps, tv } from 'tailwind-variants';
	import { cn, type WithElementRef } from '$lib/utils.js';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

	export const buttonVariants = tv({
		base: `
		inline-flex shrink-0 cursor-pointer items-center justify-center gap-1.5
		rounded-[10px] text-sm font-medium tracking-[-3%]
		active:scale-[0.99]
		transition-colors outline-none
		focus-visible:ring-2 focus-visible:ring-primary
		focus-visible:ring-offset-2 focus-visible:ring-offset-background
		disabled:pointer-events-none disabled:opacity-50
		[&>svg]:shrink-0
	`,
		variants: {
			variant: {
				default: 'bg-primary text-background hover:bg-primary-hover',
				secondary: 'bg-accent text-foreground hover:bg-accent-hover',
				ghost: 'rounded-[10px] bg-transparent hover:bg-accent hover:text-muted-foreground',
				outline: 'rounded-[10px] bg-transparent hover:bg-accent border border-border',
				icon: 'rounded-full border border-border bg-background text-foreground hover:bg-surface-hover'
			},
			size: {
				default: 'p-2 [&>svg]:size-4',
				lg: 'h-10 px-5 [&>svg]:size-5',
				icon: 'size-10 p-0 [&>svg]:size-5'
			}
		},
		defaultVariants: {
			variant: 'default',
			size: 'default'
		}
	});

	export type ButtonVariant = VariantProps<typeof buttonVariants>['variant'];
	export type ButtonSize = VariantProps<typeof buttonVariants>['size'];

	export type ButtonProps = WithElementRef<HTMLButtonAttributes> &
		WithElementRef<HTMLAnchorAttributes> & {
			variant?: ButtonVariant;
			size?: ButtonSize;
		};
</script>

<script lang="ts">
	let {
		class: className,
		variant = 'default',
		size = 'default',
		ref = $bindable(null),
		type = 'button',
		disabled,
		children,
		...restProps
	}: ButtonProps = $props();
</script>

<button
	bind:this={ref}
	data-slot="button"
	class={cn(buttonVariants({ variant, size }), className)}
	{type}
	{disabled}
	{...restProps}
>
	{@render children?.()}
</button>
