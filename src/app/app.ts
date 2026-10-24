import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18nService } from './core/i18n.service';
import { PROFILE } from './data/profile.data';
import { Footer } from './layout/footer/footer';
import { Header } from './layout/header/header';
import { Home } from './pages/home/home';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Home],
  template: `
    <a
      [href]="i18n.anchor('main')"
      class="sr-only rounded-md bg-accent px-4 py-2 font-medium text-accent-ink focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-50"
      >{{ i18n.t(ui.skipToContent) }}</a
    >
    <app-header />
    <main id="main" tabindex="-1" class="outline-none">
      <app-home />
    </main>
    <app-footer />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly i18n = inject(I18nService);
  protected readonly ui = PROFILE.ui;
}
