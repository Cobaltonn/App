import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DateTime } from 'ionic-angular/components/datetime/datetime';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public Nome_Usuario:string = "Vinicios Durigan";
  public Data:any = "";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public DataAtual(num1:number,num2:number): void{
    alert(num1 + num2);
  }
  ionViewDidLoad() {
   // this.DataAtual(10,20);
  }

}
