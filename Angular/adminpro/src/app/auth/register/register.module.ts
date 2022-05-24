import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {RegisterComponent } from './register.component';



@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    RegisterComponent
  ],
  providers:[],
  bootstrap: [RegisterComponent]
})
export class RegisterModule { }
