import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistDataService } from '../../services/artist-data.service';
import { Artist } from 'src/app/models/artist';

@Component({
  selector: 'sc-artist-profile',
  templateUrl: './artist-profile.component.html',
  styleUrls: ['./artist-profile.component.scss']
})
export class ArtistProfileComponent implements OnInit {
  artistId: string;
  artist: Artist;

  constructor(
    private route: ActivatedRoute,
    private artistsData: ArtistDataService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.artistId = params.get("id");
      this.getArtist();
    })
  }

  getArtist(): void {
    this.artistsData.getArtist(this.artistId).subscribe((artist) => {
      this.artist = artist;
    })
  }
}
