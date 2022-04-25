import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { 
    console.log(".... Instanciando servicio LoginServices")
  }
  logToConsole(msg: string){
    console.log("...."+ msg);
  }
}
