import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage} from '../home/home';
/**
 * Generated class for the SetduedatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setduedate',
  templateUrl: 'setduedate.html',
})
export class SetduedatePage {

  constructor(public viewCtrl : ViewController,public modCtrl: ModalController, private storage : Storage,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetduedatePage');
  }

  getDueDate(date){   

    //console.log(date);
    this.storage.set("dueDate",date);
    this.navCtrl.push(HomePage);
    

  }

}
