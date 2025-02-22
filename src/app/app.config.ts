import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), //Detección de cambios
              provideRouter(routes), //Enrutamiento
              provideClientHydration(withEventReplay()), //restaura eventos para evitar perder interacciones tras la carga inicial.
              provideHttpClient(withFetch()),] //Hablitamos el uso de withFetch para que use las peticiones fetch en vez de las XMLHttpRequest (XHR)
};