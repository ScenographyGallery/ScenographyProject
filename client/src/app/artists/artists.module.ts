import { ArtistsRoutingModule } from './artists-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { ArtistsComponent } from './components/artists/artists.component';

@NgModule({
  declarations: [
    ArtistsComponent
  ],
  imports: [
    CommonModule,
    ArtistsRoutingModule,
  ]
})
export class ArtistsModule { }
