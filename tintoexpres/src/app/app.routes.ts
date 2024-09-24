import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {ContactoComponent} from './contacto/contacto.component';
import {ProductosComponent} from './productos/productos.component';
import {RegistroComponent} from './registro/registro.component';
import {DomicilioComponent} from './domicilio/domicilio.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'domicilio',
        component: DomicilioComponent
    },
    {
        path: 'productos',
        component: ProductosComponent
    },
    {
        path: 'registro',
        component: RegistroComponent
    },
    {
        path: 'contacto',
        component: ContactoComponent
    }
];
