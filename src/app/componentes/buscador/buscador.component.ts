import { Component } from '@angular/core';
import { AnimeService } from '../../servicios/anime.service'; // Asegúrate de importar tu servicio
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
  imports: [FormsModule]
})
export class BuscadorComponent{
  searchQuery: string = '';
  resultados: any[] = []; // Guarda los resultados de búsqueda


  constructor(private animeService: AnimeService, private router: Router) {}

  buscarAnime() {
    if (this.searchQuery) {
      this.animeService.buscarPorNombre(this.searchQuery).subscribe(response => {
        this.resultados = response.data; // Guardar los resultados
      });
    }
  }

  irADetalle(anime: any) {
    this.resultados = []; // Limpiar la lista de resultados
    this.searchQuery = '';
    this.router.navigate(['/anime', anime.mal_id]).then(() => { //si falla la url .then no se ejecuta
      window.location.reload(); // Recargar la página después de la navegación
    });
  }
  
}