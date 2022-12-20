import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent implements OnInit {
  countryName: any = '';
  country: any;
  mode: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    //this.mode = true;
    this.countryName = this.activatedRoute.snapshot.params['name'];
    this.commonService
      .getCountries()
      .subscribe((data) => this.findCountry(data));
    this.commonService.dataSharing$.subscribe((data) => (this.mode = data));
    console.log('country', this.mode);
  }

  findCountry(name: any) {
    this.country = name.find(
      (x: any) => x.name.common.toLowerCase() === this.countryName.toLowerCase()
    );
  }
}
