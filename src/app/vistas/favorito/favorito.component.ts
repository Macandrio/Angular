import { Component } from '@angular/core';
import { RegistroService } from '../../servicios/registro.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-favorito',
  imports: [CommonModule, FormsModule],
  templateUrl: './favorito.component.html',
  styleUrl: './favorito.component.css'
})
export class FavoritoComponent {
  favoritos: any[] = [];

  constructor(private favorito: RegistroService) {}

  ngOnInit(): void {
    this.loadFavoritos();
  }

  // ✅ Cargar las Animes favoritas
  private loadFavoritos() {
    this.favoritos = this.favorito.getFavoritos();
    console.log("Animes favoritas cargadas:", this.favoritos);
  }

  // ✅ Eliminar una Anime de favoritos
  eliminarFavorito(animeid: number) {
    this.favorito.removeFavorito(animeid);
    this.loadFavoritos(); // 🔥 Recargar la lista después de eliminar
  }
}