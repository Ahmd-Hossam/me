import { formatPartialDate } from '../core/format-date';
import { PROFILE } from './profile.data';

/** The only external URLs approved for the site. Adding a link means adding it here too. */
const APPROVED_URLS = new Set([
  'https://www.linkedin.com/in/ahmed-hossam-1a34081a0/',
  'https://github.com/Ahmd-Hossam',
  'https://www.strava.com/athletes/1648192745',
  'https://www.youxel.com/',
  'https://www.ia.gov.sa/ar/home',
  'https://kafd.sa/en/',
  'https://www.dubaichamber.com/en/home/',
  'https://www.ese.gov.ae/Ar/Pages/Home.aspx',
  'https://qcc.gov.ae/',
  'https://gs1eg.org/',
  'https://www.youxel.com/products/cerqel',
  'https://www.youxel.com/products/cerqel-community',
  'https://motanawa.netlify.app/',
  'https://github.com/Ahmd-Hossam/portfolio',
]);

describe('PROFILE data', () => {
  const serialized = JSON.stringify(PROFILE);

  it('only links to approved public URLs', () => {
    const urls = serialized.match(/https?:\/\/[^"]+/g) ?? [];
    expect(urls.filter((url) => !APPROVED_URLS.has(url))).toEqual([]);
  });

  it('never contains the phone number', () => {
    expect(serialized).not.toMatch(/100\s?931\s?8297|\+20/);
  });

  it('has exactly one current role', () => {
    expect(PROFILE.experience.filter((role) => role.end === null)).toHaveLength(1);
  });

  it('features the "latest" project category', () => {
    expect(PROFILE.projectCategories.some((c) => c.id === 'latest')).toBe(true);
  });
});

describe('formatPartialDate', () => {
  it('formats year-month and year-only dates', () => {
    expect(formatPartialDate('2023-07', 'en-US')).toBe('Jul 2023');
    expect(formatPartialDate('2018', 'en-US')).toBe('2018');
  });
});
