import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  mode: any;
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.commonService.dataSharing$.subscribe((data) => (this.mode = data));
    console.log('search', this.mode);
  }

  @Output() fromChildToParent1 = new EventEmitter();

  search: string = '';

  getSearch(e: any) {
    this.fromChildToParent1.emit(e.target.value);
  }
}
