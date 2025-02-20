import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../../servicios/anime.service';

@Component({
  selector: 'app-directorio',
  standalone: true,
  templateUrl: './directorio.component.html',
  styleUrls: ['./directorio.component.css'],
})
export class DirectorioComponent implements OnInit {
  animes: any[] = [];

  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    this.getAnimes();
  }

  getAnimes() {
    this.animeService.getTodosLosAnimes().subscribe({
      next: (response) => {
        this.animes = response.data;
        console.log(`Número de animes: ${response.data.length}`);
      },
      error: (error) => {
        console.error('❌ Error al obtener animes:', error);
      },
    });
  }
}
