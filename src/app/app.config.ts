import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideClientHydration, withIncrementalHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // Incremental hydration (implies event replay): @defer blocks with `hydrate` triggers are
    // fully rendered in the prerendered HTML, but their JS loads only when they are needed.
    provideClientHydration(withIncrementalHydration()),
  ],
};
