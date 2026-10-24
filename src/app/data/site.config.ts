/**
 * The site's public origin, without a trailing slash.
 * Used for canonical URLs, hreflang alternates, Open Graph/Twitter tags,
 * JSON-LD, sitemap.xml and robots.txt (see scripts/generate-seo-files.ts).
 *
 * This is the existing Netlify site (ahmed-hossam), which this repo is linked to. Change it only
 * if the site moves to a custom domain (see README > Deploy to Netlify).
 *
 * This file must stay dependency-free: it is also imported by Node build scripts.
 */
export const SITE_URL = 'https://ahmed-hossam.netlify.app';
