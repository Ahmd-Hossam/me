import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { PROFILE } from '../../data/profile.data';
import { SectionHeading } from '../../shared/section-heading/section-heading';

/** Education, awards and spoken languages. */
@Component({
  selector: 'app-education',
  imports: [SectionHeading],
  templateUrl: './education.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationSection {
  protected readonly i18n = inject(I18nService);
  protected readonly ui = PROFILE.ui;
  protected readonly education = PROFILE.education;
  protected readonly awards = PROFILE.awards;
  protected readonly languages = PROFILE.spokenLanguages;
}
