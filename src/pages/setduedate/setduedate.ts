import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage} from '../home/home';
import { DatePipe } from '@angular/common'
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


  dueDate : any;
  latest_date : String;
  date:any;

  constructor(private datePipe: DatePipe,public viewCtrl : ViewController,public modCtrl: ModalController, private storage : Storage,public navCtrl: NavController, public navParams: NavParams) {
  
    this.date = new Date();
    this.latest_date = this.datePipe.transform(this.date,"yyyy-MM-dd");
    console.log(this.latest_date);                       
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetduedatePage');

    console.log("cvgsdagsdgas");            

    console.log("Today's date "+this.date);       
  }

  getDueDate(date){   

    //console.log(date);
    this.storage.set("dueDate",date);
    this.navCtrl.push(HomePage);
    
    

  }

}
