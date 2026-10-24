import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { formatPartialDate } from '../../core/format-date';
import { I18nService } from '../../core/i18n.service';
import { PROFILE } from '../../data/profile.data';
import { PartialDate } from '../../data/profile.model';
import { ExternalLink } from '../../shared/external-link/external-link';
import { SectionHeading } from '../../shared/section-heading/section-heading';

@Component({
  selector: 'app-experience',
  imports: [SectionHeading, ExternalLink],
  templateUrl: './experience.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Experience {
  protected readonly i18n = inject(I18nService);
  protected readonly ui = PROFILE.ui;
  protected readonly roles = PROFILE.experience;

  protected format(date: PartialDate): string {
    return formatPartialDate(date, this.i18n.locale());
  }
}
