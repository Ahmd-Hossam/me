import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { PROFILE } from './data/profile.data';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('renders the skip link, header and footer', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('a[href="/#main"]')?.textContent).toContain(
      PROFILE.ui.skipToContent.en,
    );
    expect(compiled.querySelector('header')).toBeTruthy();
    expect(compiled.querySelector('footer')?.textContent).toContain(PROFILE.name.en);
  });
});
