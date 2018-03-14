import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ContentListPage } from '../content-list/content-list';
import { CarinfoPage } from '../carinfo/carinfo';
import { EmergencyNumberPage } from '../emergency-number/emergency-number';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ContentProvider } from '../../providers/content/content';

@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  public categories: Observable<any[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public contentProvider: ContentProvider
  ) {
  }

  async ionViewDidLoad() {
    this.categories = await this.contentProvider.retrieveCategories();
  }

  navigateContentList(item) {

    if (item.destination) {

      if (item.destination.page === 'EmergencyNumberPage') this.navCtrl.push(EmergencyNumberPage, { content: item });
      else if (item.destination.page === 'ContentListPage') this.navCtrl.push(ContentListPage, { content: item });
      else if (item.destination.page === 'CarinfoPage') this.navCtrl.push(CarinfoPage, { content: item });

      return;
    }
  }

}
