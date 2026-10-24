import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { appConfig } from './app.config';
import { routes } from './app.routes';
import { serverRoutes } from './app.routes.server';

const serverConfig: ApplicationConfig = {
  providers: [
    // The router exists only on the server, so the prerenderer can discover `/` and `/ar`.
    provideRouter(routes),
    provideServerRendering(withRoutes(serverRoutes)),
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
