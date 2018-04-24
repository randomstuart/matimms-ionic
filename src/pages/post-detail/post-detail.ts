import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController, Content } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

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
  id : Number;
  title : any;
  parent_color: any;
  header_title : any;
  description : any;
  btn_text: String;
  index:number=0;
  length :number;
  hide_show:boolean=false;
  imgUrl:any;
  public hideData:boolean=false;


  constructor(public http:Http, public navCtrl: NavController, public navParams: NavParams,public loadCtrl:LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostDetailPage');
    this.id=this.navParams.get('id');
    this.header_title=this.navParams.get('title');
    this.parent_color=this.navParams.get('parent_color');

    console.log(this.id);
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
            
                 
            this.title = this.postDescription[this.index].title.rendered;                 
            this.description = this.postDescription[this.index].content.rendered; 
            this.imgUrl=this.postDescription[this.index].featured_image_medium;
            console.log(this.title);        
          
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
              
              if(this.postDescription.length-1 == this.index)
              {
                this.btn_text="Done";
              }
              else{
                this.btn_text="Next";
              }
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

}
   