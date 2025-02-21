import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnimeService } from '../../servicios/anime.service'; // Asegúrate de importar tu servicio
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
  imports: [FormsModule]
})
export class BuscadorComponent {
  query: string = ''; // Guarda la consulta del usuario
  resultados: any[] = []; // Guarda los resultados de búsqueda

  constructor(private animeService: AnimeService, private router: Router) {}

  buscarAnime() {
    if (this.query.trim() === '') {
      this.resultados = [];
      return;
    }

    // 🔎 Llamar al servicio para buscar por nombre
    this.animeService.buscarPorNombre(this.query).subscribe(response => {
      this.resultados = response.data; // Guardar los resultados
    });
  }

  // 3️⃣ Función para redirigir a la página de detalles cuando se hace clic en un anime
  irADetalle(anime: any) {
    this.resultados = []; // Limpiar la lista de resultados
    this.query = anime.title; // Mostrar el nombre del anime en el input
    this.router.navigate(['/anime', anime.id]); // Redirigir a la página de detalles
  }
}
