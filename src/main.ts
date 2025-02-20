import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient ,withFetch} from '@angular/common/http';
import { routes } from '../src/app/app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()) // <-- Asegúrate de agregar esto
  ]
};
