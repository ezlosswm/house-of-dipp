<script lang="ts">
	import Button from './ui/button/button.svelte';

	import combomeal from '$lib/assets/combo-meal.webp';
	import houseofdipp from '$lib/assets/houseofdipp.webp';

	import WhatsappLogoIcon from 'phosphor-svelte/lib/WhatsappLogoIcon';
</script>

<div class="relative mx-auto h-75 w-full overflow-hidden">
	<div class="absolute inset-0 -top-32 z-0 mx-auto">
		<enhanced:img
			class="mx-auto h-full w-screen max-w-2xl object-cover object-center blur-lg drop-shadow-custom/25"
			src={combomeal}
			fetchpriority="high"
			alt="House of Dipp Food platter"
		/>
		<div
			class="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-b from-transparent to-background"
		></div>
	</div>

	<div class="relative z-10 flex h-full flex-col items-center justify-center p-4">
		<h1 class="text-2xl font-bold text-muted">House of Dipp</h1>
		<div class="relative flex flex-col items-center justify-center rounded-full">
			<enhanced:img class="size-43.75" src={houseofdipp} alt="House of Dipp logo" />

			<Button variant="secondary" size="lg">
				<WhatsappLogoIcon />
				+123 456-7890
			</Button>
		</div>
	</div>
</div>
