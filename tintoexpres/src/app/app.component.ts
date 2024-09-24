import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import {ContactoComponent} from './contacto/contacto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactoComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tintoexpres';
}
