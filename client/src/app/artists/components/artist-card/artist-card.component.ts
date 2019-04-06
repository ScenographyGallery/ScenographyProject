import { Component, OnInit, Input } from '@angular/core';
import { Artist } from 'src/app/models/artist';

@Component({
  selector: 'sc-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.scss']
})
export class ArtistCardComponent implements OnInit {
  @Input() artist: Artist;

  constructor() { }

  ngOnInit() {
  }

}
