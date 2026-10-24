import { PartialDate } from '../data/profile.model';

/** Formats `2023-07` as "Jul 2023" (or the localized equivalent) and `2018` as "2018". */
export function formatPartialDate(date: PartialDate, locale: string): string {
  const [year, month] = date.split('-').map(Number);
  if (!month) return String(year);
  return new Intl.DateTimeFormat(locale, {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(Date.UTC(year, month - 1, 1));
}
