import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home.component';
import {HomeHeaderComponent} from './components/home-header/home-header.component';
import {HomeAuthComponent} from './components/auth/home-auth.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeHeaderComponent,
    HomeAuthComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule {}
