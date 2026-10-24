# Ahmed Hossam — Portfolio

Personal portfolio of Ahmed Hossam, Senior Front-End Engineer (Angular).
Built with Angular 22 (standalone, signals, zoneless, `@defer` + incremental hydration) and
Tailwind CSS v4. Every page is prerendered to static HTML: English at `/`, Arabic (RTL) at `/ar/`.

## Requirements

- Node.js **22.22.3+, 24.15+ or 26+** (required by Angular 22; the build scripts also use Node's
  built-in TypeScript support)
- npm **11** (the version in `packageManager`). npm 10.9 crashes resolving this dependency tree;
  if your global npm is older, use `npx npm@11 install` or `npm i -g npm@11`.

## Run locally

```bash
npm install
npm start          # http://localhost:4200
npm test           # unit tests, including content checks (approved links only, no phone number)
npm run build      # static output in dist/hossam-portfolio/browser
```

To preview the production build: `npx http-server dist/hossam-portfolio/browser -p 8080`

## Editing content

**All text lives in one file: [`src/app/data/profile.data.ts`](src/app/data/profile.data.ts).**
You never need to touch components to change content. TypeScript (`profile.model.ts`) will tell you
if something is missing or misspelled.

| To change… | Edit in `profile.data.ts` |
| --- | --- |
| Name, title, value proposition, hero facts | `name`, `title`, `valueProposition`, `facts` |
| About paragraphs | `about` (the first paragraph is shown large) |
| Jobs | `experience` — newest first; `end: null` marks the **current** role |
| Projects | `projectCategories` — the `latest` category is always featured first |
| Skills | `skillGroups` |
| Education, awards, languages | `education`, `awards`, `spokenLanguages` |
| Running / Strava | `beyondCode` |
| Email and profile links | `contact` |
| Buttons, navigation, headings | `ui` |
| Page title / description for Google | `seo` |

Every text is `{ en: '…', ar: '…' }`. If `ar` is missing, English is shown on the Arabic page.

- **Arabic review:** all Arabic was drafted by Claude and still **needs review** by a native speaker.
  Edit the `ar` strings directly, then set `ARABIC_REVIEW_STATUS` to `'reviewed'`.
- **Photo:** put a square image (≥ 480×480) in `public/images/` and uncomment `photo` in the data
  file. Without it, the "AH" monogram is shown.
- **CV:** replace `public/Ahmed_Hossam_CV.pdf` (keep the name, or update `cvPath`).
- **Adding a link:** also add the URL to `APPROVED_URLS` in `profile.data.spec.ts`, otherwise
  `npm test` fails. That's on purpose, so no unapproved links slip in.
- **Domain:** set `SITE_URL` in [`src/app/data/site.config.ts`](src/app/data/site.config.ts). It
  feeds the canonical URLs, Open Graph tags, JSON-LD, `sitemap.xml` and `robots.txt` (the last two
  are generated on every build).
- **Social preview image:** after changing your name or title, run `npm run og` (needs Chrome or
  Edge installed) and commit the new `public/og-image.png` and `public/apple-touch-icon.png`.

## Deploy to Netlify

This repo replaces the old portfolio on the **existing** Netlify site `ahmed-hossam`
(`https://ahmed-hossam.netlify.app`, which is also `SITE_URL`). You link this repository to that
site instead of creating a new one, so the URL, any custom domain and the site's history are kept.

[`netlify.toml`](netlify.toml) defines the build command, publish folder, Node/npm versions,
the 404 fallback and the headers. Settings in that file override the ones in the Netlify UI, but
a few leftovers from the old site can still get in the way, so check them first (step 3).

### Option A — link the existing site to this GitHub repo (recommended: every push redeploys)

1. **Push this repo to GitHub.** Create an empty repository (e.g. `Ahmd-Hossam/portfolio`), then:
   ```bash
   git remote add origin https://github.com/Ahmd-Hossam/portfolio.git
   git push -u origin master
   ```
