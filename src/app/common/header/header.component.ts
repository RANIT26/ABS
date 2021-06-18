import {
  Component,
  OnInit,
  ViewEncapsulation,
  SimpleChanges,
} from '@angular/core';
import { Company } from '../data-typing';
import { GlobalServicesService } from 'src/app/services/global-services.service';
// import companyDivison from '../../../assets/jsons/companyDivison.json'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  divisionObj: Array<any> = [];
  obj1: Company[] = [];
  companySelect: any = '';
  divisionSelect: any = '';
  // config: Config | undefined;

  constructor(private service: GlobalServicesService) {}

  // obj1: Company[] = [
  //   {
  //     value: 101,
  //     companyName: 'Best Price',
  //     division: [
  //       {
  //         divisionName: 'Oil',
  //         divisionId: 10101,
  //       },
  //       {
  //         divisionName: 'Packed Food',
  //         divisionId: 10102,
  //       },
  //     ],
  //   },
  //   {
  //     value: 102,
  //     companyName: 'D-Mart',
  //     division: [
  //       {
  //         divisionName: 'Cutlery',
  //         divisionId: 10201,
  //       },
  //     ],
  //   },
  // ];

  ngOnChanges(changes: SimpleChanges) {
    // works for parent to child changes
  }

  ngOnInit() {
    this.getCompanyDivList();
  }
  getCompanyDivList() {
    this.service.getHeaderLists().subscribe((data) => {
      this.obj1 = data.body;
      console.log(this.obj1);
    });
  }
  selectCompany(value: any) {
    console.log(value);
    this.obj1.filter((x) => {
      if (x.value == value) {
        this.divisionObj = x.division;
      }
    });
  }
  selectDivison(value: any) {
    console.log(value);
  }

}
