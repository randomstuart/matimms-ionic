import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage} from '../home/home';
import { DatePipe } from '@angular/common'

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

     myDate : String; 
 // latest_date : any;
 // date: any;
  

  constructor(private datePipe: DatePipe, private storage : Storage,  public navCtrl: NavController, public navParams: NavParams) {

     // get current date
     //this.date = new Date();
   
   //  this.latest_date = this.datePipe.transform(this.date,"yyyy-MM-dd");
   //  console.log(this.latest_date);  
   //  this.myDate=this.latest_date; 
      
  
  }         

  ionViewDidLoad() {
    console.log('ionViewDidLoad DuedatePage');

    this.storage.get("dueDate").then(date=>{

        console.log("Due date from storage"+date);
 
        this.myDate = date;
  
        console.log("Mydate"+this.myDate);   
    });
  }

  getDueDate(date){
    
    console.log(date);
    this.storage.set("dueDate",date);
    this.navCtrl.push(HomePage);
  }    

  


}
