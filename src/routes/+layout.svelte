<script lang="ts">
	import montserratUrl from '@fontsource-variable/montserrat/files/montserrat-latin-wght-normal.woff2?url';
	import playfairUrl from '@fontsource-variable/playfair-display/files/playfair-display-latin-wght-normal.woff2?url';

	import './layout.css';
	import favicon from '$lib/assets/favicon.webp';
	import Footer from '$lib/components/Footer.svelte';
	import { houseofdipp } from '$lib/menu';

	import { dev } from '$app/environment';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';

	import { provideCart } from '$lib/cart-context.svelte';
	import { page } from '$app/state';

	let { children } = $props();

	const BUSINESS_NAME = 'House of Dipp';
	const SITE_URL = $derived(`https://${page.url.host}`);
	const BUSINESS_NUMBER = '+1234567890';

	const schema = $derived({
		'@context': 'https://schema.org',
		'@type': 'Restaurant',
		'@id': `${SITE_URL}/#restaurant`,
		name: BUSINESS_NAME,
		url: SITE_URL,
		image: [new URL(houseofdipp, SITE_URL).href],
		telephone: BUSINESS_NUMBER,
		address: {
			'@type': 'PostalAddress',
			streetAddress: '1st St. N White Cocal',
			addressLocality: 'Corozal',
			addressCountry: 'BZ'
		},
		geo: {
			'@type': 'GeoCoordinates',
			latitude: 18.395961625602126,
			longitude: -88.38702634004503
		},
		servesCuisine: ['American', 'Belizean'],
		priceRange: '$',
		openingHoursSpecification: [
			{
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: ['Monday', 'Wednesday'],
				opens: '12:00',
				closes: '21:00'
			},
			{
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: ['Tuesday', 'Thursday'],
				opens: '16:00',
				closes: '21:00'
			},
			{
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: ['Friday', 'Saturday'],
				opens: '11:00',
				closes: '21:00'
			}
		]
	});

	const serializedSchema = $derived(JSON.stringify(schema).replace(/</g, '\\u003c'));

	provideCart();
	injectAnalytics({ mode: dev ? 'development' : 'production' });
	injectSpeedInsights();
</script>

<svelte:head>
	<title>{BUSINESS_NAME}</title>
	<meta
		name="description"
		content="Order burgers, tortas, wings, nachos and fries from House of Dipp in Corozal, Belize. View the menu, hours and contact us on WhatsApp."
	/>
	<link rel="canonical" href={SITE_URL} />

	<meta property="og:type" content="website" />
	<meta property="og:title" content="House of Dipp | Corozal, Belize" />
	<meta
		property="og:description"
		content="Local restaurant in Corozal. Burgers, wings, nachos, tortas, and more."
	/>
	<meta property="og:url" content={SITE_URL} />
	<meta property="og:image" content={houseofdipp} />
	<meta property="og:locale" content="en_BZ" />

	<svelte:element this={"script"} type="application/ld+json">
		{serializedSchema}
	</svelte:element>

	<link rel="preload" href={montserratUrl} as="font" type="font/woff2" crossorigin="anonymous" />
	<link rel="preload" href={playfairUrl} as="font" type="font/woff2" crossorigin="anonymous" />

	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

<Footer />
