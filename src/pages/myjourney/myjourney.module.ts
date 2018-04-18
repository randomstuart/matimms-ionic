import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyjourneyPage } from './myjourney';

@NgModule({
  declarations: [
    MyjourneyPage,
  ],
  imports: [
    IonicPageModule.forChild(MyjourneyPage),
  ],
})
export class MyjourneyPageModule {}
