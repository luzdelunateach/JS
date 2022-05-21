import{ Component } from '@angular/core'

@Component({
  selector:'app-ejemplo',
  template: `<h1>Este es el componente ejemplo!!! {{texto}}</h1>
  <app-cuarto></app-cuarto>`,
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class Ejemplo{
 texto = "Hola";
}
