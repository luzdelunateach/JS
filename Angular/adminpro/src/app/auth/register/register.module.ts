import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {RegisterComponent } from './register.component';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports:[
    RegisterComponent
  ],
  providers:[],
  bootstrap: [RegisterComponent]
})
export class RegisterModule { }
