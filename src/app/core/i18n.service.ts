import { DOCUMENT, PlatformLocation } from '@angular/common';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Lang, LocalizedText } from '../data/profile.model';

/**
 * Public path of each language version (each is a separate prerendered page).
 * Keep in sync with app.routes.ts and scripts/generate-seo-files.ts.
 */
export const LANG_PATHS: Readonly<Record<Lang, string>> = { en: '/', ar: '/ar/' };

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly document = inject(DOCUMENT);

  // Each language is its own page, so the language is fixed for the lifetime of the app.
  // PlatformLocation gives the same answer on the server (prerender URL) and in the browser.
  private readonly current = signal<Lang>(
    inject(PlatformLocation).pathname.startsWith('/ar') ? 'ar' : 'en',
  );

  readonly lang = this.current.asReadonly();
  readonly dir = computed(() => (this.current() === 'ar' ? 'rtl' : 'ltr'));
  /** Latin digits in Arabic keep dates consistent with the rest of the (English) tech terms. */
  readonly locale = computed(() => (this.current() === 'ar' ? 'ar-EG-u-nu-latn' : 'en-US'));
  readonly otherLang = computed<Lang>(() => (this.current() === 'ar' ? 'en' : 'ar'));
  /** Path of the current page, for in-page anchors (`<base href="/">` breaks bare `#id`). */
  readonly homePath = computed(() => LANG_PATHS[this.current()]);

  constructor() {
    const html = this.document.documentElement;
    html.setAttribute('lang', this.current());
    html.setAttribute('dir', this.dir());
  }

  /** Resolve a LocalizedText in the current language, falling back to English. */
  t(text: LocalizedText): string {
    return (this.current() === 'ar' && text.ar) || text.en;
  }

  /** In-page link to a section of the current language's page. */
  anchor(id: string): string {
    return `${this.homePath()}#${id}`;
  }
}
