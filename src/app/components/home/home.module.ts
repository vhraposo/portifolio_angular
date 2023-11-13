import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { BtnPrimaryComponent } from '../../shared/btn-primary/btn-primary.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    BtnPrimaryComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [],
  exports: [
    HomeComponent
  ]
})
export class HomeModule{ }
