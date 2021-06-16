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
  division: Divison[];
}
interface Divison {
  divisionId: number;
  divisionName: string;
}
