import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { HttpClientModule } from '@angular/common/http';
import { MainAnimationComponent } from 'src/app/shared/main-animation/main-animation.component';
import { MainSectionComponent } from 'src/app/shared/main-section/main-section.component';
import { BtnPrimaryComponent } from '../../shared/btn-primary/btn-primary.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    BtnPrimaryComponent,
    MainSectionComponent,
    MainAnimationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    HomeComponent
  ]
})
export class HomeModule{ }
