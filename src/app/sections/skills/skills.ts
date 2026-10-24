import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { PROFILE } from '../../data/profile.data';
import { SectionHeading } from '../../shared/section-heading/section-heading';

@Component({
  selector: 'app-skills',
  imports: [SectionHeading],
  templateUrl: './skills.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills {
  protected readonly i18n = inject(I18nService);
  protected readonly ui = PROFILE.ui;
  protected readonly groups = PROFILE.skillGroups;
}
