import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { UserProvider } from '../../providers/user/user';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  public userObservable: Observable<any>;
  public user = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userProvider: UserProvider,
  ) {
  }

  async ionViewDidLoad() {
    try {
      this.userObservable = await this.userProvider.retrieveUserData();
      this.user = this.userObservable.subscribe(user => this.user = user);
    } catch (error) {
      console.log(error);
    }
  }



  async save() {
    try {
      this.userProvider.updateUserData(this.user);
    } catch (error) {
      console.log(error);
    }
  }

}
