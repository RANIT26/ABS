import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Company } from '../data-typing';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  // company: Company[] = [];
  constructor() {}

  obj1: Company[] = [
    {
      value: 101,
      companyName: 'Best Price',
      viewValue: [
        {
          bestPrice: [
            {
              oils: 'Fortune',
              food: 'Haldiram',
            },
          ],
        },
      ],
    },
    {
      value: 102,
      companyName: 'D-Mart',
      viewValue: [{
        dMart: [{
          cutlery: 'Borosil'
        }]
      }]
    }
  ];
  
  ngOnInit() {
    console.log(this.obj1);
    let y= this.obj1.forEach(x => {
      console.log(x.value);
    });
    
  }
  // {value: 102, viewValue: 'D-Mart'},
  //   {value: 103, viewValue: 'Reliance Fresh'},
  //   {value: 105, viewValue: 'Walmart'},
}
