import { Component,OnInit,ChangeDetectorRef } from '@angular/core';
import { BuscadorComponent } from '../buscador/buscador.component';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { RegistroService } from '../../servicios/registro.service';




@Component({
  selector: 'app-menu',
  imports: [BuscadorComponent,FormsModule,RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})

export class MenuComponent implements OnInit {
  isLoggedIn = false;
  usuario: string | null = null;

  constructor(
    private registroService: RegistroService,
  ) {}

  ngOnInit() {
    this.isLoggedIn = this.registroService.isLoggedIn();
    this.usuario = this.registroService.getUsuarioActual();
  }

  logout() {
    this.registroService.logout();
    this.isLoggedIn = false;
    this.usuario = null;
    window.location.reload();
  }
}
