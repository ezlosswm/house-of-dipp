<script lang="ts">
	import Button from './ui/button/button.svelte';

	import { combomeal } from '$lib/menu';
	import { houseofdipp } from '$lib/menu';

	import WhatsappLogoIcon from 'phosphor-svelte/lib/WhatsappLogoIcon';
</script>

<div class="relative mx-auto h-75 w-full overflow-hidden">
	<div class="absolute inset-0 -top-32 z-0 mx-auto">
		<div class="aspect-ratio mx-auto w-screen max-w-2xl">
			<enhanced:img
				class="size-full object-cover object-center blur-lg drop-shadow-custom/25"
				src={combomeal}
				width="1000"
				height="1000"
				fetchpriority="high"
				alt="House of Dipp Food platter"
			/>
		</div>
		<div
			class="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-b from-transparent to-background"
		></div>
	</div>

	<div class="relative z-10 flex h-full flex-col items-center justify-center p-4">
		<h1 class="text-2xl font-bold text-muted">House of Dipp</h1>
		<div class="relative flex flex-col items-center justify-center rounded-full">
			<div class="aspect-square size-43.75">
				<enhanced:img width="500" height="500" src={houseofdipp} alt="House of Dipp logo" />
			</div>

			<Button type="button" variant="secondary" size="lg">
				<WhatsappLogoIcon />
				+123 456-7890
			</Button>
		</div>
	</div>
</div>
