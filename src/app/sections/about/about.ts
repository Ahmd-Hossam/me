import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { PROFILE } from '../../data/profile.data';
import { SectionHeading } from '../../shared/section-heading/section-heading';

@Component({
  selector: 'app-about',
  imports: [SectionHeading],
  templateUrl: './about.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  protected readonly i18n = inject(I18nService);
  protected readonly ui = PROFILE.ui;
  protected readonly lead = PROFILE.about[0];
  protected readonly rest = PROFILE.about.slice(1);
}
