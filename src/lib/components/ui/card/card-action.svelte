<!-- card-action.svelte -->
<script lang="ts">
	import Button, { type ButtonProps } from '$lib/components/ui/button/button.svelte';
	import { cn } from '$lib/utils';

	let { children, class: className, variant, size, ...restProps }: ButtonProps = $props();
</script>

<Button
	data-slot="card-action"
	class={cn('self-start justify-self-end', className)}
	{variant}
	{size}
	{...restProps}
>
	{@render children?.()}
</Button>
