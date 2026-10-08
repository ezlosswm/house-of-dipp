<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';

	import Button from '$lib/components/ui/button/button.svelte';

	import MagnifyingGlassIcon from 'phosphor-svelte/lib/MagnifyingGlassIcon';
	import XIcon from 'phosphor-svelte/lib/XIcon';

	let visible = $state<boolean>(false);
	let { value = $bindable('') } = $props();
</script>

<Button
	type="button"
	aria-label={visible ? 'Close menu search' : 'Open menu search'}
	aria-expanded={visible}
	onclick={() => (visible = !visible)}
	variant="ghost"
	size="icon"
>
	{#if !visible}
		<MagnifyingGlassIcon />
	{:else}
		<XIcon />
	{/if}
</Button>

{#if visible}
	<div
		in:fly={{ y: -10, duration: 450, easing: cubicIn }}
		out:fly={{ y: -10, duration: 450, easing: cubicOut }}
		class="relative w-full rounded-xl border border-border bg-white p-3 hover:border-border-strong"
	>
		<div aria-hidden="true" class="pointer-events-none absolute top-1/2 -translate-y-1/2 pl-1">
			<MagnifyingGlassIcon />
		</div>

		<input
			bind:value
			class="w-full pr-16 pl-6 text-sm outline-none"
			aria-label="Search menu"
			type="text"
			placeholder="Burger, fried chicken, fries..."
		/>
	</div>
{/if}
