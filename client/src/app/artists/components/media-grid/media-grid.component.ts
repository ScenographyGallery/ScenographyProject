import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sc-media-grid',
  templateUrl: './media-grid.component.html',
  styleUrls: ['./media-grid.component.scss']
})
export class MediaGridComponent implements OnInit {
  @Input() gridItems: { name: string, image: string }[] = [];

  constructor() { }

  ngOnInit() {
  }

}
