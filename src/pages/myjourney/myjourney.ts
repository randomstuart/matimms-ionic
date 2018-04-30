import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { PostsPage} from '../posts/posts';

import { Storage } from '@ionic/storage';
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
  public small_candy_count :Array<number>=new Array();
  

  public lastElement: any;
  public txtLastCircle:String;
  public hideData : boolean=false;
  public data_color: any;
  public parent_id: number;
  public child_count : Array<number> = new Array();
  public count:number =0;
  public abc : any;
  public ion_icons:Array<string> =new Array();

  public childs: Array<any> =new Array();
  public myjourney_read:Array<any>=new Array();

 // public colors  =['first','second','third','four','five'];
 // buttonColor: string = '#000';

  constructor(public storage:Storage, private http:Http,public navCtrl: NavController, public navParams: NavParams,public loadingCtrl:LoadingController) {
  
      
  }

  ionViewDidLoad() {

    let loader = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: "Please wait..."            
    });  
      
    loader.present(); 

    this.ion_icons.push("square");
    this.ion_icons.push("cloud");
    this.ion_icons.push("egg");
    this.ion_icons.push("heart");
    this.ion_icons.push("medical");
    this.ion_icons.push("star");


    this.small_candy_count.push(1);
    this.small_candy_count.push(2);
    this.small_candy_count.push(3);
    this.small_candy_count.push(4);
    this.small_candy_count.push(5);
    this.small_candy_count.push(6);
    this.small_candy_count.push(7);  
    this.small_candy_count.push(8);


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

          else if(data[i].parent == 25 )  
          {
             this.childs.push(data[i]);
   
             this.storage.get(data[i].id).then(id=>{
      
             this.myjourney_read.push(id); 
      
      
             console.log(this.myjourney_read);  
             });
     
          }         
         
            
      }

      

        this.SortedArray();

    
      for(let j=0;j<this.chapterList.length;j++)
      {
        this.abc=this.chapterList[j];
        console.log(this.abc.id);
        this.count=0; 
        for(let i=0; i<data.length;i++)
        {
          if(data[i].parent==this.abc.id)
          {
            this.count++;
            
          }
        }
        this.child_count.push(this.count);
        console.log(this.count);  
      }

//Child Counts Starts-------------------------------------
/*
for(let i=0; i< data.length ; i++ )
{
 
  if(data[i].parent == 25 )  
  {
      this.childs.push(data[i]);
      
     this.storage.get(data[i].id).then(id=>{
      
      this.myjourney_read.push(id); 
      
      
      console.log(this.myjourney_read);
 });
  
  }         

  
}

*/

//Child Counts Ends-----------------------------------------
      


      for(let i=0;i<this.child_count.length;i++)
      {
          console.log(this.child_count[i]);
      }

    

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

    if( back_color == "" && dark_color == "")
    {
      back_color="palevioletred";
      dark_color="palevioletred";
    }
    
    console.log("back_color"+ back_color );
    this.navCtrl.push(PostsPage,{'id':id,'title':title,'back_color':back_color,'dark_color':dark_color});
    
    
}



}
