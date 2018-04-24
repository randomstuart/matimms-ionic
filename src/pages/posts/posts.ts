import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , LoadingController} from 'ionic-angular';
import { PostDetailPage } from '../post-detail/post-detail';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

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


  public childList:Array<string> = new Array();
  parent_title : String;
  parent_id : number;
  parent_color : String;
  parent_dark_color:String;
  hideData :boolean=false;

  constructor(public http:Http, public navCtrl: NavController, public navParams: NavParams, public loadCtrl:LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostsPage');

    
    this.parent_id=this.navParams.get('id');      
    this.parent_title=this.navParams.get('title');
    this.parent_color=this.navParams.get('back_color');
    this.parent_dark_color=this.navParams.get('dark_color');

    console.log(this.parent_id);
    console.log(this.parent_color);
    console.log(this.parent_dark_color);

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
          }
        }
 
        console.log(this.childList);   
        this.hideData=true;
        loader.dismiss();
    });

  

  }
 


  postDetail(id,title){

      console.log(id);
      console.log(this.parent_color);  
      this.navCtrl.push(PostDetailPage,{'id':id,'title':title,'parent_color':this.parent_color});

  }

}
