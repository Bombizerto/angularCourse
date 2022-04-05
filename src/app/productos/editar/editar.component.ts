import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  show: boolean=true;
  textoBotton: string="Ocultar"
  toggle(): void{
    this.show=!this.show;
    if(this.show){
      this.textoBotton="Ocultar";
    }else{
      this.textoBotton="Mostrar";
    }
  }
 
}
