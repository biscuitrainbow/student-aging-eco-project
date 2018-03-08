import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ContentDetailPage } from '../content-detail/content-detail';


@Component({
  selector: 'page-content-list',
  templateUrl: 'content-list.html',
})
export class ContentListPage {

  public category = [];
  public title = ''
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.category = navParams.get('payload');
    this.title = navParams.get('title');
  }

  showDetail(item) {
    this.navCtrl.push(ContentDetailPage, { details: item.details ,title : item.text.en});
  }

}
