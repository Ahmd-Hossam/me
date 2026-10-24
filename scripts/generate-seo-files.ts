/**
 * Generates public/sitemap.xml and public/robots.txt from SITE_URL so the domain is defined in
 * exactly one place. Runs automatically before `npm start` and `npm run build`.
 * Requires Node >= 22.18 for built-in TypeScript type stripping (Angular 22 itself needs >= 22.22.3).
 */
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { SITE_URL } from '../src/app/data/site.config.ts';

// Keep in sync with app.routes.ts / PAGE_URLS in seo.service.ts.
const pages = [
  { lang: 'en', url: `${SITE_URL}/` },
  { lang: 'ar', url: `${SITE_URL}/ar/` },
];

const lastmod = new Date().toISOString().slice(0, 10);
const alternates = pages
  .map((p) => `    <xhtml:link rel="alternate" hreflang="${p.lang}" href="${p.url}"/>`)
  .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${pages[0].url}"/>`)
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages
  .map(
    (p) => `  <url>
    <loc>${p.url}</loc>
    <lastmod>${lastmod}</lastmod>
${alternates}
  </url>`,
  )
  .join('\n')}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

const publicDir = fileURLToPath(new URL('../public/', import.meta.url));
writeFileSync(`${publicDir}sitemap.xml`, sitemap);
writeFileSync(`${publicDir}robots.txt`, robots);
console.log(`Generated sitemap.xml and robots.txt for ${SITE_URL}`);
