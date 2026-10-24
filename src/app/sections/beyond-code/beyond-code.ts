import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { PROFILE } from '../../data/profile.data';
import { ExternalLink } from '../../shared/external-link/external-link';
import { Icon } from '../../shared/icon/icon';
import { SectionHeading } from '../../shared/section-heading/section-heading';

@Component({
  selector: 'app-beyond-code',
  imports: [SectionHeading, ExternalLink, Icon],
  templateUrl: './beyond-code.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BeyondCode {
  protected readonly i18n = inject(I18nService);
  protected readonly ui = PROFILE.ui;
  protected readonly content = PROFILE.beyondCode;
}
