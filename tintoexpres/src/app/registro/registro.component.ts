import { Component, ViewChild, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgbModalModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  @ViewChild('yaRegistrado') yaRegistrado!: TemplateRef<any>;
  registroForm: FormGroup;
  datosUsuarioSession: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private modalService: NgbModal 
  ) {
    this.registroForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      pais: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
      confirmarContrasena: ['', Validators.required],
      rol: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  // Validador para confirmar que las contraseñas coinciden
  passwordMatchValidator(formGroup: FormGroup) {
    return formGroup.get('contrasena')?.value === formGroup.get('confirmarContrasena')?.value
      ? null : { 'mismatch': true };
  }

  onSubmit() {
    if (this.registroForm.valid) {
      const nuevoUsuario = this.registroForm.value;

      // Recuperar usuarios almacenados previamente en localStorage
      const usuariosGuardados = localStorage.getItem('usuarios');
      let usuarios = usuariosGuardados ? JSON.parse(usuariosGuardados) : [];

      // Verificar si el correo ya está registrado
      const usuarioExistente = usuarios.find((usuario: any) => usuario.correo === nuevoUsuario.correo);

      if (usuarioExistente) {
        this.modalService.open(this.yaRegistrado);
      } else {
        // Agregar el nuevo usuario a la lista de usuarios
        usuarios.push(nuevoUsuario);
        this.datosUsuarioSession = JSON.stringify(nuevoUsuario);

        // Guardar la lista actualizada de usuarios en localStorage
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        // Guardar el nombre del usuario en localStorage para usarlo más tarde
        localStorage.setItem('nombreUsuario', nuevoUsuario.nombre);
        localStorage.setItem('registroExitoso', 'true');
        // Redirigir al componente de productos
        this.router.navigate(['/productos']);
      }
    } else {
      console.log('Formulario no válido');
    }
  }
}
