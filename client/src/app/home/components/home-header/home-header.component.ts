import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sc-home-hero-section',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {

  isArrowClicked: boolean;

  constructor() { }

  ngOnInit() {
  }

  handleArrowClick() {
    this.isArrowClicked = true;
  }

}
