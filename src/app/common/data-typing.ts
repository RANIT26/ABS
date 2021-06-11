export interface PeriodicElement {
  name: string;
  productID: number;
  quantity: number;
  size: string;
  warehouseLocation: string;
}
export interface Company {
  value: number;
  companyName: string;
  viewValue: Divison[];
}
interface Divison {
  bestPrice?: BestPrice[];
  dMart?: DMart[];
}
interface BestPrice {
  oils: string;
  food: string;
}
interface DMart {
  cutlery: string;
}
