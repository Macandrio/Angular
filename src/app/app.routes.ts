import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './vistas/home/home.component';
import { DirectorioComponent } from './vistas/directorio/directorio.component';
import { ContactoComponent } from './vistas/contacto/contacto.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { AnimeDetalleComponent } from './componentes/anime-detalle/anime-detalle.component';
import { ProductorDetalleComponent } from './componentes/productor-detalle/productor-detalle.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta principal ("/")
  { path: 'directorio', component: DirectorioComponent }, // Página de directorio
  { path: 'contacto', component: ContactoComponent }, // Página de FORMULARIO
  { path: 'anime/:id', component: AnimeDetalleComponent },
  { path: 'productor/:id', component: ProductorDetalleComponent },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}