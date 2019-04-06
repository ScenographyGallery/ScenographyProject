import { ArtistProfileComponent } from './components/artist-profile/artist-profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { ArtistsComponent } from './components/artists/artists.component';

const routes: Routes = [
  { path: '', component: ArtistsComponent },
  { path: ':id', component: ArtistProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistsRoutingModule { }