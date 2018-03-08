import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MainPage } from '../main/main';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public facebook: Facebook,
    public afAuth: AngularFireAuth,
    public afFirestore: AngularFirestore
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  navigateMainPage() {
    this.navCtrl.push(MainPage);
  }

  async loginWithFacebook() {
    let provider = new firebase.auth.FacebookAuthProvider;

    provider.setCustomParameters({
      'display': 'popup'
    });

    try {
      let response = await this.afAuth.auth.signInWithPopup(provider);

      let uid = response.user.uid;
      let displayName = response.user.displayName;
      let email = response.user.email;
      let photoUrl = response.user.photoURL;


      let result = await this.afFirestore
        .collection('users')
        .doc(uid)
        .set({
          name: displayName,
          email: email,
          photoUrl: photoUrl
        });

    } catch (e) {
      console.log(e);
    }

  }

}
