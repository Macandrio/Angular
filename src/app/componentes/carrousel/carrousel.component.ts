import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeService } from '../../servicios/anime.service';

@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css'],
})
export class CarrouselComponent implements OnInit {
  animes: any[] = [];

  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    this.getEmisionAnimes();
  }

  getEmisionAnimes() {
    this.animeService.getAnimesEnEmision().subscribe({next: (response) => {
        this.animes = response.data.slice(0, 5);
      },
      error: (error) => {
        console.error('❌ Error al obtener animes:', error);
      },
    });
  }
  
  
}
