import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AnimeService } from '../../servicios/anime.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RegistroService } from '../../servicios/registro.service';


@Component({
  selector: 'app-anime-detalle',
  templateUrl: './anime-detalle.component.html',
  styleUrls: ['./anime-detalle.component.css']
})
export class AnimeDetalleComponent implements OnInit {
  anime: any = null; // Se inicializa en null para evitar errores
  videoUrl: SafeResourceUrl | null = null;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private animeService: AnimeService,
    private favorito: RegistroService,
    private sanitizer: DomSanitizer) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.animeService.obtenerAnimePorId(id).subscribe(response => {
      this.anime = response.data || null; // Si no encuentra, deja `null`
    });

    if (this.anime?.trailer?.embed_url) {
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.anime.trailer.embed_url
      );
    }
  }

  irAProductor(producer: any) {
    this.router.navigate(['productor', producer.mal_id]);
  }
  
  // ✅ Método para alternar entre añadir y quitar de favoritos
  toggleFavorito(anime: any): void {
    if (this.esFavorito(anime.id)) {
      this.favorito.removeFavorito(anime.id);
    } else {
      this.favorito.addFavorito(anime);
    }
  }

  // ✅ Verifica si una película ya está en favoritos
  esFavorito(animeid: number): boolean {
    return this.favorito.getFavoritos().some(fav => fav.mal_id === animeid);
  }

  
}
