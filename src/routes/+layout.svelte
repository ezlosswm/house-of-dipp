<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.png';
	import Footer from '$lib/components/Footer.svelte';
	import { provideCart } from '$lib/cart-context.svelte';

	let { children } = $props();

	provideCart();
</script>

<svelte:head>
	<title>House of Dipp</title>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

<Footer />
