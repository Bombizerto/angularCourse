import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  title = 'Hola';
  usuario:string;
  no:number=3.141485488923
  person={name:"aidan",
          age:29,
          id:3
  }
  constructor(){
    this.usuario="Aidan Mariñelarena";
  }
  ngOnInit(): void {
  }
}
