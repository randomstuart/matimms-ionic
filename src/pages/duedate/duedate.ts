import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage} from '../home/home';

/**
 * Generated class for the DuedatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-duedate',
  templateUrl: 'duedate.html',
})
export class DuedatePage {

  dueDate : any;

  constructor(private storage : Storage,  public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DuedatePage');

    this.storage.get("dueDate").then(date=>{

        this.dueDate = date;
    });
  }

  getDueDate(date){

    console.log(date);
    this.storage.set("dueDate",date);
    this.navCtrl.push(HomePage);
  }



}
