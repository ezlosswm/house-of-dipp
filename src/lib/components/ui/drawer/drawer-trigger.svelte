<script lang="ts">
	import { Button, type ButtonProps } from '$lib/components/ui/button/index';
	import { cn } from '$lib/utils';
	import { getSheetContext } from './sheet-context.svelte';

	const sheet = getSheetContext();

	let { children, class: className, variant, size, ...restProps }: ButtonProps = $props();
</script>

<Button
	onclick={() => sheet.show()}
	data-slot="drawer-button"
	class={cn('w-full', className)}
	{variant}
	{size}
	{...restProps}
>
	{@render children?.()}
</Button>
