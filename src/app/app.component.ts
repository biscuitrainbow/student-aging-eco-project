import { Component } from '@angular/core';
import { Platform, NavController, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { MainPage } from '../pages/main/main';
import { ContentListPage } from '../pages/content-list/content-list';
import { FirebaseAuth } from '@firebase/auth-types';
import { AngularFireAuth } from 'angularfire2/auth';
import { ProfilePage } from '../pages/profile/profile';
import { CarinfoPage } from '../pages/carinfo/carinfo';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = MainPage;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public afAuth: AngularFireAuth, public app: App) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      afAuth.authState.subscribe(user => {
        if (user) this.rootPage = MainPage;
        else this.rootPage = LoginPage;
      })
    });

  }

  profile() {
    this.app.getRootNav().push(ProfilePage);
  }

  setting() {

  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
