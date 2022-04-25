import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  
  allowNewServer:boolean=false;
  serverCreateStatus: string ="No hay";
  serverList:{id:Number, name:String, status: string}[]=[];
  clasessCss: String;

  //Nombre del nuevo servidor a crear

  serverName:string="";
  constructor() {
    this.serverList.push({id: 1, name: "server1", status:"On"})
    this.serverList.push({id: 2, name: "server2", status:"On"})
    this.serverList.push({id: 3, name: "server3", status:"Off"})
    this.clasessCss="uno dos";
   }
  ngOnInit(): void {
  }
  toggle(idSeleccionado: Number):void{
    let index=this.serverList.findIndex((obj=>obj.id==idSeleccionado))
    this.serverList[index].status="On"
    this.clasessCss="uno"
  }
  
  
  togglePermitir():void{
    this.allowNewServer=true;
  }

  onCreateServer(){
    this.serverCreateStatus="He creado un nuevo servidor"
  }

  onUpdateServerName(e:any){
    this.serverName=e.target.value
  }
}
