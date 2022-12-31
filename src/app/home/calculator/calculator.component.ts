import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  num1:number=0;
  num2:number=0;
  resultado:number=0;

  onSumar():void{
    this.resultado=this.num1+this.num2;
  }


}
