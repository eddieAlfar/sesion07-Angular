import { Directive ,ElementRef,Renderer2,OnInit} from '@angular/core';

@Directive({
  selector: '[appEnfoque]'
})
export class EnfoqueDirective implements OnInit{

  constructor(private elementRef: ElementRef, private rendered2:Renderer2) {
    
   }

  ngOnInit(): void {
    const element=this.elementRef.nativeElement
    element.focus();
    this.rendered2.setStyle(element,'background-color','blue')
    
   }
}
