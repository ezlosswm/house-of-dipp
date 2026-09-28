<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { getSheetContext } from './sheet-context.svelte';
	import { cn } from '$lib/utils';
	import { fly, fade } from 'svelte/transition';

	const sheet = getSheetContext();

	let { children, class: className }: HTMLAttributes<HTMLDivElement> = $props();

	function handleEscKeyDown(event: KeyboardEvent) {
		if (event.key === 'Escape' && sheet.open) {
			sheet.close();
		}
	}

	$effect(() => {
		if (!sheet.open) return;

		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = previousOverflow;
		};
	});
</script>

<svelte:window on:keydown={handleEscKeyDown} />

{#if sheet.open}
	<button
		class="fixed inset-0 z-40 bg-black/50"
		aria-label="Close sheet"
		aria-hidden="true"
		onclick={() => sheet.close()}
		transition:fade={{ duration: 200 }}
	></button>

	<div
		transition:fly={{ y: 500, duration: 750 }}
		role="dialog"
		aria-modal="true"
		class={cn(
			'fixed inset-x-0 bottom-0 z-50 h-[calc(100dvh-5rem)] w-screen overflow-y-auto overscroll-contain rounded-t-4xl border-t-2 border-border bg-background px-4 pt-8 pb-4 sm:p-8',
			className
		)}
	>
		{@render children?.()}
	</div>
{/if}
