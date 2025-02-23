import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


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

  getTodosLosAnimes(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'anime')
    
  }

  // Función para buscar animes por nombre
  buscarPorNombre(nombre: string): Observable<any> {
    const url = this.apiUrl + 'anime?q=' + encodeURIComponent(nombre); // Construir la URL con el nombre
    return this.http.get<any>(url);
  }

  // Obtener detalles de un anime por ID
  obtenerAnimePorId(id: number): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'anime/' + id);
  }

  // Obtener detalles de un estudio por ID
  obtenerProductorPorId(id: number): Observable<any> {
    // Ajusta la URL al endpoint correcto según tu API
    return this.http.get<any>(this.apiUrl + 'producers/' + id);
  }
}
