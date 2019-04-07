import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Artist } from 'src/app/models/artist';

@Component({
  selector: 'sc-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.scss']
})
export class ArtistCardComponent implements OnInit {
  @Input() artist: Artist;

  isBeingHovered = false;

  @HostListener('mouseover')
  onMouseOver() {
    this.isBeingHovered = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.isBeingHovered = false;
  }

  constructor() { }

  ngOnInit() {
  }

}
