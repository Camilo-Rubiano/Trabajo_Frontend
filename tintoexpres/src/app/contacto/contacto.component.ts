import { Component, ViewChild, ElementRef  } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
declare var bootstrap: any;
@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  @ViewChild('toastElement', { static: true }) toastElement!: ElementRef;
  contactoForm: FormGroup;
  datosContacto: any;
  toastInstance: any;  

  constructor(
    private formBuilder: FormBuilder,
  )

  {
    this.contactoForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', Validators.required],
      mensaje:['']
    });
  }

  onSubmit() {
    if (this.contactoForm.valid) {
      this.toastInstance = new bootstrap.Toast(this.toastElement.nativeElement);
      const mensajeContacto = this.contactoForm.value;
      const mesajesGuardados = localStorage.getItem('mensajes');
      let mensaje = mesajesGuardados ? JSON.parse(mesajesGuardados) : []; 
      mensaje.push(mensajeContacto);
      localStorage.setItem('mensajes', JSON.stringify(mensaje));
      this.mostrarToast();
      this.limpiarFormulario();

    } else {
      console.log('Formulario no válido');
    }
  }

  limpiarFormulario() {
    this.contactoForm.reset();
  }
  mostrarToast() {
    this.toastInstance.show();
  }

}
