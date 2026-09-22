<script lang="ts" module>
	import { type VariantProps, tv } from 'tailwind-variants';
	import { cn, type WithElementRef } from '$lib/utils.js';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

	export const buttonVariants = tv({
		base: `
		cursor-pointer
		flex w-auto items-center justify-center gap-1 rounded-sm
		font-medium
		tracking-[-0.03em] transition-all
		outline-none
		focus-visible:ring-2
		focus-visible:ring-muted-foreground/50
		focus-visible:ring-offset-2
		disabled:pointer-events-none
		disabled:opacity-50 text-sm 
		active:scale-99
		[&>svg]:shrink-0
	`,
		variants: {
			variant: {
				default: 'bg-primary text-background hover:bg-primary/90',
				secondary: 'bg-accent hover:bg-accent-hover',
				icon: `
				rounded-full
				border border-muted-foreground
				bg-background text-foreground
				hover:bg-white
			`
			},
			size: {
				default: 'px-3 py-1 [&>svg]:size-4',
				lg: 'px-5 py-1 [&>svg]:size-5',
				icon: 'size-8 p-0'
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
