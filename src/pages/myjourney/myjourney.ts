import { Component, ViewChild } from '@angular/core';
import { Content } from 'ionic-angular';

import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { PostsPage} from '../posts/posts';
import { DataProvider } from '../../providers/data/data';

import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';


import 'rxjs/add/operator/map';
//import { timeout } from 'rxjs/operator/timeout';



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
  @ViewChild("contentRef") contentHandle: Content;
            
 
  public chapterList:Array<string> = new Array();
  active_small_candy = true;
  small_candy = false;  

//  public childCount:Array<number> = new Array(); 
  public small_candy_count :Array<number>=new Array();
  public color_array : Array<any>=new Array();  

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
  public myjourney_read1:Array<any>=new Array();
  public myjourney_read2:Array<any>=new Array();
  public myjourney_read3:Array<any>=new Array();
  public myjourney_read4:Array<any>=new Array();   
  
   
  public myjourney_global:Array<any>=new Array();
  public read_complete_count: Array<any>=new Array();
  public read_count : number=0;
  
 // public colors  =['first','second','third','four','five'];
 // buttonColor: string = '#000';   
  selectedTheme : String;
  constructor(private dataprovider: DataProvider, public storage:Storage, private http:Http,public navCtrl: NavController, public navParams: NavParams,public loadingCtrl:LoadingController) {
      this.dataprovider.setActiveTheme('default-theme');       
      this.dataprovider.getActiveTheme().subscribe(val => this.selectedTheme = val );

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

    this.color_array.push("#e8789d");
    this.color_array.push("#8946ff");
    this.color_array.push("#58cebb");
    
    this.color_array.push("#1a95d2");
    this.color_array.push("transparent");
    this.color_array.push("#f4a876");       
    this.color_array.push("#12b6e8");
    this.color_array.push("#98E83B");

   
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
              
      
             console.log("first"+this.myjourney_read);

             this.read_count=0;
             for(let i=0;i<this.myjourney_read.length;i++){
                  if(this.myjourney_read[i]==1){
                    this.read_count++;
                  }
                  
             }
              this.read_complete_count[0]=this.read_count;
            
             });
                
          }
  
          else if(data[i].parent == 35 )  
          {
             this.childs.push(data[i]);
   
             this.storage.get(data[i].id).then(id=>{
      
             this.myjourney_read1.push(id); 
      
      
             console.log("second"+this.myjourney_read1);  
             this.read_count=0;
             for(let i=0;i<this.myjourney_read1.length;i++){
                  if(this.myjourney_read1[i]==1){
                    this.read_count++;
                  }
                  
             }
              this.read_complete_count[1]=this.read_count;  

             });
     
          }
          
          else if(data[i].parent == 186 )  
          {
             this.childs.push(data[i]);
   
             this.storage.get(data[i].id).then(id=>{
      
             this.myjourney_read2.push(id); 
      
      
             console.log("third"+this.myjourney_read2);
             this.read_count=0;
             for(let i=0;i<this.myjourney_read2.length;i++){
                  if(this.myjourney_read2[i]==1){
                    this.read_count++;
                  }
                  
             }
              this.read_complete_count[2]=this.read_count; 
             


             });
     
          }

          else if(data[i].parent == 59 )    
          {
             this.childs.push(data[i]);
   
             this.storage.get(data[i].id).then(id=>{
      
             this.myjourney_read3.push(id);          
      
           
             console.log("fourth"+this.myjourney_read3);   
             this.read_count=0;
             for(let i=0;i<this.myjourney_read3.length;i++){
                  if(this.myjourney_read3[i]==1){
                    this.read_count++;
                  }
                  
             }
              this.read_complete_count[3]=this.read_count; 
             


             });
     
          }

          else if(data[i].parent == 619 )  
          {
             this.childs.push(data[i]);
   
             this.storage.get(data[i].id).then(id=>{
      
             this.myjourney_read4.push(id); 
              
      
             console.log("fifth"+this.myjourney_read4);  
             this.read_count=0;
             for(let i=0;i<this.myjourney_read4.length;i++){
                  if(this.myjourney_read4[i]==1){
                    this.read_count++;
                  }
                  
             }
              this.read_complete_count[4]=this.read_count; 


             });
     
          }
          
         
            
      }

      

        this.SortedArray();

    
      for(let j=0;j<this.chapterList.length;j++)
      {
        this.abc=this.chapterList[j];
        console.log(this.abc.id);
        this.myjourney_global.push(this.abc.id);
        console.log(this.myjourney_global[j]);     
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

         
     //   document.querySelector(".small_candy0")['style'].height = '25px';
   // document.querySelector(".small_candy0")['style'].width = '25px';  
      
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
      back_color="#19CEBB";
      dark_color="#19CEBB";  
    }
    
    console.log("back_color"+ back_color );
    this.navCtrl.push(PostsPage,{'id':id,'title':title,'back_color':back_color,'dark_color':dark_color});
    
    
}


