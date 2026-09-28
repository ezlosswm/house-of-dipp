<script lang="ts">
	import * as Card from '$lib/components/ui/card/index';
	import * as SectionHeader from '$lib/components/section/index';
	import * as Drawer from '$lib/components/ui/drawer/index';
	import Button from '$lib/components/ui/button/button.svelte';
	import Hero from '$lib/components/Hero.svelte';

	import { menuCategory, menuItemList } from '$lib/menu';
	import { formatPrice } from '$lib';
	import { useCart } from '$lib/cart-context.svelte';

	import PlusIcon from 'phosphor-svelte/lib/PlusIcon';
	import CaretRightIcon from 'phosphor-svelte/lib/CaretRightIcon';
	import CaretLeftIcon from 'phosphor-svelte/lib/CaretLeftIcon';
	import ShoppingCartSimpleIcon from 'phosphor-svelte/lib/ShoppingCartSimpleIcon';

	import SearchInput from '$lib/components/SearchInput.svelte';
	import Cart from '$lib/components/Cart.svelte';

	const cart = useCart();

	let containerRef: HTMLDivElement | null = $state(null);

	function scroll(direction: 'left' | 'right') {
		if (!containerRef) return;

		const scrollAmt = containerRef.clientWidth * 0.75;
		containerRef.scrollBy({
			left: direction === 'left' ? -scrollAmt : scrollAmt,
			behavior: 'smooth'
		});
	}

	let search = $state('');

	let displayedMenu = $derived(
		menuItemList.filter((item) => item.name.toLowerCase().includes(search.trim().toLowerCase()))
	);
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
								<img src={category.image} alt={category.name} class="size-full object-contain" />
							{/snippet}
							<Card.Header
								class="w-full text-center text-xs leading-tight font-bold tracking-[-0.035em]"
							>
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
		</section>

		<section aria-labelledby="menu">
			<SectionHeader.Root id="Menu" class="flex flex-wrap gap-2">
				<SectionHeader.Title>Full Menu</SectionHeader.Title>
				<SearchInput bind:value={search} />
			</SectionHeader.Root>

			<div class="grid grid-cols-2 gap-3 sm:grid-cols-3">
				{#each displayedMenu as item (item.id)}
					<Card.Root class="w-full min-w-0">
						{#snippet image()}
							<img src={item.category.image} alt={item.name} class="size-full object-contain" />
						{/snippet}
						<div class="w-full space-y-1">
							<Card.Header class="text-sm font-medium"
								>{item.name}
								<span class="text-xs font-normal">
									{item.notes}
								</span></Card.Header
							>
							<Card.Content>
								<div class="flex w-full items-center justify-between">
									<p class="text-xs">{item.category.name}</p>
									<p class="font-medium">{formatPrice(item.price)}</p>
								</div>
							</Card.Content>
						</div>

						<Drawer.Root>
							<Drawer.Trigger>
								<PlusIcon />
								Add to cart
							</Drawer.Trigger>

							<Drawer.Content>
								<div class="relative">
									<Drawer.Close size="lg" class="absolute top-4 right-0" />
									<img
										class="max-h-62.5 w-full object-contain"
										src={item.category.image}
										alt={item.name}
									/>
								</div>

								<Cart {item} />
							</Drawer.Content>
						</Drawer.Root>
					</Card.Root>
				{/each}
			</div>
		</section>
	</div>

	<div class="sticky bottom-8 z-10 my-8">
		<Drawer.Root>
			<Drawer.Trigger>
				<ShoppingCartSimpleIcon aria-hidden="true" />

				<span> View Cart </span>
				•
				<span> {formatPrice(cart.total())} </span>
			</Drawer.Trigger>
			<Drawer.Content>
				<div class="flex flex-col gap-2">
					{#each cart.lines() as cartItem (cartItem.item.name)}
						<div class="flex items-baseline justify-between gap-2">
							<div>
								<img class="size-10" src={cartItem.item.category.image} alt={cartItem.item.name} />
								<p>{cartItem.item.name}</p>
							</div>
							<div class="ml-auto flex gap-4">
								<p>Price: {cartItem.item.price}</p>
								<p>Quantity: {cartItem.quantity}</p>
							</div>
						</div>
					{/each}

					<h4 class="text-lg font-semibold">
						Total:
						<span>{formatPrice(cart.total())}</span>
					</h4>
				</div>
				<div class="sticky bottom-24 z-10">
					<Button class="w-full">Order Now</Button>
				</div>
			</Drawer.Content>
		</Drawer.Root>
	</div>
</main>
