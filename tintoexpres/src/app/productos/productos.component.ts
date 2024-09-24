import { Component } from '@angular/core';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { importProvidersFrom } from '@angular/core';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [NgbModalModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  productoSeleccionado: any;

  productos = [
    {
      id: '0',
      titulo: 'Café Cumbre Colombiana',
      imagen: 'images/cumbre.jpeg',
      descripcion: 'Este café 100% colombiano proviene de las altas montañas de los Andes, donde las condiciones climáticas únicas permiten un cultivo de granos excepcionales.',
      aroma: 'Floral con notas cítricas y un toque de caramelo.',
      sabor: 'Equilibrado, con una acidez media-alta, cuerpo medio y un final dulce con toques de frutos rojos.',
      componentes: 'Rico en antioxidantes naturales y bajo contenido en grasas, ideal para los que buscan una experiencia pura del café colombiano.'
    },
    {
      id: '1',
      titulo: 'Café Oceano Profundo',
      imagen: 'images/profundo.jpeg',
      descripcion: 'Cultivado en las zonas más húmedas y frondosas del suroeste de Colombia, este café tiene un perfil más exótico y misterioso.',
      aroma: 'Intensamente afrutado con matices tropicales y un toque de cacao.',
      sabor: 'Notas de chocolate amargo y nueces, con un cuerpo completo y una acidez suave. Perfecto para quienes buscan una taza rica y compleja.',
      componentes: 'Altamente concentrado en polifenoles, lo que lo convierte en una excelente opción antioxidante.'
    },
    {
      id: '2',
      titulo: 'Café Nube de Altura',
      imagen: 'images/altura.jpeg',
      descripcion: 'Este café de altura se cultiva en los picos más elevados de las montañas colombianas, donde las bajas temperaturas permiten un crecimiento lento que intensifica el sabor.',
      aroma: 'Delicado con notas de vainilla y miel.',
      sabor: 'Suave y cremoso, con un toque de almendra tostada y caramelo. Una acidez muy ligera que deja una sensación aterciopelada en la boca.',
      componentes: 'Rico en minerales y bajo en cafeína, ideal para los que prefieren un café más suave.'
    },
    {
      id: '3',
      titulo: 'Café Aurora Púrpura',
      imagen: 'images/purpura.jpeg',
      descripcion: 'Este café proviene de pequeños lotes cosechados a mano durante la noche para preservar la frescura de los granos, obteniendo un perfil inigualable.',
      aroma: 'Profundo y misterioso, con toques de ciruela y especias dulces.',
      sabor: 'Cuerpo robusto con notas de cacao oscuro y especias como la canela y la nuez moscada. Ideal para los amantes de los sabores intensos y envolventes.',
      componentes: 'Elevado contenido de magnesio, perfecto para revitalizar y disfrutar en cualquier momento del día.'
    },
    {
      id: '4',
      titulo: 'Café Cosecha Nocturna',
      imagen: 'images/nocturna.jpeg',
      descripcion: 'Este café oscuro y audaz proviene de las regiones volcánicas del Tolima, donde el suelo rico en minerales aporta una intensidad incomparable a los granos.',
      aroma: 'Humo ligero con toques de tabaco y cacao.',
      sabor: 'Intenso, con un cuerpo muy completo y amargor pronunciado, perfecto para quienes disfrutan del café fuerte y profundo. Notas persistentes de cacao amargo y roble.',
      componentes: 'Rico en cafeína y bajo en acidez, ideal para un impulso de energía.'
    },
    {
      id: '5',
      titulo: 'Café Sol Dorado',
      imagen: 'images/dorado.jpeg',
      descripcion: 'Cultivado en las soleadas laderas del Huila, este café recibe luz solar directa durante largos períodos, lo que realza su dulzura natural.',
      aroma: 'Cítrico y dulce, con toques de miel y flores.',
      sabor: 'Suave pero con carácter, destaca por sus notas de frutas tropicales y miel. La acidez es media, lo que equilibra bien el dulzor natural del grano.',
      componentes: 'Alto en ácido clorogénico, un componente antioxidante, perfecto para quienes buscan un café ligero y refrescante.'
    }
  ];

  constructor(private modalService: NgbModal) {}
  openModal(productoId: string, content: any) {
    debugger;
    this.productoSeleccionado = this.productos.find(producto => producto.id === productoId);
    this.modalService.open(content);
  }
}
