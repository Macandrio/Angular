import { Component,OnInit } from '@angular/core';
import { CarrouselComponent } from '../../componentes/carrousel/carrousel.component'; // ✅ IMPORTACIÓN CORREGIDA
import { AnimeService } from '../../servicios/anime.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarrouselComponent],  // ✅ Asegurar que está importado correctamente
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  animes: any[] = [];       // Lista de animes en emisión
  lastEpisodes: any[] = []; // Últimos episodios subidos

  constructor(private animeService: AnimeService, private router: Router ) {}

  ngOnInit(): void {
    this.getAnimes();
  }

  //Animes en emision ordenados por epiodio
  getAnimes() {
    this.animeService.getAnimesEnEmision().subscribe({
      next: (response) => {
        // No transformamos los datos, usamos la API tal cual
        this.animes = response.data.slice(0, 15); 
        this.lastEpisodes = [...this.animes]
          .sort((a: any, b: any) => (b.episodes || 0) - (a.episodes || 0))
          .slice(0, 15);
      },
      error: (error) => {
        console.error('❌ Error al obtener animes:', error);
      },
    });
  }

  irADetalle(anime: any) {
    this.router.navigate(['/anime', anime.mal_id]).then(() => { //si falla la url .then no se ejecuta
      window.location.reload(); // Recargar la página después de la navegación
    });
  }
}
