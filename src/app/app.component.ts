import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';
import { DuedatePage } from '../pages/duedate/duedate';
import { VaccinationSchedulePage } from '../pages/vaccination-schedule/vaccination-schedule';
import {AboutUsPage} from '../pages/about-us/about-us';
import { FurtherReadingPage } from '../pages/further-reading/further-reading';
import { ChildhoodVaccinePlannerPage } from '../pages/childhood-vaccine-planner/childhood-vaccine-planner';
import { MyjourneyPage } from '../pages/myjourney/myjourney';
import { DataProvider } from '../providers/data/data';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  selectedTheme :String;
  rootPage: any = HomePage;         
    
  pages: Array<{title: string, component: any}>;
 
  constructor(private dataprovider : DataProvider, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'My journey', component: MyjourneyPage    },
      { title: 'My vaccination schedule', component: VaccinationSchedulePage },
      { title: 'Change due date', component: DuedatePage },
      { title: 'Childhood Vaccine Planner', component: ChildhoodVaccinePlannerPage },
      { title: 'Further Reading', component:FurtherReadingPage },
      { title: 'About us', component: AboutUsPage   }
    ];

         
  }

  initializeApp() {

    this.dataprovider.getActiveTheme().subscribe(val => this.selectedTheme = val);

    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

declare global {
 const foo: string ;
}
