import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { CalculatorComponent } from './home/calculator/calculator.component';
import { EnfoqueDirective } from './enfoque.directive';
import { ContactComponent } from './contact/contact.component';
import { ContactReactiveComponent } from './contact-reactive/contact-reactive.component';
import { ListComponent } from './list/list.component';

import { YPipe } from './y.pipe';
import { HijoComponent } from './hijo/hijo.component';

//import { CalcComponent } from './cal/calc.component'
@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    EnfoqueDirective,
    ContactComponent,
    ContactReactiveComponent,
    ListComponent,

    YPipe,
     HijoComponent,
     
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
