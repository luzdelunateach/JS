import { Injectable } from '@angular/core';
import { Persona } from './shared/persona';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private http: HttpClient) { }



  /*getPersonas():any{

      const request$ = new Observable(observer => {
      const url="http://localhost:3005/personas";
      const request = new XMLHttpRequest();
      request.addEventListener("load", () => {
        if (request.readyState === 4 && request.status === 200) {
          observer.next(JSON.parse(request.responseText));
          observer.complete();
        } else {
          observer.error('An error has occured');
        }
      });
      request.open("GET", url);
      request.send();
    });

    //console.log(request$);
    let personas:Persona[]=[];
    personas.push
    /*let personas:Persona[] = [
      {id:1,nombre:"Luna",apellido:"Gutierrez", ciudad:"Morelia", moneda:10000},
      {id:2,nombre:"Pedro",apellido:"Vazquez", ciudad:"Huandacareo", moneda:12000},
      {id:3,nombre:"Pao",apellido:"Gonzalez", ciudad:"Morelia", moneda:15000},
      {id:4,nombre:"Havy",apellido:"Aguilar", ciudad:"Zitácuaro", moneda:3000},
      {id:5,nombre:"Cuit",apellido:"Rodriguez", ciudad:"La Ruana", moneda:2000}
    ];
    return request$;

  }*/
  getPersonas(): Observable<any[]>{
    return this.http.get<any[]>('http://localhost:3005/personas');
  }
}
