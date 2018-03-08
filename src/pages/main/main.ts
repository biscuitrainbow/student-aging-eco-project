import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ContentListPage } from '../content-list/content-list';

@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {


  categories = [
    {
      logo: 'https://firebasestorage.googleapis.com/v0/b/agingeco.appspot.com/o/home-menu%2F5.png?alt=media&token=9cbca942-2786-4d07-a4a4-91cab96c33e2',
      text: {
        en: "เบอร์ฉุกเฉิน"
      },
      color: '#FCFBEB'
    },
    {
      logo: 'https://firebasestorage.googleapis.com/v0/b/agingeco.appspot.com/o/home-menu%2F1.png?alt=media&token=451b03e4-304d-4a8d-8497-4d7823ea0f1e',
      text: {
        en: "ข้อมูลรถยนต์"
      },
      color: '#f9d234'
    },
    {
      logo: 'https://firebasestorage.googleapis.com/v0/b/agingeco.appspot.com/o/home-menu%2F2.png?alt=media&token=7e4e74d3-5435-45fc-9832-6f9447c7c849',
      text: {
        en: "เชคสภาพรถ"
      },
      color: '#ff3a47'
    },
    {
      logo: 'https://firebasestorage.googleapis.com/v0/b/agingeco.appspot.com/o/home-menu%2F3.png?alt=media&token=dc7bfc91-8b5a-40e0-a2f1-72efc184ccd2',
      text: {
        en: "การดูแลรถยนต์"
      },
      color: '#3E5BA6'
    },
    {
      logo: 'https://firebasestorage.googleapis.com/v0/b/agingeco.appspot.com/o/home-menu%2F4.png?alt=media&token=12b4c063-ba4d-4d81-ba24-34d611bdb7b0',
      text: {
        en: "การขับขี่รถยนต์"
      },
      color: '#FCFBEB'
    },
    {
      logo: 'https://firebasestorage.googleapis.com/v0/b/agingeco.appspot.com/o/home-menu%2F6.png?alt=media&token=45a67054-e3e4-4096-922b-22cc5c183077',
      text: {
        en: "อุปกรณ์เสริมรถยนต์"
      },
      color: '#FCFBEB'
    },
    {
      logo: 'https://firebasestorage.googleapis.com/v0/b/agingeco.appspot.com/o/home-menu%2F7.png?alt=media&token=411a2a2e-d61e-483e-b347-9227f6c405e9',
      text: {
        en: "สัญญาณบนแผงหน้าปัด"
      },
      color: '#FCFBEB'
    },
    {
      logo: 'https://firebasestorage.googleapis.com/v0/b/agingeco.appspot.com/o/home-menu%2F8.png?alt=media&token=f86365a7-5012-4cd1-bee0-a50194d6453b',
      text: {
        en: "ความรู้เพิ่มเติม"
      },
      color: '#FCFBEB'
    },
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  navigateContentList() {
    this.navCtrl.push(ContentListPage);
  }

}
