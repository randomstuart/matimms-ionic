import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the ChildhoodVaccinePlannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-childhood-vaccine-planner',
  templateUrl: 'childhood-vaccine-planner.html',
})
export class ChildhoodVaccinePlannerPage {

  myData: any;

  constructor(private http:Http, public navCtrl: NavController, public navParams: NavParams,public loadingCtrl:LoadingController) {

      


  }

  ionViewDidLoad() {


    let loader = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: "Please wait..."
    });

    loader.present();


    console.log('ionViewDidLoad ChildhoodVaccinePlannerPage');

    this.http.get("http://matimms.org.uk/wp-json/wp/v2/pages/606").map(res => res.json()).subscribe(data => {

          this.myData=data.content.rendered;    

          console.log(this.myData);
          console.log(data.content.rendered);

          loader.dismiss();
    });
  }

}
