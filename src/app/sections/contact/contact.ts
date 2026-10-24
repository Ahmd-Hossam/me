import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { PROFILE } from '../../data/profile.data';
import { ExternalLink } from '../../shared/external-link/external-link';
import { Icon, IconName } from '../../shared/icon/icon';
import { SectionHeading } from '../../shared/section-heading/section-heading';

interface SocialLink {
  readonly label: string;
  readonly href: string;
  readonly icon: IconName;
}

@Component({
  selector: 'app-contact',
  imports: [SectionHeading, ExternalLink, Icon],
  templateUrl: './contact.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  protected readonly i18n = inject(I18nService);
  protected readonly ui = PROFILE.ui;
  protected readonly email = PROFILE.contact.email;
  // Brand names are not translated.
  protected readonly socials: readonly SocialLink[] = [
    { label: 'LinkedIn', href: PROFILE.contact.linkedin, icon: 'linkedin' },
    { label: 'GitHub', href: PROFILE.contact.github, icon: 'github' },
  ];
}
