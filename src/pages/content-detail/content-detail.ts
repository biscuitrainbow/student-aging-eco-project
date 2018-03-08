import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-content-detail',
  templateUrl: 'content-detail.html',
})
export class ContentDetailPage {

  public contents = [];
  public title = '';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.contents = navParams.get('details');
    this.title = navParams.get('title');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContentDetailPage');
  }

}
