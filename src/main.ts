import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';


//para iniciar mi aplicacion angular
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


