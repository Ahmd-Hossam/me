import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { PROFILE } from '../../data/profile.data';
import { ExternalLink } from '../../shared/external-link/external-link';
import { Icon } from '../../shared/icon/icon';

@Component({
  selector: 'app-footer',
  imports: [Icon, ExternalLink],
  templateUrl: './footer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  protected readonly i18n = inject(I18nService);
  protected readonly profile = PROFILE;
  protected readonly ui = PROFILE.ui;
  protected readonly year = new Date().getFullYear();
}
