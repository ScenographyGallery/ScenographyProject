import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sc-filters-bar',
  templateUrl: './filters-bar.component.html',
  styleUrls: ['./filters-bar.component.scss']
})
export class FiltersBarComponent implements OnInit {
  isCustomSelected: boolean;
  isSceneSelected: boolean;
  isLightSelected: boolean;

  constructor() { }

  ngOnInit() {
  }

  handleCustomSelect() {
    this.isCustomSelected = !this.isCustomSelected;
  }

  handleSceneSelect() {
    this.isSceneSelected = !this.isSceneSelected;
  }

  handleLightSelect() {
    this.isLightSelected = !this.isLightSelected;
  }

}
