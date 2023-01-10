import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface contactForm{
  
    "name": string,
    "dni": number,
    "estado": string
  
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent{

  model={
  
    name: "",
    dni: "",
    estado: ""
  
}
valores = '';

 
  onSubmit(values:any){
      console.log('Form values', values);
      this.valores = values;
      }

    }
