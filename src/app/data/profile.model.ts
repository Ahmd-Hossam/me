/** Supported site languages. English is the source language; Arabic is rendered RTL at /ar. */
export type Lang = 'en' | 'ar';

/**
 * A piece of user-facing text. `en` is required; `ar` falls back to `en` when missing,
 * so new content can be added in English first.
 */
export interface LocalizedText {
  readonly en: string;
  readonly ar?: string;
}

/** Year-month (`2023-07`) or year only (`2018`). */
export type PartialDate = `${number}-${number}` | `${number}`;

export interface Link {
  readonly label: LocalizedText;
  readonly href: string;
}

export interface Photo {
  /** Path relative to /public, e.g. `images/ahmed-hossam.jpg`. */
  readonly src: string;
  readonly width: number;
  readonly height: number;
  readonly alt: LocalizedText;
}

export interface Role {
  readonly title: LocalizedText;
  readonly company: LocalizedText;
  readonly companyUrl?: string;
  /** Short qualifier shown next to the company, e.g. "part-time". */
  readonly note?: LocalizedText;
  readonly start: PartialDate;
  /** `null` marks the current role. */
  readonly end: PartialDate | null;
  readonly highlights: readonly LocalizedText[];
}

export interface Project {
  readonly name: LocalizedText;
  readonly description?: LocalizedText;
  /** Only public URLs that have been explicitly approved for the site. */
  readonly url?: string;
}

export type ProjectCategoryId = 'latest' | 'gov-ksa' | 'gov-uae-eg' | 'saas' | 'business';

export interface ProjectCategory {
  readonly id: ProjectCategoryId;
  readonly title: LocalizedText;
  /** Short label shown on compact project cards; falls back to `title`. */
  readonly shortTitle?: LocalizedText;
  readonly summary?: LocalizedText;
  readonly projects: readonly Project[];
}

export interface SkillGroup {
  readonly title: LocalizedText;
  readonly skills: readonly string[];
}

export interface Education {
  readonly degree: LocalizedText;
  readonly institution: LocalizedText;
  readonly year: string;
  readonly note?: LocalizedText;
}

export interface Award {
  readonly title: LocalizedText;
  readonly event: LocalizedText;
  readonly year: string;
}

export interface SpokenLanguage {
  readonly name: LocalizedText;
  readonly level: LocalizedText;
}

export interface ContactLinks {
  readonly email: string;
  readonly linkedin: string;
  readonly github: string;
  readonly strava: string;
  /** Public repository of this site, linked from the footer. */
  readonly source: string;
}

/** Interface strings (navigation, buttons, headings) that are not part of the CV itself. */
export interface UiText {
  readonly skipToContent: LocalizedText;
  readonly nav: Readonly<Record<SectionId, LocalizedText>>;
  readonly primaryNav: LocalizedText;
  readonly openMenu: LocalizedText;
  readonly closeMenu: LocalizedText;
  readonly toggleTheme: LocalizedText;
  readonly switchLanguage: LocalizedText;
  readonly downloadCv: LocalizedText;
  readonly contactMe: LocalizedText;
  readonly present: LocalizedText;
  readonly current: LocalizedText;
  readonly visitSite: LocalizedText;
  readonly opensInNewTab: LocalizedText;
  readonly education: LocalizedText;
  readonly awards: LocalizedText;
  readonly languages: LocalizedText;
  readonly contactLead: LocalizedText;
  readonly emailLabel: LocalizedText;
  readonly backToTop: LocalizedText;
  readonly viewSource: LocalizedText;
  readonly footerNote: LocalizedText;
}

export type SectionId =
  | 'about'
  | 'experience'
  | 'projects'
  | 'skills'
  | 'education'
  | 'beyond'
  | 'contact';

export interface Profile {
  readonly name: LocalizedText;
  readonly initials: string;
  readonly title: LocalizedText;
  readonly location: LocalizedText;
  readonly valueProposition: LocalizedText;
  /** Short facts shown under the hero. */
  readonly facts: readonly LocalizedText[];
  /** Optional headshot. When omitted, the typographic initials mark is shown instead. */
  readonly photo?: Photo;
  readonly cvPath: string;
  readonly seo: {
    readonly title: LocalizedText;
    readonly description: LocalizedText;
    /** Alt text for the Open Graph image (public/og-image.png). */
    readonly imageAlt: LocalizedText;
    /** Structured address for the JSON-LD Person schema. */
    readonly address: { readonly locality: string; readonly countryCode: string };
  };
  readonly about: readonly LocalizedText[];
  readonly experience: readonly Role[];
  readonly projectCategories: readonly ProjectCategory[];
  readonly skillGroups: readonly SkillGroup[];
  readonly education: readonly Education[];
  readonly awards: readonly Award[];
  readonly spokenLanguages: readonly SpokenLanguage[];
  readonly beyondCode: {
    readonly heading: LocalizedText;
    readonly body: readonly LocalizedText[];
    readonly link: Link;
  };
  readonly contact: ContactLinks;
  readonly ui: UiText;
}
