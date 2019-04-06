import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';

const PUBLIC_API = [
  HeaderComponent,
]

@NgModule({
  declarations: [
    ...PUBLIC_API,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ...PUBLIC_API,
  ]
})
export class SharedModule { }
