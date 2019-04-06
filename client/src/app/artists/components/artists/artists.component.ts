import { Artist } from './../../../models/artist';
import { ArtistDataService } from './../../services/artist-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sc-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {
  artists: Artist[] = [];

  constructor(
    private artistsData: ArtistDataService,
  ) { }

  ngOnInit() {
    this.artistsData.getArtists().subscribe((artists) => {
      this.artists = artists;
    })
  }
}
