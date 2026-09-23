<script lang="ts">
	import type { Snippet } from 'svelte';
	import { setSheetContext } from './sheet-context.svelte';

	let { children, defaultOpen = false }: { children: Snippet; defaultOpen?: boolean } = $props();

	setSheetContext(defaultOpen);
</script>

{@render children?.()}
