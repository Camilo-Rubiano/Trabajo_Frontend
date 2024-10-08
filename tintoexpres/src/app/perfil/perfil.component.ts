import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  datosSession: any = {};

  constructor() {
    if (typeof window !== 'undefined' && localStorage) {
      this.datosSession = JSON.parse(localStorage.getItem('datosUsuarioSesion') || '{}');
    }
  }

  ngOnInit(): void {
    // Código adicional
  }
}
