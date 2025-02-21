import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../../servicios/anime.service';
import { response } from 'express';

@Component({
  selector: 'app-directorio',
  standalone: true,
  templateUrl: './directorio.component.html',
  styleUrls: ['./directorio.component.css'],
})
export class DirectorioComponent implements OnInit {
  animes: any[] = [];
  animesFiltrados: any[] = [];  // Lista de animes filtrados
  
  tiposDisponibles: string[] = []; // Lista de tipos de anime disponibles
  generosDisponibles: string[] = []; // Géneros únicos
  generosSeleccionados: string[] = []; // Géneros elegidos por el usuario

  tipoSeleccionado: string = 'todos'; // Tipo seleccionado por defecto
  mostrarTipo: boolean = false;  // Controla la visibilidad del menú de Tipo
  mostrarGenero: boolean = false;  // Controla la visibilidad del menú de Género


  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    this.cargarAnimes();   
  }

  cargarAnimes() {
    this.animeService.ListarAnimes().subscribe(response => {  
          this.animes = response.data

          // Aplicar filtro
          this.animesFiltrados = this.animes; //para que no afecte al array animes clonamos para filtrar
          this.obtenerTiposDisponibles();
          this.obtenerGenerosDisponibles();
      },
      (error) => {
        console.error("❌ Error al obtener animes:", error);
      }
    );
  }
  
  //obtengo los type para elejir luego ["TV", "Movie", "OVA"]
  obtenerTiposDisponibles() {
    this.tiposDisponibles = [
      ...new Set(this.animes.map(anime => anime.type?.trim()).filter(type => type))  
    ];
  }

  //{ "title": "Naruto", "genres": [{ "name": "Acción" }, { "name": "Aventura" }] }
  obtenerGenerosDisponibles() {
    this.generosDisponibles = [
      ...new Set(this.animes.flatMap(anime => anime.genres.map((g: {name:string}) => g.name)))
    ];
  }
  
  


  //Aqui filtro por la eleccion de type y genero
  filtrarAnimes() {
    let resultado = this.animes;
  
    // Filtrar por tipo
    if (this.tipoSeleccionado !== 'todos') {
      resultado = resultado.filter(anime => anime.type === this.tipoSeleccionado);
    }
    
    // Filtrar por genero
    //si some y include sale true añade el anime
    if (this.generosSeleccionados.length > 0) {
      resultado = resultado.filter(anime =>
        anime.genres.some((genre: { name: string }) =>
          this.generosSeleccionados.includes(genre.name)
        )
      );
    }
    
  
    this.animesFiltrados = resultado;
  }
  
  
  
 //actualizar el tipo de drop
  actualizarTipo(event: Event, tipo: string) {
    event.preventDefault(); // Evita que la página recargue
    this.tipoSeleccionado = tipo;
    this.filtrarAnimes();
  }
  
  
  //actualizar el genero del drop
  actualizarGenero(event: Event) {
    const selectElement = event.target as HTMLSelectElement; // Convertir a <select> 
    this.generosSeleccionados = [...selectElement.selectedOptions].map(option => option.value); // Extraer valores
    
    this.filtrarAnimes();
  }
  


  //para que en mi template se vean los generos 
  getGeneroString(anime: any): string {
    return anime.genres.map((genre: { name: string }) => genre.name).join(', ');
  }


  seleccionarGenero(event: Event) {
    const target = event.target as HTMLInputElement;  // Asegurar que es un checkbox
    const genero = target.value;  // Obtener el valor del checkbox
  
    if (target.checked) {
      // Si el checkbox está marcado, agregar el género a la lista
      this.generosSeleccionados.push(genero);
    } else {
      // Si el checkbox se desmarca, eliminar el género de la lista
      this.generosSeleccionados = this.generosSeleccionados.filter(g => g !== genero);
    }
  
    this.filtrarAnimes(); // Llamar al filtro cada vez que se cambia una selección
  }


  //eventos para los drops
  toggleTipo() {
    this.mostrarTipo = !this.mostrarTipo;
    this.mostrarGenero = false; // Cierra el otro dropdown si está abierto
  }
  
  toggleGenero() {
    this.mostrarGenero = !this.mostrarGenero;
    this.mostrarTipo = false; // Cierra el otro dropdown si está abierto
  }
  
  
  
  
  
}