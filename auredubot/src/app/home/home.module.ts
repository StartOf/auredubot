import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';
import { InformationsComponentComponent } from './informations-component/informations-component.component';
import { WelcomeMessageComponentComponent } from './welcome-message-component/welcome-message-component.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WelcomeComponentComponent, InformationsComponentComponent, WelcomeMessageComponentComponent]
})
export class HomeModule { }
