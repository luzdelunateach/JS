import { importExpr } from '@angular/compiler/src/output/output_ast';
import{ Component, OnInit } from '@angular/core';

@Component({
  selector:'app-tercero',
  template: `<h1>Este es el componente ejemplo!!! {{texto}}</h1>`,
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class Tercero{
 texto = "xyz";
}

@Component({
  selector:'app-cuarto',
  template: `<h1>Este es el componente cuarto!!! {{texto}}</h1>`,
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class Cuarto implements OnInit{
  texto = "xyz";
  ngOnInit(): void {

  }

}
