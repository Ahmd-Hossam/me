import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { PROFILE } from '../../data/profile.data';
import { ExternalLink } from '../../shared/external-link/external-link';
import { SectionHeading } from '../../shared/section-heading/section-heading';

@Component({
  selector: 'app-projects',
  imports: [SectionHeading, ExternalLink],
  templateUrl: './projects.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  protected readonly i18n = inject(I18nService);
  protected readonly ui = PROFILE.ui;
  /** "Latest" is featured first; the other categories keep their data-file order. */
  protected readonly featured = PROFILE.projectCategories.find((c) => c.id === 'latest');
  /** Projects without a description render as compact cards until notes are added. */
  protected readonly categories = PROFILE.projectCategories
    .filter((c) => c.id !== 'latest')
    .map((c) => ({
      ...c,
      detailed: c.projects.filter((p) => p.description),
      compact: c.projects.filter((p) => !p.description),
    }));
}