scrollingFun(e) {

  console.log(this.contentHandle.contentHeight);
  console.log(this.contentHandle.getContentDimensions());
  console.log(this.contentHandle.scrollHeight);
  console.log(e.scrollTop);

  let per = (e.scrollTop/e.scrollHeight) * 100 ;
  console.log("Per "+per);
  

  if( e.scrollTop == 0 || per < 64)
  {
     document.querySelector(".small_candy0")['style'].height = '25px';
    document.querySelector(".small_candy0")['style'].width = '25px';

    document.querySelector(".small_candy1")['style'].height = '20px';
    document.querySelector(".small_candy1")['style'].width = '20px';

  }

  else if( per >= 64 && per < 166 )
  {
    document.querySelector(".small_candy0")['style'].height = '20px';
    document.querySelector(".small_candy0")['style'].width = '20px';

    document.querySelector(".small_candy1")['style'].height = '25px';
    document.querySelector(".small_candy1")['style'].width = '25px';

    document.querySelector(".small_candy2")['style'].height = '20px';
    document.querySelector(".small_candy2")['style'].width = '20px';
  }  
  else if( per >= 166 && per < 264)  
  {
    document.querySelector(".small_candy1")['style'].height = '20px';
    document.querySelector(".small_candy1")['style'].width = '20px';

    document.querySelector(".small_candy2")['style'].height = '25px';   
    document.querySelector(".small_candy2")['style'].width = '25px'; 

    document.querySelector(".small_candy3")['style'].height = '20px';
    document.querySelector(".small_candy3")['style'].width = '20px';

  } 
  
  else if( per >= 264 && per < 364)  
  {
    document.querySelector(".small_candy2")['style'].height = '20px';
    document.querySelector(".small_candy2")['style'].width = '20px';

    document.querySelector(".small_candy3")['style'].height = '25px';   
    document.querySelector(".small_candy3")['style'].width = '25px'; 

    document.querySelector(".small_candy4")['style'].height = '20px';   
    document.querySelector(".small_candy4")['style'].width = '20px'; 


  }
  else if( per >= 364 && per < 465 )  
  {
    document.querySelector(".small_candy3")['style'].height = '20px';
    document.querySelector(".small_candy3")['style'].width = '20px';

    document.querySelector(".small_candy4")['style'].height = '25px';   
    document.querySelector(".small_candy4")['style'].width = '25px'; 

    document.querySelector(".small_candy5")['style'].height = '20px';   
    document.querySelector(".small_candy5")['style'].width = '20px';

  }
  else if( per >= 465 && per < 565 )  
  {
    document.querySelector(".small_candy4")['style'].height = '20px';
    document.querySelector(".small_candy4")['style'].width = '20px';

    document.querySelector(".small_candy5")['style'].height = '25px';   
    document.querySelector(".small_candy5")['style'].width = '25px'; 


    document.querySelector(".small_candy6")['style'].height = '20px';   
    document.querySelector(".small_candy6")['style'].width = '20px'; 

  }
  else if( per >= 565 && per < 666 )  
  {
    document.querySelector(".small_candy5")['style'].height = '20px';
    document.querySelector(".small_candy5")['style'].width = '20px';

    document.querySelector(".small_candy6")['style'].height = '25px';   
    document.querySelector(".small_candy6")['style'].width = '25px'; 

    document.querySelector(".small_candy7")['style'].height = '20px';   
    document.querySelector(".small_candy7")['style'].width = '20px';

  }
  else if( per >= 666 )
  {
    document.querySelector(".small_candy6")['style'].height = '20px';
    document.querySelector(".small_candy6")['style'].width = '20px';

    document.querySelector(".small_candy7")['style'].height = '25px';   
    document.querySelector(".small_candy7")['style'].width = '25px';

  }

      
}  

}
  