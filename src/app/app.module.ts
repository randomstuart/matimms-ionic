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
import { SetduedatePage } from '../pages/setduedate/setduedate';
import { MyjourneyPage } from '../pages/myjourney/myjourney';
import { PostsPage } from '../pages/posts/posts';
import { PostDetailPage} from '../pages/post-detail/post-detail';
import { HttpModule   } from '@angular/http';
import { DatePipe } from '@angular/common'

import { IonicStorageModule } from '@ionic/storage';

import { HttpClient } from '@angular/common/http';
import { LocalNotifications } from '@ionic-native/local-notifications';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../providers/data/data';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    ListPage,
    DuedatePage,
    VaccinationSchedulePage,
    AboutUsPage,
    FurtherReadingPage,
    ChildhoodVaccinePlannerPage,
    SetduedatePage,
    MyjourneyPage,
    PostsPage,
    PostDetailPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
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
    ChildhoodVaccinePlannerPage,
    SetduedatePage  ,
    MyjourneyPage ,
    PostsPage ,
    PostDetailPage       
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,     
    HttpClient, 
    DatePipe,
    LocalNotifications                                       
  ]
})
export class AppModule {}
