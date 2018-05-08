import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

 
  private theme : BehaviorSubject<String>;
 
  name:String = "global";
  ion_icons:Array<string> =new Array();
  
  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');

    this.ion_icons.push("square");
    this.ion_icons.push("cloud");
    this.ion_icons.push("egg");
    this.ion_icons.push("heart");
    this.ion_icons.push("medical");
    this.ion_icons.push("star");

    this.theme = new BehaviorSubject('one-theme');

  }

  setActiveTheme(val){
    this.theme.next(val);     
  } 
  
  getActiveTheme(){
    return this.theme.asObservable();
  }


}
