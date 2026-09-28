<script lang="ts">
	import { Button } from './ui/button';
	import MinusIcon from 'phosphor-svelte/lib/MinusIcon';
	import { formatPrice } from '$lib';
	import PlusIcon from 'phosphor-svelte/lib/PlusIcon';

	const { item }: { item: FoodItem } = $props();
</script>

<img class="max-h-62.5 w-full object-contain" src={item.category.image} alt={item.name} />

<div class="space-y-2">
	<div class="flex items-center">
		<h2 class="tex-xl leading-[1.2em] font-medium tracking-[-2%]">
			{item.name}
		</h2>
		{#if item.notes}
			<span>{item.notes}</span>
		{/if}
	</div>
	<p class="tracking-[-2%] text-muted-foreground">{item.category.name}</p>
</div>

<form>
	<div class="mt-6 space-y-6">
		{#if item.options}
			<div class="space-y-3 bg-white">
				<h3 class="font-medium tracking-[-2%]">Choose</h3>
				{#each item.options as opt (opt)}
					<p>{opt}</p>
				{/each}
			</div>
		{/if}

		{#if item.addOnOptions}
			<div class="space-y-3">
				<h3 class="font-medium tracking-[-2%]">Add On</h3>
				<div class="space-y-2 text-xs text-muted-foreground sm:text-sm">
					{#each [...item.addOnOptions] as [name, price], index (index)}
						<label
							class="flex cursor-pointer items-center gap-2 rounded-lg border border-border bg-white p-2 focus-within:ring-2 focus-within:ring-primary"
						>
							<input
								name="add-ons-{item.id}"
								type="radio"
								value={name}
								class="focus:outline-none"
							/>
							<span>{name}</span>
							<p class="ml-auto text-sm font-medium">{formatPrice(price)}</p>
						</label>
					{/each}
				</div>
			</div>
		{/if}

		<div class="space-y-3">
			<h3 class="font-medium tracking-[-2%]">Customize your order</h3>
			<textarea
				rows="5"
				class="w-full rounded-xl bg-white p-3 text-xs leading-[-1em] tracking-[-1.1%] outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
		focus-visible:ring-offset-background sm:text-sm"
				placeholder="No tomatoes, no lettuce etc..."></textarea>
		</div>

		<div class="flex w-full gap-4">
			<Button variant="outline"><MinusIcon /></Button>
			<Button class="flex-1">Add to cart</Button>
			<Button variant="outline"><PlusIcon /></Button>
		</div>
	</div>
</form>
