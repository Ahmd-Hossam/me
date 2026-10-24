import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { PROFILE } from '../data/profile.data';
import { Lang, LocalizedText } from '../data/profile.model';
import { SITE_URL } from '../data/site.config';
import { I18nService } from './i18n.service';

/** Public URL of each language version. Trailing slash: /ar/ is served from ar/index.html. */
export const PAGE_URLS: Readonly<Record<Lang, string>> = {
  en: `${SITE_URL}/`,
  ar: `${SITE_URL}/ar/`,
};

const OG_LOCALES: Readonly<Record<Lang, string>> = { en: 'en_US', ar: 'ar_EG' };
const OG_IMAGE = `${SITE_URL}/og-image.png`;

/**
 * Writes all head metadata for the current language. Runs during prerendering, so the static
 * HTML of each language ships complete tags.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly document = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly i18n = inject(I18nService);
  private readonly t = (text: LocalizedText): string => this.i18n.t(text);

  update(): void {
    const lang = this.i18n.lang();
    const url = PAGE_URLS[lang];
    const title = this.t(PROFILE.seo.title);
    const description = this.t(PROFILE.seo.description);
    const imageAlt = this.t(PROFILE.seo.imageAlt);

    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'author', content: PROFILE.name.en });

    this.meta.updateTag({ property: 'og:type', content: 'profile' });
    this.meta.updateTag({ property: 'og:site_name', content: this.t(PROFILE.name) });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:image', content: OG_IMAGE });
    this.meta.updateTag({ property: 'og:image:width', content: '1200' });
    this.meta.updateTag({ property: 'og:image:height', content: '630' });
    this.meta.updateTag({ property: 'og:image:alt', content: imageAlt });
    this.meta.updateTag({ property: 'og:locale', content: OG_LOCALES[lang] });
    this.meta.updateTag({
      property: 'og:locale:alternate',
      content: OG_LOCALES[this.i18n.otherLang()],
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: OG_IMAGE });
    this.meta.updateTag({ name: 'twitter:image:alt', content: imageAlt });

    this.setLink('canonical', url);
    this.setLink('alternate', PAGE_URLS.en, 'en');
    this.setLink('alternate', PAGE_URLS.ar, 'ar');
    this.setLink('alternate', PAGE_URLS.en, 'x-default');

    this.setJsonLd(url);
  }

  private setLink(rel: string, href: string, hreflang?: string): void {
    const selector = hreflang
      ? `link[rel="${rel}"][hreflang="${hreflang}"]`
      : `link[rel="${rel}"]:not([hreflang])`;
    let link = this.document.head.querySelector<HTMLLinkElement>(selector);
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', rel);
      if (hreflang) link.setAttribute('hreflang', hreflang);
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', href);
  }

  private setJsonLd(url: string): void {
    const currentRole = PROFILE.experience.find((role) => role.end === null);
    const person = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: this.t(PROFILE.name),
      jobTitle: this.t(PROFILE.title),
      description: this.t(PROFILE.seo.description),
      url,
      email: `mailto:${PROFILE.contact.email}`,
      ...(PROFILE.photo && { image: `${SITE_URL}/${PROFILE.photo.src}` }),
      address: {
        '@type': 'PostalAddress',
        addressLocality: PROFILE.seo.address.locality,
        addressCountry: PROFILE.seo.address.countryCode,
      },
      ...(currentRole && {
        worksFor: {
          '@type': 'Organization',
          name: currentRole.company.en,
          ...(currentRole.companyUrl && { url: currentRole.companyUrl }),
        },
      }),
      alumniOf: PROFILE.education.map((entry) => ({
        '@type': 'EducationalOrganization',
        name: entry.institution.en,
      })),
      knowsAbout: PROFILE.skillGroups.flatMap((group) => group.skills).slice(0, 25),
      knowsLanguage: ['ar', 'en'],
      sameAs: [PROFILE.contact.linkedin, PROFILE.contact.github, PROFILE.contact.strava],
    };

    let script = this.document.head.querySelector<HTMLScriptElement>(
      'script[type="application/ld+json"]',
    );
    if (!script) {
      script = this.document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      this.document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(person);
  }
}
