import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface contactForm{
  
    "name": string,
    "checkAdult": boolean,
    "department": string,
    "coment": string
  
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  model={
  
    name: "",
    checkAdult: false,
    department: "",
    coment: ""
  
}
  ngOnInit(): void {
      }

  onSubmit(form:NgForm):void{
      console.log('Form values', form);
      }

    }
