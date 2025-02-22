import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AnimeService } from '../../servicios/anime.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


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
  
}
