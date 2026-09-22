<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	let {
		children,
		class: className,
		id: idName,
		...restProps
	} = $props<{ children: Snippet; class?: string; id?: string }>();
</script>

<div
	aria-label="Section heading"
	data-slot="Section heading"
	id={idName}
	class={cn('flex items-center justify-between py-3', className)}
	{...restProps}
>
	{@render children()}
</div>
