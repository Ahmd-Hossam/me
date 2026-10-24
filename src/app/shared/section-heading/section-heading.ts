import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Numbered section heading ("01 — About"). The `headingId` is referenced by aria-labelledby. */
@Component({
  selector: 'app-section-heading',
  templateUrl: './section-heading.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionHeading {
  readonly index = input.required<number>();
  readonly headingId = input.required<string>();
  readonly text = input.required<string>();

  protected pad(value: number): string {
    return String(value).padStart(2, '0');
  }
}
