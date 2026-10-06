<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { useCart } from '$lib/cart-context.svelte';

	import { formatPrice } from '$lib';
	import MinusIcon from 'phosphor-svelte/lib/MinusIcon';
	import PlusIcon from 'phosphor-svelte/lib/PlusIcon';

	const cart = useCart();
</script>

<div class="flex h-full flex-col justify-between">
	<div>
		{#each cart.lines() as cartItem (cartItem.item.name)}
			<div class="flex items-center justify-between gap-2">
				<div class="flex items-center gap-1">
					<img class="size-25" src={cartItem.item.category.image} alt={cartItem.item.name} />
					<div class="space-y-3">
						<div class="space-y-1">
							<h4>{cartItem.item.name}</h4>
							<div class="flex items-center gap-1">
								<div class="flex flex-col text-xs text-muted-foreground">
									<p>
										{cartItem.selectedOptions}
									</p>
									{#if cartItem.addOnOptions.length > 0}
										{#each cartItem.addOnOptions as addOn (addOn.name)}
											<span>{addOn.name} + {formatPrice(addOn.price)} </span>
										{/each}
									{/if}
								</div>
							</div>
						</div>
						<div class="flex items-center gap-2">
							<Button
								onclick={() => cart.decrease(cartItem.item.id)}
								variant="outline"
								size="icon-sm"
							>
								<MinusIcon />
							</Button>

							<p class="text-xl">
								{cartItem.quantity}
							</p>

							<Button
								onclick={() => cart.increment(cartItem.item.id)}
								variant="outline"
								size="icon-sm"
							>
								<PlusIcon />
							</Button>
						</div>
					</div>
				</div>

				<p class="text-xl font-semibold">
					{formatPrice(cartItem.total)}
				</p>
			</div>
		{/each}
	</div>

	<div class="sticky bottom-4 w-full">
		<div class="space-y-5 border-t border-border">
			<div class="space-y-1 pt-6">
				<div class="flex items-start justify-between text-base text-muted-foreground">
					<h4 class="text-foreground">Subtotal</h4>
					<span>{formatPrice(cart.total())}</span>
				</div>
				<div class="flex items-start justify-between text-base text-muted-foreground">
					<h4 class="text-foreground">Add On</h4>

					<div class="text-xs">
						{#each cart.lines() as addOns}
							<div class="space-y-1">
								{#each addOns.addOnOptions as addOn}
									<p>{addOn.name}</p>
								{/each}
							</div>
						{/each}
					</div>
				</div>
			</div>
			<Button
				onclick={() => {
					cart.clear();
				}}
				size="lg"
				class="w-full justify-between px-3 text-base"
			>
				Order Now
				<span>
					{formatPrice(cart.total())}
				</span>
			</Button>
		</div>
	</div>
</div>
