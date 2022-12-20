import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  apiUrl = 'https://restcountries.com/v3.1/all';

  dataSharing$ = new Subject();

  constructor(private http: HttpClient) {}

  getCountries() {
    return this.http.get(this.apiUrl);
  }
}
