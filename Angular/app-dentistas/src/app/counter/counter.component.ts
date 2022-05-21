import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.sass']
})
export class CounterComponent implements OnInit {
  public counter=0;
  constructor() {

  }

  ngOnInit(): void {
  }

  increment():void{
    this.counter +=1;
  }

  decrement():void{
    if(this.counter>0){
      this.counter-=1;
    }else{
      this.counter=0;
    }
  }
}
