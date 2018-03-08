import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';


@Component({
  selector: 'page-carinfo',
  templateUrl: 'carinfo.html',
})
export class CarinfoPage {

  public user: any = {
    displayName: '',
    email: '',
    tel: '',
    photoUrl: '',
    gender: '',
    licensePlate: '',
    brand: '',
    serie: '',
    dateOfPurchased: '',
    color: ''
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public afAuth: AngularFireAuth,
    public afFirestore: AngularFirestore,
  ) {
  }

  ionViewDidLoad() {
    this.getUserProfile();
  }

  getUserProfile() {
    let uid = this.afAuth.auth.currentUser.uid;

    this.afFirestore
      .collection('users')
      .doc(uid)
      .valueChanges()
      .subscribe(user => {
        this.user = user;
      })
  }

  async save() {
    let uid = this.afAuth.auth.currentUser.uid;

    try {
      await this.afFirestore
        .collection('users')
        .doc(uid)
        .set(this.user);
    } catch (e) {
      console.log(e);
    }

  }

}
