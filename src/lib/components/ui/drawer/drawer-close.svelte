<script lang="ts">
	import { Button, type ButtonProps } from '$lib/components/ui/button/index';
	import { cn } from '$lib/utils';
	import { getSheetContext } from './sheet-context.svelte';

	const sheet = getSheetContext();

	let { children, class: className, size, ...restProps }: ButtonProps = $props();
</script>

<Button
	onclick={() => sheet.close()}
	data-slot="drawer-button"
	variant="icon"
	class={cn('', className)}
	{size}
	{...restProps}
>
	{#if !children}
		X
	{/if}

	{@render children?.()}
</Button>
