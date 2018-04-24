import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { PostsPage} from '../posts/posts';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



/**
 * Generated class for the MyjourneyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myjourney',
  templateUrl: 'myjourney.html',
})
export class MyjourneyPage {

  public chapterList:Array<string> = new Array();


//  public childCount:Array<number> = new Array(); 

  public lastElement: any;
  public txtLastCircle:String;
  public hideData : boolean=false;
  public data_color: any;

 // public colors  =['first','second','third','four','five'];
 // buttonColor: string = '#000';

  constructor(private http:Http,public navCtrl: NavController, public navParams: NavParams,public loadingCtrl:LoadingController) {
  }

  ionViewDidLoad() {

    let loader = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: "Please wait..."
    });

    loader.present(); 



    console.log('ionViewDidLoad MyjourneyPage');

    this.http.get("http://matimms.org.uk/wp-json/wp/v2/journey?filter%5Bposts_per_page%5D=-1&filter%5Border%5D=ASC&filer%5Borderby%5D=menu_order")
    .map(res=>res.json()).subscribe(data=>{  

      for(let i=0; i<data.length; i++)
      { 
          

          if(data[i].parent == 0)
          {
            //this.myData = data[i];
            console.log(data[i]);

            this.chapterList.push(data[i]);                 

            this.chapterList.sort();
              
          }
         
            
      }
        
     
        this.SortedArray();

        this.lastElement=this.chapterList.pop();
        this.txtLastCircle=  this.lastElement.title.rendered;
       
        
        this.hideData=true;
        loader.dismiss();

    });  

    

  }


   sortByProperty = function (property) {

    return function (x, y) {

        return ((x[property] === y[property]) ? 0 : ((x[property] > y[property]) ? 1 : -1));

    };

};

SortedArray(){
this.chapterList.sort(this.sortByProperty('menu_order'));
}

openSlider(id,title,back_color,dark_color){

    
    console.log(id);
    console.log(title);
    console.log(back_color);
    console.log(dark_color);
    this.navCtrl.push(PostsPage,{'id':id,'title':title,'back_color':back_color,'dark_color':dark_color});
}



}
