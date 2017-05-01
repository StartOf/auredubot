import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsCarouselComponent } from './comments-carousel/comments-carousel.component';
import { PicturesCarouselComponent } from './pictures-carousel/pictures-carousel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CommentsCarouselComponent, PicturesCarouselComponent]
})
export class HomeModule { }
