import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class RegistroService {
  private usuarios: { usuario: string, password: string, favoritos: any[] }[] = [];
  private usuarioActual: string | null = null;

  constructor() {
    if (typeof localStorage !== 'undefined') {
      const usuariosGuardados = localStorage.getItem('usuarios');
      if (usuariosGuardados) {
        this.usuarios = JSON.parse(usuariosGuardados);
      }
      this.usuarioActual = localStorage.getItem('usuarioActual');
    }
  }

  // ✅ Registrar usuario
  register(usuario: string, password: string): boolean {
    const usuarioExiste = this.usuarios.some(user => user.usuario === usuario);

    if (usuarioExiste) {
      return false;
    }

    this.usuarios.push({ usuario, password, favoritos: [] });
    localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
    window.location.reload(); 
    return true;
  }

  // ✅ Iniciar sesión
  login(usuario: string, password: string): boolean {
    const usuarioValido = this.usuarios.find(user => user.usuario === usuario && user.password === password);
    console.log('Intentando iniciar sesión con:', usuario, password);

    if (usuarioValido) {
      this.usuarioActual = usuario;
      localStorage.setItem('usuarioActual', usuario);
      return true;
    }
    return false;
  }

  // ✅ Obtener usuario actual
  getUsuarioActual(): string | null {
    return this.usuarioActual;
  }

  // ✅ Cerrar sesión
  logout(): void {
    this.usuarioActual = null;
    localStorage.removeItem('usuarioActual');
  }

  // ✅ Verificar si está logueado
  isLoggedIn(): boolean {
    return this.usuarioActual !== null;
  }



  

  // ✅ Agregar Anime a favoritos y guardar en localStorage
  addFavorito(anime: any) {
    if (!this.usuarioActual) {
      console.error("⚠️ No hay usuario logueado.");
      return;
    }

    const usuario = this.usuarios.find(user => user.usuario === this.usuarioActual);
    if (!usuario) return;

    if (!usuario.favoritos) {
      usuario.favoritos = [];
    }

    // ✅ Verificar si la Anime ya está en favoritos antes de agregarla
    const existe = usuario.favoritos.some(fav => fav.mal_id === anime.mal_id);
    if (!existe) {
      usuario.favoritos.push(anime);
      console.log("✅ Anime añadida a favoritos:", anime);
      this.guardarUsuarios(); // Guardar en localStorage
    } else {
      console.warn("⚠️ La Anime ya está en favoritos.");
    }
  }

  // ✅ Verificar si el anime ya está en favoritos antes de agregarlo
agregarFavorito(anime: any): void {
  if (!this.usuarioActual) return;

  const usuario = this.usuarios.find(user => user.usuario === this.usuarioActual);
  if (!usuario) return;

  if (!usuario.favoritos) {
    usuario.favoritos = []; // Inicializar si está vacío
  }

  const existe = usuario.favoritos.some(fav => fav.mal_id === anime.mal_id);
  if (!existe) {
    usuario.favoritos.push(anime);
    this.guardarUsuarios(); // Guardar en localStorage
    console.log("✅ Anime añadido a favoritos:", anime);
  } else {
    console.warn("⚠️ El anime ya está en favoritos:", anime.mal_id);
  }
}

// ✅ Obtener animes favoritos del usuario logueado
getFavoritos(): any[] {
  if (!this.usuarioActual) return [];

  const usuario = this.usuarios.find(user => user.usuario === this.usuarioActual);
  return usuario && usuario.favoritos ? usuario.favoritos : [];
}

// ✅ Eliminar anime de favoritos y actualizar localStorage
removeFavorito(animeId: number): void {
  if (!this.usuarioActual) return;

  const usuario = this.usuarios.find(user => user.usuario === this.usuarioActual);
  if (!usuario || !usuario.favoritos) return;

  const antes = usuario.favoritos.length;
  usuario.favoritos = usuario.favoritos.filter(fav => fav.mal_id !== animeId);

  if (usuario.favoritos.length < antes) {
    this.guardarUsuarios(); // Guardar cambios en localStorage
    console.log("❌ Anime eliminado de favoritos:", animeId);
  } else {
    console.warn("⚠️ No se encontró el anime en favoritos:", animeId);
  }
}


  // ✅ Guardar la lista de usuarios en `localStorage`
  private guardarUsuarios(): void {
    localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
  }
}