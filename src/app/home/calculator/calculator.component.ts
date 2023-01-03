import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  num1:number=0;
  num2:number=0;
  operacion: string = 'defecto';
  resultado:number=0;

 
  onSumar():void{
    this.resultado=this.num1+this.num2;
  }
  onRestar():void{
    this.resultado=this.num2-this.num1;
  }
  onMulti():void{
    this.resultado=this.num1*this.num2;
  }
  onDiv():void{
    this.resultado=this.num1/this.num2;
  }
 
  calcular(): number {
    if (this.operacion === 'sumar') {
      this.onSumar();
      return this.resultado;
    } else if (this.operacion === 'restar') {
      this.onRestar();
      return this.resultado;
    } else if (this.operacion === 'multiplicar') {
      this.onMulti();
      return this.resultado;
    } else if (this.operacion === 'dividir') {
      this.onDiv();
      return this.resultado;
    }

    return 0;
  }
}
