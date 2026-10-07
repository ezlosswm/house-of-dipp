# House of Dipp

Menu and ordering site for House of Dipp, a restaurant in Corozal, Belize.

Customers can browse categories, search the menu, customize items (sauces, add-ons, notes), and build a cart. Orders are intended to go out over WhatsApp.

## Features

- Category carousel and full menu
- Item drawer: quantity, add-ons, instructions
- Cart persisted in `localStorage`
- Hours and address in the footer

## Stack

- [SvelteKit](https://svelte.dev/docs/kit) + Svelte 5 (runes)
- Vite
- Tailwind CSS 4
- TypeScript
- Phosphor icons

Deploy target is currently `@sveltejs/adapter-auto` (configured in `vite.config.ts`).

## Project layout

- `src/routes/+page.svelte` - home: hero, categories, menu, cart
- `src/lib/menu.ts` - menu data
- `src/lib/cart-context.svelte.ts` - cart context + localStorage
- `src/lib/components/` - Hero, Cart, Checkout, Footer, UI primitives

## Getting started

Requires Node.js and npm.

```bash
npm install
npm run dev
```
