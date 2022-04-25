import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  @Input("idServer") id:number=0;
  @Input("name") name:string="";
  @Input("status") status:string='On';
  @Output() change: EventEmitter<number>
                                =new EventEmitter<number>()
  constructor() { }

  ngOnInit(): void {
  }

}
