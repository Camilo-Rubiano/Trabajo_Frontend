import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import {ContactoComponent} from './contacto/contacto.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactoComponent, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tintoexpres';
}
