import { Component, OnInit } from '@angular/core';
import { PeriodicElement } from '../../common/data-typing';
@Component({
  selector: 'app-content-landing-page',
  templateUrl: './content-landing-page.component.html',
  styleUrls: ['./content-landing-page.component.css']
})
export class ContentLandingPageComponent implements OnInit {

  ELEMENT_DATA: PeriodicElement[] = [
    {productID: 101, name: 'Amul Buterscotch Ice-cream', size:'100ML',quantity: 30, warehouseLocation: 'Indore'},
    {productID: 102, name: 'Helium', quantity: 4.0026, size:'100ML', warehouseLocation: 'He'},
    {productID: 103, name: 'Lithium', quantity: 6.941, size:'100ML', warehouseLocation: 'Li'},
    {productID: 104, name: 'Beryllium', quantity: 9.0122, size:'100ML', warehouseLocation: 'Be'},
    {productID: 105, name: 'Boron', quantity: 10.811, size:'100ML', warehouseLocation: 'B'},
    {productID: 106, name: 'Carbon', quantity: 12.0107, size:'100ML', warehouseLocation: 'C'},
    {productID: 107, name: 'Nitrogen', quantity: 14.0067, size:'100ML', warehouseLocation: 'N'},
    {productID: 108, name: 'Oxygen', quantity: 15.9994, size:'100ML', warehouseLocation: 'O'},
    {productID: 109, name: 'Fluorine', quantity: 18.9984, size:'100ML', warehouseLocation: 'F'},
    {productID: 110, name: 'Neon', quantity: 20.1797, size:'100ML', warehouseLocation: 'Ne'},
  ];

  ngOnInit() { }

  displayedColumns: string[] = ['index','productID' ,'name', 'quantity', 'size','warehouseLocation'];
  dataSource = this.ELEMENT_DATA;
  
}
