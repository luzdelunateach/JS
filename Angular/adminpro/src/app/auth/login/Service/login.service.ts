import { Injectable } from '@angular/core';
import { Login } from '../interface/login';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getUsers():Observable<any[]>{
    return this.http.get<any[]>('http://localhost:3005/user').pipe(
      catchError((error: HttpErrorResponse)=>{
        console.log(`Ocurrio un error ${error}`);
        return throwError(error);
      })
    );
  }
}
