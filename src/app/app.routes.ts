import { Routes } from '@angular/router';
import { HomeComponent } from './vistas/home/home.component';
import { DirectorioComponent } from './vistas/directorio/directorio.component';
import { ContactoComponent } from './vistas/contacto/contacto.component';
import { AnimeDetalleComponent } from './vistas/anime-detalle/anime-detalle.component';
import { ProductorDetalleComponent } from './vistas/productor-detalle/productor-detalle.component';
import { LoginComponent } from './componentes/login/login.component';
import { FavoritoComponent } from './vistas/favorito/favorito.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta principal ("/")
  { path: 'directorio', component: DirectorioComponent }, // Página de directorio
  { path: 'contacto', component: ContactoComponent }, // Página de FORMULARIO
  { path: 'anime/:id', component: AnimeDetalleComponent },
  { path: 'productor/:id', component: ProductorDetalleComponent },
  { path: 'login', component: LoginComponent},
  { path: 'favorito', component: FavoritoComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Ruta para fallos
];