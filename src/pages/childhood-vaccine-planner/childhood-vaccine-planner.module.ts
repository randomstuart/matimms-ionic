import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChildhoodVaccinePlannerPage } from './childhood-vaccine-planner';

@NgModule({
  declarations: [
    ChildhoodVaccinePlannerPage,
  ],
  imports: [
    IonicPageModule.forChild(ChildhoodVaccinePlannerPage),
  ],
})
export class ChildhoodVaccinePlannerPageModule {}
