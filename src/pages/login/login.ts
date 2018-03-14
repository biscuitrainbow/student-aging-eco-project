import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MainPage } from '../main/main';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFirestore } from 'angularfire2/firestore';
import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userProvider: UserProvider
  ) {
  }

  ionViewDidLoad() {

  }

  navigateMainPage() {
    this.navCtrl.push(MainPage);
  }

  async loginWithFacebook() {
    try {
      const user = await this.userProvider.signInWithFacebook();
    } catch (e) {
      console.log(e);
    }
  }

}
