import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {ContactoComponent} from './contacto/contacto.component';
import {ProductosComponent} from './productos/productos.component';
import {RegistroComponent} from './registro/registro.component';
import {DomicilioComponent} from './domicilio/domicilio.component';
import { PerfilComponent } from './perfil/perfil.component';
import { roleGuard } from './guards/role.guard';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { MensajesComponent } from './mensajes/mensajes.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'domicilio', component: DomicilioComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'perfil', component: PerfilComponent },
    { path: 'app-access-denied', component: AccessDeniedComponent },
    { path: 'mensajes', component: MensajesComponent, canActivate: [roleGuard], data: { expectedRole: 'admin' } },
    { path: '**',redirectTo: '',pathMatch: 'full' }
];
