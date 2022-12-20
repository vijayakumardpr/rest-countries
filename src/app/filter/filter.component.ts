import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  mode: any;
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.commonService.dataSharing$.subscribe((data) => (this.mode = data));
    console.log('filter', this.mode);
  }

  @Output() fromChildToParent2 = new EventEmitter();

  selectedRegion: string = '';

  continents: any = [
    // { region: 'Filter by Region' },
    { region: 'Africa' },
    { region: 'Americas' },
    { region: 'Asia' },
    { region: 'Europe' },
    { region: 'Oceania' },
  ];

  onFoodSelection2() {
    this.fromChildToParent2.emit(this.selectedRegion);
  }
}
