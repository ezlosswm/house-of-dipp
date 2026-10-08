<script lang="ts">
	import XIcon from 'phosphor-svelte/lib/XIcon';
	import { Button, type ButtonProps } from '$lib/components/ui/button/index';
	import { cn } from '$lib/utils';

	import { getSheetContext } from './sheet-context.svelte';

	const sheet = getSheetContext();

	let { children, class: className, size, ...restProps }: ButtonProps = $props();
</script>

<Button
	onclick={() => sheet.close()}
	type="button"
	data-slot="drawer-button"
	variant="ghost"
	class={cn('', className)}
	{size}
	{...restProps}
>
	{#if !children}
		<XIcon />
	{/if}

	{@render children?.()}
</Button>
