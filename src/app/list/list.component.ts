import { ChangeDetectionStrategy, Component} from '@angular/core';




@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  
})
export class ListComponent {
  name:string="";
  currencyCode:string="";
  inputValue:string='';
  

  constructor() { }

  ngOnInit(): void {
  }

}