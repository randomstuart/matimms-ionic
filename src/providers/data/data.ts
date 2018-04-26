import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

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


  }




}
