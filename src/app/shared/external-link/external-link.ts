import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { PROFILE } from '../../data/profile.data';
import { Icon } from '../icon/icon';

/**
 * A link that opens in a new tab, announces that to screen readers and shows an arrow icon.
 * Projected content is the visible label; style it through `linkClass`.
 */
@Component({
  selector: 'app-external-link',
  imports: [Icon],
  templateUrl: './external-link.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExternalLink {
  readonly href = input.required<string>();
  readonly linkClass = input('');
  /** Extra text for screen readers, e.g. the project name after a generic "Visit site". */
  readonly srContext = input('');
  readonly showIcon = input(true);

  protected readonly i18n = inject(I18nService);
  protected readonly ui = PROFILE.ui;
}
