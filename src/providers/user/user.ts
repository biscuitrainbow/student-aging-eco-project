import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { Facebook } from '@ionic-native/facebook';
import * as firebase from 'firebase/app';

export const USER_COLLECTION = 'users';


@Injectable()
export class UserProvider {

  constructor(
    public afAuth: AngularFireAuth,
    public afFirestore: AngularFirestore,
    public facebook: Facebook
  ) { }


  public async signInWithFacebook() {
    const response = await this.facebook.login(['email', 'user_birthday', 'public_profile'])
    const facebookCredential = firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
    const user = await this.afAuth.auth.signInWithCredential(facebookCredential);
    const additionalDetail = await this.facebook.api("/" + response.authResponse.userID + "/?fields=gender,birthday", ["user_birthday"]);

    await this.createUserData(user, additionalDetail)

    return user;
  }

  public async getUserDataReference(user) {
    const userRef = await this.afFirestore.collection(USER_COLLECTION).doc(user.uid).ref.get();
    return userRef;
  }

  public getCurrentUser() {
    const user = this.afAuth.auth.currentUser;
    return user;
  }

  public async createUserData(user, additionalDetail) {
    const userRef = await this.getUserDataReference(user);

    if (!userRef.exists) {
      let userData = await this.afFirestore
        .collection('users')
        .doc(user.uid)
        .set({
          ...user.providerData[0],
          tel: '',
          gender: '',
          licensePlate: '',
          brand: '',
          serie: '',
          color: '',
          isAdmin: false,
          dateOfPurchased: '',
          ...additionalDetail
        });

      return userData;
    }

    return;
  }

  public async updateUserData(data) {
    const user = this.getCurrentUser();

    await this.afFirestore
      .collection(USER_COLLECTION)
      .doc(user.uid)
      .update(data)
  }

  public async retrieveUserData() {
    const user = this.getCurrentUser();

    const userData = await this.afFirestore
      .collection(USER_COLLECTION)
      .doc(user.uid)
      .valueChanges()
      .map(data => {
        return data;
      })

    return userData;
  }

}

