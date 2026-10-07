import { page } from '$app/state';
export const prerender = true;

const host = $derived(page.url.host);
const SITE_URL = 'https://' + host;

export function GET() {
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	<url>
		<loc>${SITE_URL}/</loc>
		<changefreq>weekly</changefreq>
		<priority>1.0</priority>
	</url>
</urlset>`.trim();

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8'
		}
	});
}
