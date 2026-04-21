# PortfolioV6 — Claude Context

## Stack (skip re-discovery)

- SvelteKit 2 + Svelte 5 (runes only: `$state/$derived/$effect/$props`)
- Tailwind v4 (Vite plugin, no `tailwind.config.js` — tokens in `app.css`)
- mdsvex for `.md` → Svelte (projects + posts)
- svelte-i18n (EN + CS), locale in localStorage
- Zod 4 for form validation (isomorphic: client + server)
- Cloudflare Workers adapter, all routes prerendered except `/api/forms`
- unplugin-icons + `@iconify/json` for icons (tabler, iconamoon, mynaui collections)
- pnpm, TypeScript 5

## File map (non-obvious locations)

- Design tokens → `src/app.css`
- Types → `src/lib/types.ts`
- Form interface + validation → `src/lib/interfaces/ContactFormInterface.ts` + `src/lib/validations/ContactFormValidation.ts`
- Locale strings → `src/locales/en.json` + `cs.json`
- Projects content → `src/projects/{slug}/en.md` + `cs.md` (YAML frontmatter)
- Posts content → `src/posts/*.md`
- Only remaining API route → `src/routes/api/forms/+server.ts` (Discord webhook POST)
- Utilities → `src/lib/utils/{locale,formatDate,analytics,calcom,clickOutside,filesIconsComponents}.ts`

## Icons

- Import via `~icons/{collection}/{name}` (e.g. `~icons/tabler/x`, `~icons/iconamoon/arrow-up-2`)
- `JanKominekName.svelte` in `src/lib/icons/` is the only remaining custom SVG (handwritten signature)
- File-type icon map → `src/lib/utils/filesIconsComponents.ts`
- TypeScript support declared in `src/app.d.ts` via `import 'unplugin-icons/types/svelte'`

## Conventions

- Svelte 5 runes everywhere — no `export let`, no `$:`, no `createEventDispatcher`, no `<svelte:component>`
- `$app/state` (not `$app/stores`) — `page` is a rune object, access as `page.url` not `$page.url`
- `SectionHeader` component → `src/lib/components/SectionHeader.svelte` (label, heading, sub?, headingSize?)
- `parseLocale(param)` → `src/lib/utils/locale.ts` — parse Accept-Language style strings
- `cycleLocale()` → `src/lib/utils/locale.ts` — toggle EN/CS
- `formatDate(dateStr, locale, options?)` → `src/lib/utils/formatDate.ts`

## Data loading pattern

- Projects and posts loaded at build time in `+page.ts` via `import.meta.glob` — NO runtime fetch
- Home page: `data.projects[locale]` — all locales preloaded, filtered client-side via `$derived`
- Blog page: `data.posts` — sorted array, EN only
- Projects page: dynamic import per slug/locale in `load()` — uses `parseLocale()`

## Do NOT

- Add `tailwind.config.js` — v4 uses CSS vars
- Use `<svelte:component>` — deprecated in Svelte 5, use `$derived` + direct render
- Use `$app/stores` — use `$app/state` and drop the `$` sigil
- Add inline comments explaining what code does
- Create fetch-based data loading — use `import.meta.glob` in load functions
- Add `/api/projects` or `/api/posts` routes — deleted, load functions do this now

## Env vars

- `WEBHOOK_URL` — Discord webhook, server-side only (forms API)

## Run commands

```bash
pnpm dev          # dev server
pnpm build        # build
pnpm preview      # preview build
pnpm lint         # eslint + prettier check
pnpm format       # prettier write
pnpm check        # svelte-check (TypeScript)
```
