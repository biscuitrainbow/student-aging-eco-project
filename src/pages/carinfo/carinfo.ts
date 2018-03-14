import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'page-carinfo',
  templateUrl: 'carinfo.html',
})
export class CarinfoPage {

  public user = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userProvider: UserProvider
  ) {
  }

  async ionViewDidLoad() {
    await this.retrieveUserData();
  }

  async retrieveUserData() {
    try {
      const userObserveable = await this.userProvider.retrieveUserData();
      userObserveable.subscribe(user => this.user = user);
    } catch (error) {
      console.log(error)
    }
  }

  async save() {
    try {
      await this.userProvider.updateUserData(this.user);
    } catch (error) {
      console.log(error)
    }
  }

}
