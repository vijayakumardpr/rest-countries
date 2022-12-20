import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
})
export class CountriesComponent implements OnInit {
  getCountry$: any;
  mode: any;

  constructor(
    private http: HttpClient,
    private commonService: CommonService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.getMethod();

    // this.commonService
    //   .getCountries()
    //   .subscribe((data) => (this.getCountry$ = this.sortCountry(data)));

    this.getCountry$ = this.commonService.getCountries();

    this.commonService.dataSharing$.subscribe((data) => (this.mode = data));
    console.log('countries', this.mode);
  }

  // sortCountry(country: any) {
  //   return country.slice(0, 10);
  // }
  // getMethod() {
  //   this.http
  //     .get('https://restcountries.com/v3.1/all')
  //     .subscribe(
  //       (data) => (
  //         (this.getCountry = data), console.log(this.getCountry.slice(0, 10))
  //       )
  //     );
  // }

  selectedCountry(item: any) {
    console.log(item);
  }

  value: string = '';

  fromChild(data: any) {
    this.value = data;
    console.log(this.value);
  }

  filterValue: string = '';

  getFilterValue(data: any) {
    this.filterValue = data;
    console.log(this.filterValue);
  }
}
