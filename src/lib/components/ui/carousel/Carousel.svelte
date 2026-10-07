<script lang="ts">
	import * as Card from '$lib/components/ui/card/index';
	import Button from '$lib/components/ui/button/button.svelte';

	import combomeal from '$lib/assets/combo-meal.webp';

	import { menuCategory } from '$lib/menu';

	import CaretRightIcon from 'phosphor-svelte/lib/CaretRightIcon';
	import CaretLeftIcon from 'phosphor-svelte/lib/CaretLeftIcon';

	let containerRef: HTMLDivElement | null = $state(null);

	function scroll(direction: 'left' | 'right') {
		if (!containerRef) return;

		const scrollAmt = containerRef.clientWidth * 0.75;
		containerRef.scrollBy({
			left: direction === 'left' ? -scrollAmt : scrollAmt,
			behavior: 'smooth'
		});
	}

	let { selectedCategory = $bindable(null) }: { selectedCategory?: string | null } = $props();

	function filterByCategory(name: string) {
		selectedCategory = selectedCategory === name ? null : name;
	}
</script>

<div
	role="region"
	aria-roledescription="carousel"
	aria-label="Menu categories"
	class="relative w-full overflow-hidden bg-background"
>
	<Button
		class="sr-only absolute top-1/2 left-2 z-20 -translate-y-1/2 sm:hidden"
		aria-label="Scroll left"
		aria-controls="category-carousel-list"
		variant="icon"
		size="icon"
		onclick={() => scroll('left')}
	>
		<CaretLeftIcon />
	</Button>

	<div
		bind:this={containerRef}
		id="category-carousel-list"
		aria-label="Categories list"
		class="smooth-scroll flex max-w-xl snap-x snap-mandatory scrollbar-none gap-2 overflow-x-auto lg:overflow-visible"
	>
		<Card.Root
			role="group"
			aria-roledescription="slide"
			aria-pressed={selectedCategory === null}
			onclick={() => (selectedCategory = null)}
			class="h-25 min-w-25 cursor-pointer snap-start"
		>
			{#snippet image()}
				<img src={combomeal} alt="Combo Meal" class="size-full object-contain" />
			{/snippet}
			<Card.Header class="w-full text-center text-xs leading-tight font-bold tracking-[-0.035em]">
				All</Card.Header
			>
		</Card.Root>
		{#each menuCategory as category, index (index)}
			<Card.Root
				role="group"
				aria-roledescription="slide"
				aria-label="{index + 1} of {menuCategory.length}"
				aria-pressed={selectedCategory === category.name}
				onclick={() => filterByCategory(category.name)}
				class="h-25 min-w-25 cursor-pointer snap-start"
			>
				{#snippet image()}
					<img src={category.image} alt={category.name} class="size-full object-contain" />
				{/snippet}
				<Card.Header class="w-full text-center text-xs leading-tight font-bold tracking-[-0.035em]">
					{category.name}</Card.Header
				>
			</Card.Root>
		{/each}
	</div>

	<Button
		class="sr-only absolute top-1/2 right-2 z-20 -translate-y-1/2 sm:hidden"
		aria-label="Scroll right"
		aria-controls="category-carousel-list"
		variant="icon"
		size="icon"
		onclick={() => scroll('right')}
	>
		<CaretRightIcon class="border-0 ring-0 outline-none" />
	</Button>
</div>
