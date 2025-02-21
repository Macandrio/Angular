import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from '../../servicios/anime.service';

@Component({
  selector: 'app-anime-detalle',
  templateUrl: './anime-detalle.component.html',
  styleUrls: ['./anime-detalle.component.css']
})
export class AnimeDetalleComponent implements OnInit {
  anime: any = null; // Se inicializa en null para evitar errores

  constructor(private route: ActivatedRoute, private animeService: AnimeService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.animeService.obtenerAnimePorId(id).subscribe(response => {
      this.anime = response.data || null; // Si no encuentra, deja `null`
    });
  }
}
