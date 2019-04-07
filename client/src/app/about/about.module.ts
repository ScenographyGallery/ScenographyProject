import { AboutRoutingModule } from './about-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';

@NgModule({
  declarations: [AboutComponent, ContactsComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
  ]
})
export class AboutModule { }
