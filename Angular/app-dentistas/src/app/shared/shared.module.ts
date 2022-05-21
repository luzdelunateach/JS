import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortPipe } from './sort.pipe';
import { CopyrightDirective } from './copyright.directive';
import { NumericDirective } from './numeric.directive';
import { PermissionDirective } from './permission.directive';


@NgModule({
  declarations: [
    SortPipe,
    CopyrightDirective,
    NumericDirective,
    PermissionDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SortPipe,
    CopyrightDirective,
    NumericDirective,
    PermissionDirective
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
