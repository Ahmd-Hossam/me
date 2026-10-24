import { Routes } from '@angular/router';

/**
 * Build-time only: these routes tell the prerenderer which pages to generate. The browser app
 * ships without the router — the language comes from the URL (I18nService) and in-page
 * navigation uses plain anchors — which keeps ~70 kB of router code out of the bundle.
 *
 * Keep in sync with LANG_PATHS (core/i18n.service.ts) and scripts/generate-seo-files.ts.
 */
export const routes: Routes = [
  { path: '', children: [] },
  { path: 'ar', children: [] },
];
