import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'artists', loadChildren: './artists/artists.module#ArtistsModule' },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'about', loadChildren: './about/about.module#AboutModule' },
  { path: 'projects', loadChildren: './projects/projects.module#ProjectsModule' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
