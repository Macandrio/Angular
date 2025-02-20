import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // ✅ Asegurar que map() está importado

@Injectable({
  providedIn: 'root' // Permite que este servicio se use en toda la app sin necesidad de importarlo en módulos.
})
export class AnimeService {
  private apiUrl = 'https://api.jikan.moe/v4/'; // URL base de la API

  constructor(private http: HttpClient) {}

  // Animes en Emision Para carrousel
  getAnimesEnEmision(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'seasons/now');
  }

  // Animes en Emision
  ListarAnimes(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'anime');
  }

  getAnimesEnEmisionConUltimoCapitulo(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'seasons/now').pipe(
      map(response => {
        return response.data.map((anime: any) => ({
          id: anime.mal_id,
          title: anime.title,
          image: anime.images.jpg.image_url,
          type: anime.type,
          episodes: anime.episodes ? anime.episodes + '' : 'Desconocido',
          lastEpisode: anime.episodes ? 'Episodio ' + anime.episodes : 'Episodio Desconocido'
        }));
      })
    );
  }

  getTodosLosAnimes(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'anime')
    
  }
}
