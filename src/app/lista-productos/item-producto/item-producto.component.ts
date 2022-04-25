import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';
import { Producto } from '../producto';

@Component({
  selector: 'app-item-producto',
  templateUrl: './item-producto.component.html',
  styleUrls: ['./item-producto.component.css']
})
export class ItemProductoComponent implements OnInit {
  @Input()producto!:Producto;
  @Output("ventaCompletada") eventoVenta: EventEmitter<string>
                              =new EventEmitter<string>(); 
  constructor(private servicioLoggin: LoginService) {
   }

  ngOnInit(): void {
  }

  onVenderUnidad(){
    this.servicioLoggin.logToConsole("---Vendiendo---")
    if(this.producto.stock<=0){
      this.eventoVenta.emit("No se pudo realizar la venta. Stock 0");
    }else{
      this.producto.stock--;
      this.eventoVenta.emit("Se ha vendido unidad del producto " + this.producto.nombre +". Stock restante: "+this.producto.stock);
    }
  }
}
