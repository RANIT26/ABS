import {
  Component,
  OnInit,
  ViewEncapsulation,
  SimpleChanges,
} from '@angular/core';
import { Company } from '../data-typing';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  divisionObj: Array<any> = [];
  companySelect: any = '';
  divisionSelect: any = '';

  constructor() {}

  obj1: Company[] = [
    {
      value: 101,
      companyName: 'Best Price',
      division: [
        {
          divisionName: 'Oil',
          divisionId: 10101
        }, 
        {
          divisionName: 'Packed Food',
          divisionId: 10102
        }
      ],
    },
    {
      value: 102,
      companyName: 'D-Mart',
      division: [
        {
          divisionName: 'Cutlery',
          divisionId: 10201
        },
      ],
    },
  ];

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.companySelect);
    console.log(changes);
    console.log(this.divisionSelect);
    // NOT WORKING
  }

  ngOnInit() {
    console.log(this.obj1);
  }

  selectCompany(value: any) {
    console.log(value);
    this.obj1.filter(x => {
      if(x.value==value) {
        this.divisionObj= x.division;
      }
    });
  }
  
}
