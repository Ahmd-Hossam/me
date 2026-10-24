import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

/**
 * Light/dark theme. Follows the system preference until the user picks one with the toggle.
 * The initial class on <html> is applied by the inline script in index.html (no flash);
 * this service only reads it and handles changes.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  private readonly current = signal<Theme>('light');
  readonly theme = this.current.asReadonly();

  constructor() {
    if (!this.isBrowser) return;

    this.current.set(this.document.documentElement.classList.contains('dark') ? 'dark' : 'light');

    if (typeof window.matchMedia !== 'function') return;
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
      if (this.readStored() === null) this.apply(event.matches ? 'dark' : 'light');
    });
  }

  toggle(): void {
    const next: Theme = this.current() === 'dark' ? 'light' : 'dark';
    this.apply(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage can be unavailable (private mode); the toggle still works for this visit.
    }
  }

  private apply(theme: Theme): void {
    this.current.set(theme);
    this.document.documentElement.classList.toggle('dark', theme === 'dark');
  }

  private readStored(): Theme | null {
    try {
      const value = localStorage.getItem(STORAGE_KEY);
      return value === 'dark' || value === 'light' ? value : null;
    } catch {
      return null;
    }
  }
}
