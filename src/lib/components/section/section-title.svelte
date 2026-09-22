<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<h2 class="font-heading text-xl leading-[1.2] font-bold tracking-[0.03em]">
	{@render children()}
</h2>
