import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from "moment";
import { Storage } from '@ionic/storage';
import { LocalNotifications } from '@ionic-native/local-notifications';
/**
 * Generated class for the VaccinationSchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vaccination-schedule',
  templateUrl: 'vaccination-schedule.html',
})
export class VaccinationSchedulePage {

  dueDate: any;
  eight_week: any;
  twelve_week : any;
  sixteen_week : any;
  one_year : any;
  two_year : any;  
  twelve_years : any;
  fourteen_years : any;
  three_year_four_months : any;

  event_label_8wk :String = "Add to calendar";               
  event_label_12wk  :String = "Add to calendar";    
  event_label_16wk :String = "Add to calendar";       
  event_label_1yr  :String = "Add to calendar";        
  event_label_2yr  :String = "Add to calendar"; 
  event_label_12yr  :String = "Add to calendar";      
  event_label_14yr  :String = "Add to calendar";                 
  event_label_3yr4mn  :String = "Add to calendar";  
  
  event_img_8wk : String = "assets/imgs/calendar-icon-green.png";
  event_img_12wk : String = "assets/imgs/calendar-icon-green.png";
  event_img_16wk : String = "assets/imgs/calendar-icon-green.png";         
  event_img_1yr : String = "assets/imgs/calendar-icon-green.png";
  event_img_2yr : String = "assets/imgs/calendar-icon-green.png";     
  event_img_12yr : String = "assets/imgs/calendar-icon-green.png";  
  event_img_14yr : String = "assets/imgs/calendar-icon-green.png";          
  event_img_3yr4mn : String = "assets/imgs/calendar-icon-green.png";       

  constructor(private localNotifications: LocalNotifications,public storage: Storage,public navCtrl: NavController, public navParams: NavParams) {

      //get Due Date from Storage
      this.storage.get("dueDate").then(date=>{

          this.dueDate = date;

          console.log("Due date is "+this.dueDate);
          this.generateVaccinationSchedule(this.dueDate);    
         
      });

      this.checkforExistingEvents();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VaccinationSchedulePage');
  }

  //calculate the vaccination perioids
  generateVaccinationSchedule(date)
  {
    this.eight_week = moment(new Date(date), "YYYY-MM-DD").add('8', 'weeks').format("MMM DD YYYY");   
    this.twelve_week = moment(new Date(date), "YYYY-MM-DD").add('12', 'weeks').format("MMM DD YYYY");     
    this.sixteen_week = moment(new Date(date), "YYYY-MM-DD").add('16', 'weeks').format("MMM DD YYYY");     
    this.one_year = moment(new Date(date), "YYYY-MM-DD").add('1', 'year').format("MMM DD YYYY");          
    this.twelve_years = moment(new Date(date), "YYYY-MM-DD").add('12', 'year').format("MMM DD YYYY");         
    this.fourteen_years = moment(new Date(date), "YYYY-MM-DD").add('14', 'year').format("MMM DD YYYY");    
    this.three_year_four_months = moment(new Date(date), "YYYY-MM-DD").add('3', 'year').add('4','months').format("MMM DD YYYY");  
    this.two_year =  moment(new Date(date), "YYYY-MM-DD").add('2', 'year').format("MMM DD YYYY");                
  }

  //schedule event and notificaton
  scheduleNotification(name,date,lbl)
  {   
        switch(lbl)
        {
          case "event_label_8wk":
          {
            this.event_label_8wk = "Event added!";
            this.event_img_8wk = "assets/imgs/calendar-icon-blue.png";

            this.localNotifications.schedule({
              text: '8 week vaccination reminder',
              trigger: {at: new Date(this.eight_week)},
              led: 'FF0000',
              sound: null
            });


            break;
          }
          case "event_label_12wk":
          {
            this.event_label_12wk = "Event added!";
            this.event_img_12wk = "assets/imgs/calendar-icon-blue.png";

            this.localNotifications.schedule({
              text: '12 week vaccination reminder',
              trigger: {at: new Date(this.twelve_week)},
              led: 'FF0000',
              sound: null
            });

            break;
          }
          case "event_label_16wk":
          {
            this.event_label_16wk = "Event added!";
            this.event_img_16wk = "assets/imgs/calendar-icon-blue.png";

            this.localNotifications.schedule({
              text: '16 week vaccination reminder',
              trigger: {at: new Date(this.sixteen_week)},
              led: 'FF0000',
              sound: null
            });

            break;
          }
          case "event_label_1yr":
          {
            this.event_label_1yr = "Event added!";
            this.event_img_1yr = "assets/imgs/calendar-icon-blue.png";

            this.localNotifications.schedule({
              text: '1 year vaccination reminder',
              trigger: {at: new Date(this.one_year)},
              led: 'FF0000',
              sound: null
            });

            break;
          }
          case "event_label_2yr":
          {
            this.event_label_2yr = "Event added!";
            this.event_img_2yr = "assets/imgs/calendar-icon-blue.png";

            this.localNotifications.schedule({
              text: '2 year vaccination reminder',
              trigger: {at: new Date(this.two_year)},
              led: 'FF0000',
              sound: null
            });

            break;
          }
          case "event_label_12yr":
          {
            this.event_label_12yr = "Event added!";
            this.event_img_12yr = "assets/imgs/calendar-icon-blue.png";

            this.localNotifications.schedule({
              text: '12 year vaccination reminder',
              trigger: {at: new Date(this.twelve_years)},
              led: 'FF0000',
              sound: null
            });

            break;
          }
          case "event_label_14yr":
          {
            this.event_label_14yr = "Event added!";
            this.event_img_14yr = "assets/imgs/calendar-icon-blue.png";


            this.localNotifications.schedule({
              text: '14 year vaccination reminder',
              trigger: {at: new Date(this.fourteen_years)},
              led: 'FF0000',
              sound: null
            });

            break;
          }
          case "event_label_3yr4mn":
          {
            this.event_label_3yr4mn = "Event added!";
            this.event_img_3yr4mn = "assets/imgs/calendar-icon-blue.png";

            this.localNotifications.schedule({
              text: '3 year, 4 Months  vaccination reminder',    
              trigger: {at: new Date(this.three_year_four_months)},
              led: 'FF0000',
              sound: null
            });

            break;
          }

        }

        console.log("Date is "+name+ date);
        this.storage.set(name,date);
  }

  checkforExistingEvents()
  {
      this.storage.get("8wk").then(date=>{
          console.log(date);
          if(date!=null)
          {
            this.event_label_8wk = "Event added!";
            this.event_img_8wk = "assets/imgs/calendar-icon-blue.png";
          }
      });


      this.storage.get("12wk").then(date=>{
        console.log(date);
        if(date!=null)
        {
          this.event_label_12wk = "Event added!";
          this.event_img_12wk = "assets/imgs/calendar-icon-blue.png";
        }
      });

      this.storage.get("16wk").then(date=>{
        console.log(date);
        if(date!=null)
        {
          this.event_label_16wk = "Event added!";
          this.event_img_16wk = "assets/imgs/calendar-icon-blue.png";
        }
      });

      this.storage.get("1yr").then(date=>{
        console.log(date);
        if(date!=null)
        {
          this.event_label_1yr = "Event added!"; 
          this.event_img_1yr = "assets/imgs/calendar-icon-blue.png";
        }
      });

      this.storage.get("2yr").then(date=>{
        console.log(date);
        if(date!=null)
        {
          this.event_label_2yr = "Event added!";
          this.event_img_2yr = "assets/imgs/calendar-icon-blue.png";
       
        }
      });

      this.storage.get("3yr4mn").then(date=>{
        console.log(date);
        if(date!=null)
        {
          this.event_label_3yr4mn = "Event added!";
          this.event_img_3yr4mn = "assets/imgs/calendar-icon-blue.png";
         
        }
      });


      this.storage.get("12yr").then(date=>{
        console.log(date);
        if(date!=null)
        {
          this.event_label_12yr = "Event added!";
          this.event_img_12yr = "assets/imgs/calendar-icon-blue.png";
        
        }
      });

      this.storage.get("14yr").then(date=>{
        console.log(date);
        if(date!=null)
        {
          this.event_label_14yr = "Event added!";
          this.event_img_14yr = "assets/imgs/calendar-icon-blue.png";
         
        }
      });
  }

}