2. **Keep the old site live while you switch (optional, recommended).** In Netlify open the
   `ahmed-hossam` site → **Deploys** → **Lock to stop auto publishing**. New builds will still run,
   but they won't go live until you publish one yourself.
3. **Clean up settings left over from the old site:** **Site configuration → Build & deploy**
   - **Build settings → Base directory:** make sure it's empty. Otherwise Netlify looks for
     `netlify.toml` in the wrong folder.
   - **Build settings → Build command / Publish directory:** you can leave them; `netlify.toml`
     overrides them (`npm run build` → `dist/hossam-portfolio/browser`).
   - **Environment variables** (Site configuration → Environment variables): delete old ones that
     no longer apply, e.g. an old `NODE_VERSION`. This site needs none.
   - **Plugins:** remove plugins installed for the old site, and the *Angular Runtime* plugin if
     Netlify adds it. This site is fully static and needs neither.
4. **Link the new repository:** **Site configuration → Build & deploy → Continuous deployment →
   Repository**.
   - If the old site was linked to another repo: **Manage repository → Link to a different
     repository**.
   - If it was deployed by drag-and-drop or the CLI: **Link repository**.

   Pick GitHub, authorize Netlify if asked, and choose `Ahmd-Hossam/portfolio`.
5. **Set the production branch** to `master` (**Continuous deployment → Branches and deploy
   contexts**), or rename the branch to whatever the site already uses.
6. **Trigger a build:** **Deploys → Trigger deploy → Deploy site**. When it finishes, open that
   deploy's preview link and check both `/` and `/ar/`.
7. **Go live:** on the successful deploy click **Publish deploy**, then **Unlock** auto publishing
   (if you locked it in step 2). From now on every push to `master` goes live.

**Rolling back:** the old portfolio's deploys stay in the **Deploys** list. Open one and click
**Publish deploy** to bring it back instantly. Old URLs that no longer exist on the new site (for
example `/projects`) return a 404 status and show the home page.

### Option B — deploy from your machine with the Netlify CLI

Use this if you don't want Git-based deploys (or to test before linking the repo):

```bash
npx netlify-cli login
npx netlify-cli link                  # choose "Search by full or partial project name" → ahmed-hossam
npx netlify-cli deploy --build        # draft deploy: prints a preview URL, the live site is untouched
npx netlify-cli deploy --build --prod # publishes to https://ahmed-hossam.netlify.app
```

`link` only writes `.netlify/state.json` locally (it's in `.gitignore`) and doesn't change the
site's settings. Check the step 3 settings in the UI anyway, since CLI builds use them too.

### After the first deploy

- Check the social preview: <https://www.opengraph.xyz> (paste the URL). If LinkedIn still
  shows the old portfolio's preview, refresh it with
  <https://www.linkedin.com/post-inspector/>.
- In Google Search Console, submit `https://ahmed-hossam.netlify.app/sitemap.xml`.
- If you later move to a custom domain, add it under **Domain management**, update `SITE_URL`,
  then commit and push.

## Fonts

IBM Plex (SIL Open Font License, see `public/fonts/OFL-LICENSE.txt`), from the
`@fontsource/ibm-plex-*` packages. The two Arabic files were subset to the core Arabic block
(U+0600–06FF) with HarfBuzz (`subset-font`) to save ~30% — OpenType shaping is preserved, so
any Arabic text renders correctly. To re-create them, subset the Fontsource
`ibm-plex-sans-arabic-arabic-{400,700}-normal.woff2` files to that range.

## Project structure

```
src/app/
  data/       profile.data.ts (content) · profile.model.ts (types) · site.config.ts (SITE_URL)
  core/       i18n, theme and SEO services, date formatting
  layout/     header, footer
  sections/   hero, about, experience, projects, skills, education, beyond-code, contact
  shared/     icon, section-heading, external-link
  pages/home/ composes the sections (everything below the hero is @defer'd)
scripts/      generate-seo-files.ts (sitemap/robots) · generate-og-image.ts (social image)
public/       CV, fonts, favicon, OG image
```

Code conventions are documented in [`CLAUDE.md`](CLAUDE.md).
