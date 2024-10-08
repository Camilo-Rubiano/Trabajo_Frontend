import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mensajes',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './mensajes.component.html',
  styleUrl: './mensajes.component.css'
})
export class MensajesComponent implements OnInit {
  mensajes: any[] = [];

  ngOnInit() {
    // Obtener los mensajes desde localStorage
    const mensajesGuardados = localStorage.getItem('mensajes');

    // Si hay mensajes, parsear y asignar a la variable mensajes
    if (mensajesGuardados) {
      this.mensajes = JSON.parse(mensajesGuardados);
    } else {
      this.mensajes = [];
    }
  }

  eliminarMensaje(index: number) {
    // Eliminar el mensaje de la lista en memoria
    this.mensajes.splice(index, 1);

    // Actualizar localStorage con la lista de mensajes actualizada
    localStorage.setItem('mensajes', JSON.stringify(this.mensajes));

    // Opcional: Mostrar un mensaje de confirmación o feedback al usuario
    console.log('Mensaje eliminado correctamente');
  }
}
