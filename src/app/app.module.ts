import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { CalculatorComponent } from './home/calculator/calculator.component';
import { EnfoqueDirective } from './enfoque.directive';
//import { CalcComponent } from './cal/calc.component'
@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    EnfoqueDirective
  
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
