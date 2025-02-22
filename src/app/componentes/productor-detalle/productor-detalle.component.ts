// productor-detalle.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from '../../servicios/anime.service';

@Component({
  selector: 'app-productor-detalle',
  templateUrl: './productor-detalle.component.html',
  styleUrls: ['./productor-detalle.component.css']
})
export class ProductorDetalleComponent implements OnInit {

  productor: any; // aquí guardarás los datos del productor

  constructor(
    private route: ActivatedRoute,
    private animeService: AnimeService
  ) {}

  ngOnInit(): void {
    // Leer el id de la ruta
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.cargarProductor(+id);  // convertir a number
    }
  }

  cargarProductor(id: number) {
    this.animeService.obtenerProductorPorId(id).subscribe(
      (response: any) => {
        this.productor = response.data || null;
        console.log('Productor:', this.productor);
      }
    );
  }
  
}
