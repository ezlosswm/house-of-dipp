<script lang="ts">
	import * as Card from '$lib/components/ui/card/index';
	import * as SectionHeader from '$lib/components/section/index';
	import * as Drawer from '$lib/components/ui/drawer/index';
	import Hero from '$lib/components/Hero.svelte';
	import SearchInput from '$lib/components/SearchInput.svelte';
	import Cart from '$lib/components/Cart.svelte';

	import { menuItemList } from '$lib/menu';
	import { formatPrice } from '$lib';
	import { useCart } from '$lib/cart-context.svelte';

	import PlusIcon from 'phosphor-svelte/lib/PlusIcon';
	import ShoppingCartSimpleIcon from 'phosphor-svelte/lib/ShoppingCartSimpleIcon';
	import Checkout from '$lib/components/Checkout.svelte';
	import Carousel from '$lib/components/ui/carousel/Carousel.svelte';

	const cart = useCart();

	let search = $state('');
	const query = $derived(search.trim().toLowerCase());
	let selectedCategory = $state<string | null>(null);

	let displayedMenu = $derived(
		menuItemList.filter((item) => {
			const matchSearch = !query || item.name.toLowerCase().includes(query);

			const matchCategory = selectedCategory === null || item.category.name === selectedCategory;

			return matchSearch && matchCategory;
		})
	);
</script>

<Hero />

<main class="mx-auto w-full max-w-2xl px-4 sm:px-8">
	<div class="space-y-6">
		<section aria-labelledby="category-heading">
			<SectionHeader.Root id="category-heading">
				<SectionHeader.Title>Category</SectionHeader.Title>
			</SectionHeader.Root>

			<Carousel bind:selectedCategory />
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
							<div class="aspect-square w-full">
								<enhanced:img
									width="500"
									height="500"
									loading="lazy"
									src={item.category.image}
									alt={item.name}
									class="object-contain"
								/>
							</div>
						{/snippet}
						<div class="w-full space-y-1">
							<Card.Header class="text-sm font-medium">{item.name}</Card.Header>
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
									<div class="aspect-square h-62.5 w-full">
										<enhanced:img
											class="max-h-62.5 w-full object-contain object-center"
											width="500"
											height="500"
											src={item.category.image}
											alt={item.name}
										/>
									</div>
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
			<Drawer.Content class="h-full">
				<div class="mb-3 flex items-center justify-between">
					<h2 class="text-xl font-bold">Cart</h2>
					<Drawer.Close size="lg" class="" />
				</div>
				<Checkout />
			</Drawer.Content>
		</Drawer.Root>
	</div>
</main>
