import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams , LoadingController , ViewController} from 'ionic-angular';
import { PostDetailPage } from '../post-detail/post-detail';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { MyjourneyPage } from '../myjourney/myjourney';
import { Slides } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the PostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html',
})
export class PostsPage {

  public read_id : Array<any> =new Array();
  public childList:Array<any> = new Array();
  parent_title : String;  
  parent_id : any;
  parent_color : String;
  parent_dark_color:String;
  hideData :boolean=false;
  ion_icons:Array<string> =new Array();
  slider : any;
  post_icon: string;
  icon_index : number = 0;
  ion_parent_icon:Array<string>=new Array();
  total_read_count: number=0;
  nearly_btn_text : String = "READ" ;
  nearly_header : String ="Nearly there";
  slide_count : number= -1;
  selectedTheme:String;
  @ViewChild('mySlider') mySlider;
  @ViewChild(Slides) slides: Slides;
  
    

  constructor(private dataprovider: DataProvider, public storage:Storage,public http:Http, public navCtrl: NavController, public navParams: NavParams, public loadCtrl:LoadingController) {
    
    this.parent_id=this.navParams.get('id'); 
    console.log(this.parent_id);
    if( this.parent_id == 619)
    {
        this.dataprovider.setActiveTheme('five-theme');
    }    
    else if( this.parent_id == 59)
    {
        this.dataprovider.setActiveTheme('four-theme');
    } 
    else if( this.parent_id == 35)
    {
        this.dataprovider.setActiveTheme('two-theme');
    } 
    else
    {
      this.dataprovider.setActiveTheme('one-theme');
    }


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostsPage');

    
     
    this.parent_id=this.navParams.get('id');      
    this.parent_title=this.navParams.get('title');
    this.parent_color=this.navParams.get('back_color');
    this.parent_dark_color=this.navParams.get('dark_color');  

    this.ion_icons.push("square");
    this.ion_icons.push("cloud");
    this.ion_icons.push("egg");
    this.ion_icons.push("heart");
    this.ion_icons.push("medical");
    this.ion_icons.push("star");

    console.log(this.parent_id);        
    console.log(this.parent_color);
    console.log(this.parent_dark_color);      
    console.log(this.ion_icons);           


    

     
  //  this.post_icon = this.ion_icons[this.icon_index];           



    this.getPost();
  

    
  }   

  

  getPost(){

    let loader=this.loadCtrl.create({
        spinner : 'bubbles',
        content : "Please wait..."
    });

    loader.present();

    this.http.get("http://matimms.org.uk/wp-json/wp/v2/journey?filter%5Bposts_per_page%5D=-1&filter%5Border%5D=ASC&filer%5Borderby%5D=menu_order").
    map(res => res.json()).subscribe(data => {

        for(let i=0; i< data.length ; i++ )
        {
         
          if(data[i].parent == this.parent_id)
          {
              this.childList.push(data[i]);
              
              this.storage.get(data[i].id).then(id=>{
              
              this.read_id.push(id); 
              
              if( id == 1)
              {
                this.total_read_count++;   
              }


              if(this.childList.length == this.total_read_count)
             {
               this.nearly_btn_text = "JOURNEY";
               this.nearly_header = "Congratulations";
                            
             }

                 
             
         });
                
          }
        }   

        

        
         

        for(let i=0;i<this.childList.length;i++)
        {
              this.ion_parent_icon[i]=this.ion_icons[i];
        }
         
        this.post_icon=this.ion_parent_icon[this.icon_index];
        this.hideData=true;

        
        loader.dismiss();

        
       
    });



  }
 
  ionViewDidEnter()
  {
    console.log("Welcome");
    
  }

  postDetail(id,title){

      console.log(id);
      console.log(this.parent_color); 

      this.navCtrl.push(PostDetailPage,{'parent_id':this.parent_id,'id':id,'title':title,'parent_color':this.parent_color});

  }

   
                
             
  slideChanged() { 
    console.log("slide CHANGED"+this.mySlider.getActiveIndex());  

    this.icon_index = this.mySlider.getActiveIndex();    
    
  //  this.post_icon = this.ion_icons[this.icon_index];  
      this.post_icon = this.ion_parent_icon[this.icon_index];
    console.log("Icon Index "+this.icon_index);           
  }    

  goToJourney(){

    if(this.nearly_btn_text == "JOURNEY")
    this.navCtrl.push(MyjourneyPage);
    else
    {
      for( let i=0; i<this.read_id.length ; i++)
      {
          if( this.read_id[i] == null)
          {
            this.slide_count = i;
            break;
          }
          

      }
      this.slides.slideTo(this.slide_count, 500);
    }

  }

  ionViewWillLeave() {
    this.dataprovider.setActiveTheme('default-theme');
  }
      

}
