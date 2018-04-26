import { Component } from '@angular/core';
import { NavController ,ModalController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SetduedatePage} from '../setduedate/setduedate';
import { MyjourneyPage } from '../myjourney/myjourney'; 


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  button_text : String;
  date_value : number=0;
  constructor(public storage: Storage, public navCtrl: NavController,public modalCtrl:ModalController) {
    
    console.log("xxxx");
    
      storage.get("dueDate").then(val=>{

          console.log(val);
          
          if(val == null)
          {
            this.button_text="Register";
          }
          else{
            this.button_text="Start Your Journey";
            this.date_value=1;
          }    

         
      });

  }

  ionViewDidLoad() {

      console.log("homePage");
     

  }


  changePage(){

      if(this.button_text=="Register")
      {   
            /*let modal=this.modalCtrl.create(SetduedatePage);
            modal.present();*/

            this.navCtrl.push(SetduedatePage);
      }
      else{
        this.navCtrl.push(MyjourneyPage);
      }
  }

  willEnter() {
    console.log('ionViewDidLoad Home Page');
  }
  

}
