import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-persona',
  templateUrl: './info-persona.component.html',
  styleUrls: ['./info-persona.component.sass']
})
export class InfoPersonaComponent implements OnInit, OnDestroy {

  @Input() nombre:string = "";
  @Input() apellido:string = "";
  constructor() { }

  ngOnInit(): void {
    console.log("Se inicializo el componente infopersona");
  }
  ngOnChanges(changes){

    console.log("Se recibieron datos de entrada...");
  }
  ngOnDestroy(): void {
      console.log("Se destruyo el componente");
  }

}
