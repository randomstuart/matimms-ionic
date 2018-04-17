import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DuedatePage    } from '../pages/duedate/duedate';
import { VaccinationSchedulePage } from '../pages/vaccination-schedule/vaccination-schedule';
import {AboutUsPage} from '../pages/about-us/about-us';
import { FurtherReadingPage } from '../pages/further-reading/further-reading';
import { ChildhoodVaccinePlannerPage } from '../pages/childhood-vaccine-planner/childhood-vaccine-planner';

import {HttpModule   } from '@angular/http';





import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    ListPage,
    DuedatePage,
    VaccinationSchedulePage,
    AboutUsPage,
    FurtherReadingPage,
    ChildhoodVaccinePlannerPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DuedatePage,
    VaccinationSchedulePage,
    AboutUsPage,
    FurtherReadingPage,
    ChildhoodVaccinePlannerPage          
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
   
  ]
})
export class AppModule {}