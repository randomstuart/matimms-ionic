import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController, Content ,ViewController } from 'ionic-angular';
import { PostsPage } from '../posts/posts';
import { Storage } from '@ionic/storage';
import { FurtherReadingPage } from '../further-reading/further-reading';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';   

import { ViewChild } from '@angular/core';
import { Navbar , AlertController } from 'ionic-angular';
/**
 * Generated class for the PostDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post-detail',
  templateUrl: 'post-detail.html',
})
export class PostDetailPage {


  public postDescription:Array<any> =new Array();
  id : any;
  title : any;
  child_id :any ;
  parent_color: any;
  header_title : any;
  description : any;
  btn_text: String;
  index:number=0;
  length :number;
  grand_parent_id:any;
  hide_show:boolean=false;
  imgUrl:any;
  public hideData:boolean=false;
  public data_innate_adaptive : any;
  public innate : number = 0;
  public adaptive: number = 1;
  public how_vaccines_info : any;
  public how_vaccines_index : number = -1;
  public whooping_meta_link_text : any;
  public whooping_meta_link_url : any;
  
  @ViewChild(Navbar) navBar: Navbar;

  constructor(public alertCtrl: AlertController ,public storage:Storage,public http:Http, public navCtrl: NavController, public navParams: NavParams,public loadCtrl:LoadingController) {
      
  }
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad PostDetailPage');
    this.id=this.navParams.get('id');
    this.header_title=this.navParams.get('title');
    this.parent_color=this.navParams.get('parent_color');
    this.grand_parent_id=this.navParams.get('parent_id');
    console.log("SubPost"+this.id);
    console.log(this.parent_color);
   
      this.getData();

         
  }      
      
  getData()
  {
    let loader= this.loadCtrl.create({
      spinner:'bubbles',
      content:"Please wait..."
  });
    
  loader.present();

        this.http.get("http://matimms.org.uk/wp-json/wp/v2/journey?filter%5Bposts_per_page%5D=-1&filter%5Border%5D=ASC&filer%5Borderby%5D=menu_order")
          .map(res => res.json()).subscribe(data =>{

            for(let i=0; i< data.length;i++)
            {
      
                  if(data[i].parent == this.id)
                  {
                      this.postDescription.push(data[i]);            
                    
                  }
            }            
  
          this.length=this.postDescription.length;   
          console.log(this.postDescription.length);
          console.log(this.postDescription);    
          console.log();  
                 
            this.title = this.postDescription[this.index].title.rendered;                 
            this.description = this.postDescription[this.index].content.rendered;
            this.child_id = this.postDescription[this.index].id; 
            this.imgUrl=this.postDescription[this.index].featured_image_medium;
            this.whooping_meta_link_text=this.postDescription[this.index].meta_link_text;
            this.whooping_meta_link_url=this.postDescription[this.index].meta_link_url;

            if( this.id == 178)
              this.data_innate_adaptive=this.postDescription[0].meta_information;

            console.log(this.title);            
            console.log(this.child_id);
            console.log(this.whooping_meta_link_url);
          if(this.postDescription.length-1 == this.index)            
          {
            this.btn_text="Done";
          }
          else{
            this.btn_text="Next";
          }
          this.hideData=true;  
          loader.dismiss();

          });

        
  }
                         

  nextPage(){
          
          if(this.btn_text=="Next")
          {
              this.index++;
              this.title = this.postDescription[this.index].title.rendered;
              this.description = this.postDescription[this.index].content.rendered;
              this.child_id = this.postDescription[this.index].id; 
              this.imgUrl=this.postDescription[this.index].featured_image_medium;
              this.whooping_meta_link_text=this.postDescription[this.index].meta_link_text;   
              this.whooping_meta_link_url=this.postDescription[this.index].meta_link_url;           
              if(this.postDescription.length-1 == this.index)
              {
                this.btn_text="Done";
              }
              else{
                this.btn_text="Next";
              }
          }
          
          else
          {
            this.storage.set(this.id,1);
            this.navCtrl.pop();
            
          }    
     

          if(this.index!=0)
          {
            this.hide_show=true;
          }          

  }   

  prevPage(){

       this.index--;
       this.title = this.postDescription[this.index].title.rendered;
       this.description = this.postDescription[this.index].content.rendered;
       this.child_id = this.postDescription[this.index].id;  
       this.imgUrl=this.postDescription[this.index].featured_image_medium;
       this.whooping_meta_link_text=this.postDescription[this.index].meta_link_text;
       this.whooping_meta_link_url=this.postDescription[this.index].meta_link_url;

       if(this.index==0)
          {
            this.hide_show=false;     
          }
          
  
       if(this.postDescription.length-1 == this.index)
       {
          this.btn_text="Done";
       }
       else{
          this.btn_text="Next";
        }
    
}

getAnswer(answer){

    console.log("Answer");

    if(answer == true)
    {
        this.nextPage();  
    }
    else
    {
      let alert = this.alertCtrl.create({
        title: "Nope you're wrong! ",
        buttons: ['OKAY']
      });
      alert.present();
    }

}


innate_adaptive(total_data){

  if( total_data == "Innate" )      
  {
    this.innate = 0;  
    this.adaptive = 1;  
    this.data_innate_adaptive=this.postDescription[0].meta_information;
  }
  else
  {
    this.innate = 1;
    this.adaptive = 0;
    this.data_innate_adaptive=this.postDescription[0].meta_information_2;
  }

}

furtherReadPage(){

  this.navCtrl.push(FurtherReadingPage);
}

getInfo(ind,information){
  this.how_vaccines_info=information;
  this.how_vaccines_index=ind;              
}



}
   