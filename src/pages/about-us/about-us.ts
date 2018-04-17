import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the AboutUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about-us',
  templateUrl: 'about-us.html',
})
export class AboutUsPage {

  myData: String;

  constructor(private http:Http,public navCtrl: NavController, public navParams: NavParams,public loadingCtrl:LoadingController) {
  }
  

  
  

  ionViewDidLoad() {

    let loader = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: "Please wait..."
    });

    loader.present(); 


    console.log('ionViewDidLoad AboutUsPage');

    

    this.http.get("http://matimms.org.uk/wp-json/wp/v2/pages/683")
    .map(res => res.json())
    .subscribe(data => {
          

      this.myData = data.content.rendered;

      loader.dismiss();

    });

   
   
     

  }

  

}
