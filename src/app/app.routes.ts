import { Routes } from '@angular/router';
import { HomeComponent } from './vistas/home/home.component';
import { DirectorioComponent } from './vistas/directorio/directorio.component';
import { ContactoComponent } from './vistas/contacto/contacto.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta principal ("/")
  { path: 'directorio', component: DirectorioComponent }, // Página de directorio
  { path: 'contacto', component: ContactoComponent }, // Página de FORMULARIO
];
