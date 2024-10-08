import { Component, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';  // Importar NgbModal
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // Importar FormsModule para ngModel

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, FormsModule, ReactiveFormsModule],  // Agregar FormsModule
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('loginModal') loginModal!: TemplateRef<any>;  // Referencia del modal con ViewChild
  title = 'tintoexpres';
  nombreUsuario: string | null = null;
  correo: string = '';  // Campo para el correo del modal
  contrasena: string = '';  // Campo para la contraseña del modal
  mensajeError: string = '';  // Mensaje de error si el usuario no existe
  mostrarRegistro: boolean = false;  // Mostrar botón de registro si no encuentra usuario

  constructor(private router: Router, private modalService: NgbModal) {}

  ngOnInit() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      this.nombreUsuario = localStorage.getItem('nombreUsuario');
    } else {
      console.log('localStorage no está disponible en este entorno.');
    }
  }

  // Función para abrir el modal
  abrirModal(modalTemplate: any) {
    this.modalService.open(modalTemplate, { centered: true });
  }
  // Función para verificar si el usuario existe en localStorage
  verificarUsuario() {
    const usuariosGuardados = localStorage.getItem('usuarios');
    const usuarios = usuariosGuardados ? JSON.parse(usuariosGuardados) : [];

    const usuario = usuarios.find((user: any) => user.correo === this.correo && user.contrasena === this.contrasena);

    if (usuario) {
      var datosUsuario = null;
      datosUsuario = JSON.stringify(usuario);
      localStorage.setItem('datosUsuarioSesion', datosUsuario);
      this.router.navigate(['/productos']);
      this.modalService.dismissAll();  // Cierra el modal si encuentra el usuario
    } else {
      this.mensajeError = 'Usuario no existe o contraseña incorrecta.';
      this.mostrarRegistro = true;
    }
  }
  cerrarModal() {
  this.modalService.dismissAll();  // O usa close() para cerrar un modal específico
}
  // Redirigir al registro si el usuario no está registrado
  redirigirRegistro() {
    this.router.navigate(['/registro']);
    this.modalService.dismissAll();  // Cierra el modal
  }

  cerrarSesion() {
    localStorage.removeItem('datosUsuarioSesion');
  }
}
