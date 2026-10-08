<script lang="ts">
	import { Button, type ButtonProps } from '$lib/components/ui/button/index';
	import { cn } from '$lib/utils';

	let { children, class: className, variant, size, ...restProps }: ButtonProps = $props();
</script>

<Button
	type="button"
	data-slot="card-action"
	class={cn('w-full', className)}
	{variant}
	{size}
	{...restProps}
>
	{@render children?.()}
</Button>
