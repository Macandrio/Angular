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

  getAnimes() {
    this.animeService.getAnimesEnEmisionConUltimoCapitulo().subscribe({
      next: (response) => {
        this.animes = response.slice(0, 15);  // Solo mostramos 15 animes
        this.lastEpisodes = response.sort((a:any, b:any) => b.lastEpisode - a.lastEpisode).slice(0, 15); 
      },
      error: (error) => {
        console.error('❌ Error al obtener animes:', error);
      },
    });
  }

  //preguntar porque pasa
  irADetalle(anime: any) {
    this.router.navigate(['/anime', anime.id]).then(() => {
      window.location.reload(); // Recargar la página después de la navegación
    });
  }
}
