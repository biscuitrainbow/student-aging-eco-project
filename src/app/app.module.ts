import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { MainPage } from '../pages/main/main';
import { ContentListPage } from '../pages/content-list/content-list';
import { CarinfoPage } from '../pages/carinfo/carinfo';
import { ProfilePage } from '../pages/profile/profile';
import { RegisterPage } from '../pages/register/register';
import { SettingPage } from '../pages/setting/setting';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { FacebookAuthProvider } from '@firebase/auth-types';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { EmergencyNumberPage } from '../pages/emergency-number/emergency-number';
import { ContentDetailPage } from '../pages/content-detail/content-detail';
import { UserProvider } from '../providers/user/user';
import { Base64 } from '@ionic-native/base64';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { CameraProvider } from '../providers/camera/camera';
import { ContentProvider } from '../providers/content/content';
import { CallNumber } from '@ionic-native/call-number';

var config = {
  apiKey: "AIzaSyBwV_CETiZb_USfiZUbGpwK_kfV1XNb3lU",
  authDomain: "agingeco.firebaseapp.com",
  databaseURL: "https://agingeco.firebaseio.com",
  projectId: "agingeco",
  storageBucket: "agingeco.appspot.com",
  messagingSenderId: "684968619269"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    MainPage,
    ContentListPage,
    CarinfoPage,
    ProfilePage,
    RegisterPage,
    SettingPage,
    EmergencyNumberPage,
    ContentDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    MainPage,
    ContentListPage,
    CarinfoPage,
    ProfilePage,
    RegisterPage,
    SettingPage,
    EmergencyNumberPage,
    ContentDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler, },
    Facebook,
    UserProvider,
    Base64,
    Camera,
    CallNumber,
    CameraProvider,
    ContentProvider,
  ]
})
export class AppModule { }
