import { Component, OnInit } from '@angular/core';
import { LoginService } from '../servicios/login.service';
import { ProductoService } from '../servicios/producto.service';
import { Producto } from './producto';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css'],
  providers:[LoginService,ProductoService]
})
export class ListaProductosComponent implements OnInit {

  listaProductos:Producto[];
  constructor(private servicioLog:LoginService,private servicioProducto: ProductoService) { 
    this.listaProductos=servicioProducto.listaProductos
  }

  ngOnInit(): void {
  }

  onTerminoVenta(event:string){
      alert(event)
      this.servicioLog.logToConsole("Fin de venta "+event);
  }
}
