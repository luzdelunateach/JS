import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UtileriasModule } from './utilerias/utilerias.module';
import { SharedModule } from './shared/shared.module';
import { AerolineaModule } from './aerolinea/aerolinea.module';

import { ComponentOne } from './app.component';
import { Ejemplo } from './app.ejemplo';
import { Cuarto, Tercero } from './app.tercero';
import { QuintoComponent } from './quinto/quinto.component';
import { CounterComponent } from './counter/counter.component';
import { InfoPersonaComponent } from './info-persona/info-persona.component';
import { MatematicoComponent } from './matematico/matematico.component';
import { DetallepersonasComponent} from './detallepersonas/detallepersonas.component';

import { RouterModule, Routes} from '@angular/router';
import { DemoutileriasComponent } from './utilerias/demoutilerias/demoutilerias.component';
import { VuelosComponent } from './aerolinea/vuelos/vuelos.component';
import { PersonasComponent } from './personas/personas.component';
import { IndexComponent } from './index/index.component';
const routes:Routes=[
  {path: 'demoutilerias',component: DemoutileriasComponent},
  {path: 'matematico',component:MatematicoComponent},
  {path: 'aerolinea/vuelos', component:VuelosComponent},
  {path: 'counter', component:CounterComponent},
  {path: 'personas', component:PersonasComponent},
  {path: 'personas/detallepersonas/:id', component:DetallepersonasComponent},
  {path: 'personas/detallepersonas/:id/:param2', component:DetallepersonasComponent},
  {path: 'index', component: IndexComponent},
  {path: '**',redirectTo: 'index'}
];

@NgModule({
  declarations: [
    ComponentOne,
    Ejemplo,
    Tercero,
    Cuarto,
    QuintoComponent,
    CounterComponent,
    InfoPersonaComponent,
    MatematicoComponent,
    PersonasComponent,
    IndexComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    UtileriasModule,
    SharedModule,
    FormsModule,
    AerolineaModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [ComponentOne]
})
export class ModuleOne { }
