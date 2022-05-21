import { compileNgModuleFromRender2 } from '@angular/compiler/src/render3/r3_module_compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-matematico',
  templateUrl: './matematico.component.html',
  styleUrls: ['./matematico.component.sass']
})
export class MatematicoComponent implements OnInit {
  @Input() numero1:number=0;

  @Input() numero2:number=0;

  @Input() operador:string="";

  ///salida
  @Output() buttonClicked = new EventEmitter<boolean>();

  public total:number = 0;

  constructor() { }

  ngOnInit(): void {

  }


  ngOnChanges(changes) {
    const num1 = changes['numero1'];
    const num2 = changes['numero2'];
    const oldValue = num1.previousValue;
    const oldValue2 = num2.previousValue;
    const newValue = num1.currentValue;
    const newValue2 = num2.currentValue;
    if(newValue<0){
      this.numero1=0;
    }
    if(newValue2<0){
      this.numero2=0;
    }
    console.log('Numero1 cambio de'+oldValue+" a "+newValue);
    console.log('Numero2 cambio de'+oldValue2+" a "+newValue2);
    this.ejecutarOperacion();
  }

  emitirEvento(){
    this.ejecutarOperacion();
    this.buttonClicked.emit(true);
  }

  ejecutarOperacion():void{
    if(this.operador==="+"){
      this.total=this.numero1+this.numero2;
    }
    if(this.operador==="-"){
      this.total=this.numero1-this.numero2;
    }
    if(this.operador==="*"){
      this.total=this.numero1*this.numero2;
    }
    if(this.operador==="/"){
      this.total=this.numero1/this.numero2;
    }
  }


  /*function calcularTotal(op:string):void {

  }*/
}
