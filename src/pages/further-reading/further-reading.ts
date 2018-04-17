import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the FurtherReadingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-further-reading',
  templateUrl: 'further-reading.html',
})
export class FurtherReadingPage {

  myData:any [] ;



  constructor(private http:Http, public navCtrl: NavController, public navParams: NavParams, public loadingCtrl:LoadingController) {
  }

  ionViewDidLoad() {
    
    let loader = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: "Please wait..."
    });

    loader.present();


    this.http.get("http://matimms.org.uk/wp-json/wp/v2/pages/51").map(res => res.json())
    .subscribe(data => { this.myData = data.meta_further_reading_links;
      console.log(data.meta_further_reading_links);

      loader.dismiss();
    });

  
  
  }

 

}
