import { Injectable } from '@angular/core';
import { Vuelo } from '../Interface/vuelo';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class VuelosService {
  constructor(private http: HttpClient) { }
  /*public vuelos:Vuelo[]=[
    {numeroVuelo:1,fecha:"10/10/2022",horario:"12:30",origen:"Ciudad de México",destino:"Chicago, Illinois"}
  ];

  setVuelos(vuelo:Vuelo){
    this.vuelos.push(vuelo);
  }
  getVuelos():Vuelo[]{
    return this.vuelos;
  }*/
  setVuelos(vuelo:Vuelo):Observable<Vuelo>{
    return this.http.post<Vuelo>('http://localhost:3005/vuelos',vuelo);
  }

  getVuelos(): Observable<any[]>{
    return this.http.get<any[]>('http://localhost:3005/vuelos').pipe(
      catchError((error: HttpErrorResponse)=>{
        console.log(`Ocurrio un error ${error}`);
        return throwError(error);
      })
    );
  }
}
