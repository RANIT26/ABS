import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalServicesService {
  companyDivison = 'assets/jsons/companyDivison.json';

  constructor(private http: HttpClient) {}

  getHeaderLists(): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.companyDivison, { observe: 'response' });
  }
}
// export interface Config {
//   Url: string;
//   file: string;
//   date: any;
// }
