import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../../core/seo.service';
import { About } from '../../sections/about/about';
import { BeyondCode } from '../../sections/beyond-code/beyond-code';
import { Contact } from '../../sections/contact/contact';
import { EducationSection } from '../../sections/education/education';
import { Experience } from '../../sections/experience/experience';
import { Hero } from '../../sections/hero/hero';
import { Projects } from '../../sections/projects/projects';
import { Skills } from '../../sections/skills/skills';

/** The single page, prerendered once per language (`/` and `/ar/`). */
@Component({
  selector: 'app-home',
  imports: [Hero, About, Experience, Projects, Skills, EducationSection, BeyondCode, Contact],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  constructor() {
    inject(SeoService).update();
  }
}
