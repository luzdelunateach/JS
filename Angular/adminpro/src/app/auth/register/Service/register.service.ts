import { Injectable } from '@angular/core';
import { Register } from '../Interface/register';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient ) { }

  setRegister(register:Register):Observable<Register>{
    return this.http.post<Register>('http://localhost:3005/user',register);
  }
}
