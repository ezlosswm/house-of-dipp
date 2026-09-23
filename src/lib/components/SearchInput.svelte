<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';

	import Button from '$lib/components/ui/button/button.svelte';

	import MagnifyingGlassIcon from 'phosphor-svelte/lib/MagnifyingGlassIcon';
	import XIcon from 'phosphor-svelte/lib/XIcon';

	let visible = $state<boolean>(false);
	let { value = $bindable('') } = $props();
</script>

{#if !visible}
	<Button onclick={() => (visible = !visible)} variant="icon" size="icon">
		<MagnifyingGlassIcon />
	</Button>
{:else}
	<Button onclick={() => (visible = !visible)} variant="icon" size="icon">
		<XIcon />
	</Button>
{/if}

{#if visible}
	<div
		in:fly={{ y: -10, duration: 450, easing: cubicIn }}
		out:fly={{ y: -10, duration: 450, easing: cubicOut }}
		class="relative w-full rounded-xl border border-border bg-white p-2 hover:border-border-strong"
	>
		<div class="absolute top-1/2 -translate-y-1/2 pl-1">
			<MagnifyingGlassIcon />
		</div>

		<input
			bind:value
			class="w-full pr-16 pl-6 text-sm outline-none"
			type="text"
			placeholder="Burger, fried chicken, fries.."
		/>

		<div class="absolute top-1/2 right-0 -translate-y-1/2 pr-2">
			<Button class="">Search</Button>
		</div>
	</div>
{/if}
