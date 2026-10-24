import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { PROFILE } from '../../data/profile.data';
import { Icon } from '../../shared/icon/icon';

@Component({
  selector: 'app-hero',
  imports: [NgOptimizedImage, Icon],
  templateUrl: './hero.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  protected readonly i18n = inject(I18nService);
  protected readonly profile = PROFILE;
  protected readonly ui = PROFILE.ui;
  protected readonly cvHref = `/${PROFILE.cvPath}`;
}
