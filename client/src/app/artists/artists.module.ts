import { ArtistsRoutingModule } from './artists-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { ArtistsComponent } from './components/artists/artists.component';
import { ArtistCardComponent } from './components/artist-card/artist-card.component';
import { ArtistProfileComponent } from './components/artist-profile/artist-profile.component';
import { FiltersBarComponent } from './components/filters-bar/filters-bar.component';

@NgModule({
  declarations: [
    ArtistsComponent,
    ArtistCardComponent,
    ArtistProfileComponent,
    FiltersBarComponent
  ],
  imports: [
    CommonModule,
    ArtistsRoutingModule,
  ]
})
export class ArtistsModule { }
