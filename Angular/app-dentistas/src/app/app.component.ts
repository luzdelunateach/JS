import { Component, OnInit } from '@angular/core';
import { PersonasService } from './personas.service';
import { Persona } from './shared/persona';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: `
  <router-outlet></router-outlet>
  <div><span>Dra: {{doctor}} especialista {{especialidad}} en: {{consultorio}}</span></div>
  <button (click)="demo()">Demo</button>
  <app-info-persona [nombre]="'Luz de Luna'" [apellido]="'Gutiérrez'"></app-info-persona>
  <p *ngIf="doctor==='Olivia Molina';else noSeCumple">Se cumplio la condicion</p>

  <ng-template #noSeCumple>
    <p>No se cumplio la condicon</p>
  </ng-template>
  <app-matematico #appMath1 [numero1]=-2 [numero2]=-5 [operador]="'*'" (buttonClicked)="onClick($event)"></app-matematico>

  <br/>
  <span>{{appMath1.numero1}} {{appMath1.operador}} {{appMath1.numero2}} = {{appMath1.total}}</span>
  <br/>
  <app-matematico #appMath2 [numero1]=80 [numero2]=30 [operador]="'+'" (buttonClicked)="onClick($event)"></app-matematico>
  <br/>
  <span>{{appMath2.numero1}} {{appMath2.operador}} {{appMath2.numero2}} = {{appMath2.total}}</span>

  <table>
    <thead>
    <th>Idex</th><th>Nombre</th><th>Apellido</th><th>Ciudad</th><th>Moneda</th>
    </thead>
    <tbody>
      <tr *ngFor="let persona of personas|sort:'ciudad':'asc'; index as myIndex">
        <td>{{myIndex+1}}</td><td>{{persona.nombre | uppercase}}</td><td>{{persona.apellido | slice:0:4}}</td><td>{{persona.ciudad |uppercase}}</td><td>{{persona.moneda |currency:'EUR'}}</td>
      </tr>
    </tbody>
  </table>

  <app-demoutilerias></app-demoutilerias>

  <p appCopyright></p>
  <input type="text" appNumeric/>
  <div *appPermission="['admin', 'agent', 'programmer']">
    <h1>Esta area solo es visible para los que sean admin, agent y programmer</h1>
  </div>

  Dato: <input type="text" id="txtDato" [(ngModel)]="dato">
  {{dato}}

  <app-vuelos></app-vuelos>

  `,
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [PersonasService]
})

//<app-ejemplo></app-ejemplo>
//<app-quinto></app-quinto>
//<app-counter></app-counter>
export class ComponentOne implements OnInit {
  title = 'app-dentistas';
  public doctor = 'Olivia Molina';
  public especialidad = 'Endodoncista';
  public consultorio = 'Clínica Smiling';
  dato:string = "";
  public personas:Persona[] = [];
  /*public personas = [
    {id:1,nombre:"Luna",apellido:"Gutierrez", ciudad:"Morelia", moneda:"10000"},
    {id:2,nombre:"Pedro",apellido:"Vazquez", ciudad:"Huandacareo", moneda:"12000"},
    {id:3,nombre:"Pao",apellido:"Gonzalez", ciudad:"Morelia", moneda:"15000"}
  ]*/
  /*constructor(private personasService:PersonasService){
    personasService = new PersonasService();
    this.personas=personasService.getPersonas();
  }*/

  constructor(private personasService:PersonasService){}

  ngOnInit(): void {
      //this.personas=
     /* this.personasService.getPersonas().subscribe({
        next: data =>{
          console.log(JSON.stringify(data.personas));
          this.personas=data.personas;
        }
      });
      console.log("Personas:"+this.personas)*/
      this.personasService.getPersonas().subscribe(data=>this.personas = data);
  }

  demo():void{
    this.doctor = "Modificado por el click handle";
  }
  onClick($e){
    console.log($e);
    if($e)
      window.alert("Se presiono el boton");
    else
      window.alert("Se presiono el boton");
  }
}


