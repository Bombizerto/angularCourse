import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { Producto } from '../lista-productos/producto';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  listaProductos:Producto[]=[]
  constructor(private logService: LoginService) { 
    this.cargarProductos();
    logService.logToConsole(".... servicio Prodcuto service instanciado")
  }

  private cargarProductos(){
    this.listaProductos.push({id:1, nombre:"Bicivleta",stock:10});
    this.listaProductos.push({id:2, nombre:"Bota",stock:10});
  }
}
