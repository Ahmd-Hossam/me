import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export type IconName =
  | 'mail'
  | 'download'
  | 'external'
  | 'arrow-right'
  | 'arrow-up'
  | 'sun'
  | 'moon'
  | 'menu'
  | 'close'
  | 'globe'
  | 'pin'
  | 'activity'
  | 'github'
  | 'linkedin'
  | 'strava';

const FILLED: ReadonlySet<IconName> = new Set(['github', 'linkedin', 'strava']);

/**
 * Inline SVG icons (Lucide-style strokes + simple brand marks). Decorative by default:
 * the surrounding control must carry the accessible name. Size it with a class on the host,
 * e.g. `<app-icon name="mail" class="size-5" />`.
 */
@Component({
  selector: 'app-icon',
  templateUrl: './icon.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'inline-block shrink-0', 'aria-hidden': 'true' },
})
export class Icon {
  readonly name = input.required<IconName>();
  protected readonly filled = computed(() => FILLED.has(this.name()));
}
