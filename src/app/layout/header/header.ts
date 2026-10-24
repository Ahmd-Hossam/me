import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { I18nService, LANG_PATHS } from '../../core/i18n.service';
import { ThemeService } from '../../core/theme.service';
import { PROFILE } from '../../data/profile.data';
import { SectionId } from '../../data/profile.model';
import { Icon } from '../../shared/icon/icon';

const NAV_SECTIONS: readonly SectionId[] = ['about', 'experience', 'projects', 'skills', 'contact'];

@Component({
  selector: 'app-header',
  imports: [Icon],
  templateUrl: './header.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '(document:keydown.escape)': 'menuOpen.set(false)' },
})
export class Header {
  protected readonly i18n = inject(I18nService);
  protected readonly theme = inject(ThemeService);
  protected readonly profile = PROFILE;
  protected readonly ui = PROFILE.ui;
  protected readonly sections = NAV_SECTIONS;

  protected readonly menuOpen = signal(false);
  protected readonly otherLangPath = computed(() => LANG_PATHS[this.i18n.otherLang()]);
}
