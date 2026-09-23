<script lang="ts">
	import * as Card from '$lib/components/ui/card/index';
	import * as SectionHeader from '$lib/components/section/index';
	import * as Drawer from '$lib/components/ui/drawer/index';
	import Button from '$lib/components/ui/button/button.svelte';
	import Hero from '$lib/components/Hero.svelte';

	import { menuCategory, menuItems } from '$lib/menu';

	import ShoppingCartSimpleIcon from 'phosphor-svelte/lib/ShoppingCartSimpleIcon';
	import CaretRightIcon from 'phosphor-svelte/lib/CaretRightIcon';
	import CaretLeftIcon from 'phosphor-svelte/lib/CaretLeftIcon';
	import WhatsappLogoIcon from 'phosphor-svelte/lib/WhatsappLogoIcon';

	import SearchInput from '$lib/components/SearchInput.svelte';

	let containerRef: HTMLDivElement | null = $state(null);
	let search = $state('');

	function scroll(direction: 'left' | 'right') {
		if (!containerRef) return;

		const scrollAmt = containerRef.clientWidth * 0.75;
		containerRef.scrollBy({
			left: direction === 'left' ? -scrollAmt : scrollAmt,
			behavior: 'smooth'
		});
	}
</script>

<Hero />

<main class="mx-auto w-full max-w-2xl px-4 sm:px-8">
	<div class="space-y-6">
		<section aria-labelledby="category-heading">
			<SectionHeader.Root id="category-heading">
				<SectionHeader.Title>Category</SectionHeader.Title>
			</SectionHeader.Root>

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
					{#each menuCategory as category, index (index)}
						<Card.Root
							role="group"
							aria-roledescription="slide"
							aria-label="{index + 1} of {menuCategory.length}"
							class="h-25 min-w-25 snap-start"
						>
							{#snippet image()}
								<img src={category.img} alt={category.title} class="size-full object-contain" />
							{/snippet}
							<Card.Header
								class="w-full text-center text-xs leading-tight font-bold tracking-[-0.035em]"
							>
								{category.title}</Card.Header
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
		</section>

		<section aria-labelledby="menu">
			<SectionHeader.Root id="Menu" class="flex flex-wrap gap-2">
				<SectionHeader.Title>Full Menu</SectionHeader.Title>
				<SearchInput bind:value={search} />
			</SectionHeader.Root>

			<div class="grid grid-cols-2 gap-3 sm:grid-cols-3">
				{#each menuItems as item (item.id)}
					<Card.Root class="w-full min-w-0">
						{#snippet image()}
							<img src={item.img} alt={item.title} class="size-full object-contain" />
						{/snippet}
						<div class="w-full space-y-1">
							<Card.Header class="text-xs font-medium">{item.title}</Card.Header>
							<Card.Content>
								<div class="flex w-full items-center justify-between">
									<p class="text-xs">{item.category}</p>
									<p class="font-medium">{item.price}</p>
								</div>
							</Card.Content>
						</div>

						<Drawer.Root>
							<Drawer.Trigger>
								<ShoppingCartSimpleIcon />
								Add to cart
							</Drawer.Trigger>

							<Drawer.Content>
								<Drawer.Close>Close</Drawer.Close>
								Hello World
							</Drawer.Content>
						</Drawer.Root>
						<!-- <Card.Action>
							<ShoppingCartSimpleIcon />
							Add to cart
						</Card.Action> -->
					</Card.Root>
				{/each}
			</div>
		</section>
	</div>

	<div class="sticky bottom-8 z-10 my-8">
		<Button size="lg" class="w-full">
			<WhatsappLogoIcon aria-hidden="true" />

			<span> View Cart </span>
			•
			<span> 1 item </span>
		</Button>
	</div>
</main>
