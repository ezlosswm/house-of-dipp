<script lang="ts">
	import type { CardProps } from './index';
	import { cn } from '$lib/utils';

	let { children, image, class: className, ...restProps }: CardProps = $props();
</script>

<div
	aria-label="Card"
	data-slot="card"
	class={cn(
		'flex flex-col items-center gap-2 overflow-hidden rounded-xl border border-border bg-white p-2 hover:border-border-strong',
		className
	)}
	{...restProps}
>
	{#if image}
		<div class="min-h-0 w-full flex-1">
			{@render image?.()}
		</div>
	{/if}
	{@render children?.()}
</div>
