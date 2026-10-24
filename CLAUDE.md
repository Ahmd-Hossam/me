# CLAUDE.md — Ahmed Hossam portfolio

A single-page portfolio for Ahmed Hossam (Senior Front-End Engineer, Angular), prerendered to
static HTML and hosted on Netlify. The site itself is a showcase of modern Angular, so code
quality matters as much as content.

## Content rules (most important)

- **Source of truth:** `Ahmed_Hossam_Senior_Frontend_Angular_CV.pdf` (the public copy is
  `public/Ahmed_Hossam_CV.pdf`). Never invent experience, metrics, clients, testimonials or
  achievements. If something useful is missing, add a `TODO` comment in the data file instead.
- **All user-facing text lives in `src/app/data/profile.data.ts`**, typed by
  `src/app/data/profile.model.ts`. Components never hard-code copy — including button labels,
  headings and aria-labels (those live under `PROFILE.ui`).
- Only link to the public URLs already present in the data file. Never show the phone number.
- Text is `LocalizedText = { en: string; ar?: string }`. `ar` falls back to `en`. Keep company,
  product and technical names in English inside Arabic strings. Arabic drafts are marked
  "needs review" (see `ARABIC_REVIEW_STATUS`).
- `SITE_URL` in `src/app/data/site.config.ts` is the only place the domain is defined.

## Stack & Angular conventions

- Angular 22, **zoneless** (default — no zone.js), standalone components only (no NgModules,
  no `standalone: true` flag — it is the default).
- State with **Signals** (`signal`, `computed`, `input()`); no RxJS unless genuinely needed.
- New control flow only: `@if`, `@for` (always with `track`), `@defer`.
- `ChangeDetectionStrategy.OnPush` on every component. Use `inject()`, not constructor DI.
- Use `host: {}` in the decorator instead of `@HostBinding`/`@HostListener`.
- Component file layout: `name.ts` + `name.html`; no component CSS files unless Tailwind
  can't express it (keep under the 4 kB component style budget).
- Strict TypeScript; no `any`. Data model types are `readonly`.
- No UI component libraries and no icon libraries — icons are inline SVG in
  `shared/icon/icon.ts`.

## Rendering & i18n

- `outputMode: "static"` — every route is prerendered at build time
  (`app.routes.server.ts`). There is no Node server in production.
- Pages: `/` (English) and `/ar/` (Arabic, RTL), each a separate prerendered page.
- **No router in the browser bundle** (saves ~70 kB). `provideRouter` is only in
  `app.config.server.ts` so the prerenderer discovers the pages (`app.routes.ts`). `App`
  renders `Home` directly. Don't add `RouterLink`/`router-outlet` to components.
- The language comes from the URL path (`PlatformLocation`) in `I18nService`, which exposes
  `lang`, `t()` for `LocalizedText`, and `anchor(id)` for in-page links. Always use
  `[href]="i18n.anchor('id')"` — a bare `href="#id"` resolves against `<base href="/">` and
  would jump from `/ar/` to the English page. The language switch is a plain link to the
  other page (`LANG_PATHS`).
- `<html lang dir>`, title, meta, canonical, hreflang, OG/Twitter and JSON-LD are written by
  `SeoService` during prerendering.
- Anything below the hero is wrapped in `@defer (on viewport; hydrate on viewport)` so the
  content is in the prerendered HTML (SEO) while its JS hydrates lazily (incremental
  hydration). Every such block needs a `@placeholder` with a single root element.
- Avoid hydration mismatches: anything that depends on browser-only state (theme, storage)
  must render identically on server and client — e.g. both theme icons render and CSS
  (`dark:`) decides which is visible.

## Styling

- Tailwind CSS v4 via `src/styles.css`. Design tokens are CSS variables on `:root` /
  `:root.dark`, mapped to utilities with `@theme inline`: `bg-bg`, `bg-surface`, `text-ink`,
  `text-muted`, `border-line`, `text-accent`, `bg-accent`, `text-accent-ink`, `bg-accent-soft`.
  Don't use raw palette colors (`text-gray-500`, `bg-teal-700`) in templates.
- One accent color (teal). Fonts: IBM Plex Sans (400, 600), Plex Mono (400), Plex Sans Arabic
  (400, 700), self-hosted in `public/fonts`. Use `font-normal`/`font-semibold` (Arabic
  `semibold` renders with the 700 face). Every extra weight costs Lighthouse points — don't add
  weights or preload fonts without measuring. The Arabic files are subset to U+0600–06FF
  (README › Fonts). Metric-matched fallback faces keep CLS ≈ 0 — keep them in the font stacks.
- On the Arabic page `.font-mono` falls back to the sans stack (unlayered rule in styles.css).
- **RTL:** use logical utilities only — `ms-*`/`me-*`, `ps-*`/`pe-*`, `start-*`/`end-*`,
  `text-start`/`text-end`, `border-s`/`border-e`. Never `ml-`, `mr-`, `left-`, `right-`,
  `text-left`. Mirror directional icons with `rtl:-scale-x-100`.
- Motion: `.reveal` (CSS scroll-driven) and `.hero-in` only; both are disabled under
  `prefers-reduced-motion`. No JS animation libraries.
  Never put `.reveal` on content that can sit in the first viewport (hero, About): it stays
  faded until scrolled, which fails Lighthouse color-contrast.
- Accessibility: semantic landmarks, one `h1`, ordered headings, visible `:focus-visible`,
  AA contrast in both themes, external links announce "(opens in a new tab)".

## Folder structure

```
src/app/
  data/        profile.model.ts, profile.data.ts, site.config.ts
  core/        theme.service.ts, i18n.service.ts, seo.service.ts, format-date.ts
  layout/      header/, footer/
  sections/    hero/, about/, experience/, projects/, skills/, education/, beyond-code/, contact/
  shared/      icon/, section-heading/, external-link/
  pages/home/  composes the sections
scripts/       generate-seo-files.ts (sitemap + robots, runs on prestart/prebuild), generate-og-image.ts (social image + touch icon, `npm run og`)
```

## Commands

- `npm start` — dev server at http://localhost:4200
- `npm run build` — generates sitemap/robots, then the static build in
  `dist/hossam-portfolio/browser`
- `npm run og` — regenerates `public/og-image.png` and `public/apple-touch-icon.png`
- `npm test` — unit tests (Vitest)

## Workflow

- Small steps; run the build after each one and fix errors before moving on.
- Commit after each meaningful step with a conventional message (`feat:`, `fix:`, `build:`,
  `docs:`, `chore:`).
