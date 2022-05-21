import { Component, OnInit } from '@angular/core';
import { VuelosService } from '../Service/vuelos.service';
import { Vuelo } from '../Interface/vuelo';

@Component({
  selector: 'app-vuelos',
  templateUrl: './vuelos.component.html',
  styleUrls: ['./vuelos.component.sass']
})
export class VuelosComponent implements OnInit {

  public vuelos:Vuelo[] = [];
  vuelo : Vuelo={numeroVuelo : "", fecha : "", horario : "", origen: "", destino : ""};
  /*public nVuelo:string="";
  public origen:string = "";
  public fecha:string = "";
  public horario:string = "";
  public destino:string = "";*/

  constructor(private vuelosService:VuelosService) { }

  ngOnInit(): void {
    this.vuelosService.getVuelos().subscribe(data=>this.vuelos=data);
  }


  ngOnchange():void{
    this.vuelosService.getVuelos().subscribe(data=>this.vuelos=data);
  }

  onSubmit(){
    let vregistrar = this.vuelo;
    this.vuelosService.setVuelos(vregistrar).subscribe(
      vregistrar=>{
        console.log(vregistrar);
      }
    );
    this.vuelos.push(vregistrar);
  }

}
