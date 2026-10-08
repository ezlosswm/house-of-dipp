<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';

	import { combomeal } from '$lib/menu';

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
		<button
			type="button"
			aria-pressed={selectedCategory === null}
			onclick={() => (selectedCategory = null)}
			class="flex size-25 shrink-0 cursor-pointer snap-start
		flex-col items-center gap-2 overflow-hidden
		rounded-xl border border-border bg-white p-2 text-foreground
		focus-visible:outline-2 focus-visible:outline-offset-2
		focus-visible:outline-primary"
		>
			<div class="min-h-0 w-full flex-1">
				<enhanced:img src={combomeal} alt="" class="size-full object-contain" />
			</div>

			<span class="w-full shrink-0 text-center text-xs leading-tight font-bold tracking-[-0.035em]">
				All
			</span>
		</button>
		{#each menuCategory as category, index (category.name)}
			<button
				type="button"
				aria-roledescription="slide"
				aria-label="{index + 2} of {menuCategory.length + 1}"
				aria-pressed={selectedCategory === category.name}
				onclick={() => filterByCategory(category.name)}
				class="flex size-25 shrink-0 cursor-pointer snap-start
		flex-col items-center gap-2 overflow-hidden
		rounded-xl border border-border bg-white p-2 text-foreground
		focus-visible:outline-2 focus-visible:outline-offset-2
		focus-visible:outline-primary"
			>
				<div class="min-h-0 w-full flex-1">
					<enhanced:img
						src={category.image}
						alt=""
						width="100"
						height="100"
						class="size-full object-contain"
					/>
				</div>
				<span
					class="w-full shrink-0 text-center text-xs leading-tight font-bold tracking-[-0.035em]"
				>
					{category.name}</span
				>
			</button>
		{/each}
	</div>

	<Button
		class="sr-only absolute top-1/2 right-2 z-20 -translate-y-1/2 sm:hidden"
		type="button"
		aria-label="Scroll right"
		aria-controls="category-carousel-list"
		variant="icon"
		size="icon"
		onclick={() => scroll('right')}
	>
		<CaretRightIcon class="border-0 ring-0 outline-none" />
	</Button>
</div>
