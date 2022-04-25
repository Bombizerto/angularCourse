import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor() {
    this.reset();
    setInterval(()=>this.tick(),1000);
   }

  minutos!:number;
  segundo!:number;
  isPaused!:boolean;
  buttonLabel!:string;

  ngOnInit(): void {
  }
  reset(){
    this.minutos=20;
    this.segundo=59;
    this.buttonLabel="Start";
    this.isPaused=true;
    this.togglePause();
  }
  tick(){
    if(!this.isPaused){
      if(--this.segundo<0){
        this.segundo=59;
        if(--this.minutos<0){
          this.reset();
        }
      }
    }
  }
  togglePause(){
    this.isPaused=!this.isPaused;
    if(this.minutos<20||this.segundo<59){
      this.buttonLabel=this.isPaused ? 'Resume' : 'Pause';
    }
  }
}
