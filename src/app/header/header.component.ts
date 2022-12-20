import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private commonService: CommonService) {}

  mode: Boolean = true;

  ngOnInit(): void {
    this.mode = false;
  }

  modeChange() {
    this.mode = !this.mode;
    this.commonService.dataSharing$.next(this.mode);
    console.log('header', this.mode);
  }
}
