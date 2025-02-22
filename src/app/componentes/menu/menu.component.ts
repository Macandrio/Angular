import { Component } from '@angular/core';
import { BuscadorComponent } from '../buscador/buscador.component';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';




@Component({
  selector: 'app-menu',
  imports: [BuscadorComponent,FormsModule,RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})

export class MenuComponent {
  isLoggedIn: boolean = false;
  username: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    // Verificar si el usuario está logueado
    if (typeof window !== 'undefined' && localStorage) {
      this.isLoggedIn = localStorage.getItem('isLoggedIn') == 'true';
      this.username = localStorage.getItem('username') || '';
    }
  }

  logout() {
    if (typeof window !== 'undefined' && localStorage) {
      localStorage.setItem('isLoggedIn', 'false'); //se cambia el estado de isLoggedIn a false
      this.isLoggedIn = false; //se cambia el estado de isLoggedIn a false
      console.log(this.username)
    }
  }

}
