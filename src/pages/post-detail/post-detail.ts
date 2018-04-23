import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  description : any;

  constructor(public http:Http, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostDetailPage');
    this.id=this.navParams.get('id');
    console.log(this.id);

      this.http.get("http://matimms.org.uk/wp-json/wp/v2/journey?filter%5Bposts_per_page%5D=-1&filter%5Border%5D=ASC&filer%5Borderby%5D=menu_order")
      .map(res => res.json()).subscribe(data =>{

        for(let i=0; i< data.length;i++)
        {

              if(data[i].parent == this.id)
              {
                  this.postDescription.push(data[i]);            
                
              }
        }

       this.title = this.postDescription[0].title.rendered;
       console.log(this.postDescription);                        

      });

      
    
         
  }

}
