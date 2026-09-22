<script lang="ts">
	import { cn } from '$lib/utils';
	import type { CardContentProps } from './index';

	let { children, class: className, ...restProps }: CardContentProps = $props();
</script>

<div
	aria-label="Card content"
	class={cn('w-full pb-2.5 text-sm text-muted-foreground', className)}
	{...restProps}
>
	{@render children?.()}
</div>
