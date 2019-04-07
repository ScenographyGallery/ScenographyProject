import { Project } from 'src/app/models/project';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sc-media-grid',
  templateUrl: './media-grid.component.html',
  styleUrls: ['./media-grid.component.scss']
})
export class MediaGridComponent implements OnInit {
  @Input() gridItems: Project[] = [];

  constructor() { }

  ngOnInit() {
  }

}
