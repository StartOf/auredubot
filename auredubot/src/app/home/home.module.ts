import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';
import { InformationsComponentComponent } from './informations-component/informations-component.component';
import { WelcomeMessageComponentComponent } from './welcome-message-component/welcome-message-component.component';

import { CommentsCarouselComponent } from './comments-carousel/comments-carousel.component';
import { PicturesCarouselComponent } from './pictures-carousel/pictures-carousel.component';
import { HomeMainComponent } from './home-main/home-main.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [WelcomeComponentComponent, InformationsComponentComponent, WelcomeMessageComponentComponent,CommentsCarouselComponent, PicturesCarouselComponent, HomeMainComponent],
  exports: [HomeMainComponent]
})
export class HomeModule { }
