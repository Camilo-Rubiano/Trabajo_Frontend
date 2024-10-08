import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  // Método para obtener el rol del usuario actual (simulado)
  getUserRole(): string | null {
    const usuario = localStorage.getItem('datosUsuarioSesion');
    return usuario ? JSON.parse(usuario).rol : null;
  }

  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    return !!localStorage.getItem('datosUsuarioSesion');
  }
}
