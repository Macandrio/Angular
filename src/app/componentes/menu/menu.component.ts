import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BuscadorComponent } from '../buscador/buscador.component';


@Component({
  selector: 'app-menu',
  imports: [RouterModule, BuscadorComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
}
