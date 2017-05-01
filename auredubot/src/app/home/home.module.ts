import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsCarouselComponent } from './comments-carousel/comments-carousel.component';
import { PicturesCarouselComponent } from './pictures-carousel/pictures-carousel.component';
import { HomeMainComponent } from './home-main/home-main.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [CommentsCarouselComponent, PicturesCarouselComponent, HomeMainComponent],
  exports: [HomeMainComponent]
})
export class HomeModule { }
