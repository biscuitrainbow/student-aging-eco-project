import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ContentListPage } from '../content-list/content-list';
import { CarinfoPage } from '../carinfo/carinfo';
import { EmergencyNumberPage } from '../emergency-number/emergency-number';

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
      color: '#FCFBEB',
      destination: {
        page: EmergencyNumberPage,
        payload: {}
      }
    },
    {
      logo: 'https://firebasestorage.googleapis.com/v0/b/agingeco.appspot.com/o/home-menu%2F1.png?alt=media&token=451b03e4-304d-4a8d-8497-4d7823ea0f1e',
      text: {
        en: "ข้อมูลรถยนต์"
      },
      color: '#f9d234',
      destination: {
        page: CarinfoPage,
        payload: {}
      }
    },
    {
      logo: 'https://firebasestorage.googleapis.com/v0/b/agingeco.appspot.com/o/home-menu%2F2.png?alt=media&token=7e4e74d3-5435-45fc-9832-6f9447c7c849',
      text: {
        en: "เชคสภาพรถ"
      },
      color: '#ff3a47',
      destination: {
        page: ContentListPage,
        payload: {
          subCategory: [
            {
              logo: 'https://firebasestorage.googleapis.com/v0/b/agingeco.appspot.com/o/content%2Fcar-checking%2F1%2F1.png?alt=media&token=fdcd7222-f6cd-48fb-bfd8-39a65993d8a6',
              text: {
                en: "ตรวจเช็คยางรถยนต์"
              },
              details: [
                'https://firebasestorage.googleapis.com/v0/b/agingeco.appspot.com/o/content%2Fcar-checking%2F1%2F2.png?alt=media&token=dfe9c7b0-ea04-405b-ac1b-fac76fe08242',
                'https://firebasestorage.googleapis.com/v0/b/agingeco.appspot.com/o/content%2Fcar-checking%2F1%2F3.png?alt=media&token=7897403d-7355-47e4-b257-5e17d3132c78',
                'https://firebasestorage.googleapis.com/v0/b/agingeco.appspot.com/o/content%2Fcar-checking%2F1%2F4.png?alt=media&token=bc695e89-50c5-4531-9d1a-2e38cedd8f97',
                'https://firebasestorage.googleapis.com/v0/b/agingeco.appspot.com/o/content%2Fcar-checking%2F1%2F5.png?alt=media&token=a017e120-1445-4eac-bb47-61ec1ea1f25b',
                'https://firebasestorage.googleapis.com/v0/b/agingeco.appspot.com/o/content%2Fcar-checking%2F1%2F6.png?alt=media&token=b84cb996-538d-4181-94ac-f414238d1154',
                'https://firebasestorage.googleapis.com/v0/b/agingeco.appspot.com/o/content%2Fcar-checking%2F1%2F7.png?alt=media&token=6571821d-a937-495d-8ef7-ca68ef476c4f'
              ]
            },
            {
              logo: 'https://firebasestorage.googleapis.com/v0/b/agingeco.appspot.com/o/content%2Fcar-checking%2F2%2F1.png?alt=media&token=55b466a6-b9d2-4221-9b7b-fa2d35420852',
              text: {
                en: "ตรวจเช็คระบบไฟและไฟสัญญาณ"
              },
              details: [
                'https://firebasestorage.googleapis.com/v0/b/agingeco.appspot.com/o/content%2Fcar-checking%2F2%2F2.png?alt=media&token=6c1259b3-50f8-4ecf-814c-e3b732c22a3c',
                'https://firebasestorage.googleapis.com/v0/b/agingeco.appspot.com/o/content%2Fcar-checking%2F2%2F3.png?alt=media&token=38968b2e-e332-46a3-b460-0a705ad6c782',
                'https://firebasestorage.googleapis.com/v0/b/agingeco.appspot.com/o/content%2Fcar-checking%2F2%2F4.png?alt=media&token=0696102a-0474-4914-91f5-185efc6d82d4',
                'https://firebasestorage.googleapis.com/v0/b/agingeco.appspot.com/o/content%2Fcar-checking%2F2%2F5.png?alt=media&token=4f679f64-82f0-4b05-850c-9a8d67ad7dd5',
                'https://firebasestorage.googleapis.com/v0/b/agingeco.appspot.com/o/content%2Fcar-checking%2F2%2F6.png?alt=media&token=dba1220c-e034-4311-a8a2-4ae6ccdc41ed',
                'https://firebasestorage.googleapis.com/v0/b/agingeco.appspot.com/o/content%2Fcar-checking%2F2%2F7.png?alt=media&token=1c1a70c5-b1fe-4a23-b18b-e20fa7c1dec1'
              ]
            },
            {
              logo: 'https://firebasestorage.googleapis.com/v0/b/agingeco.appspot.com/o/content%2Fcar-checking%2F3%2F1.png?alt=media&token=53ff733a-ead0-4a98-953b-ab4633ee5379',
              text: {
                en: "ตรวจเช็คระบบปัดน้ำฝน"
              },
              details : [
                'https://firebasestorage.googleapis.com/v0/b/agingeco.appspot.com/o/content%2Fcar-checking%2F3%2F2.png?alt=media&token=4f09ac58-fcb0-4765-8c36-2e6a05fff00d',
                'https://firebasestorage.googleapis.com/v0/b/agingeco.appspot.com/o/content%2Fcar-checking%2F3%2F2.png?alt=media&token=4f09ac58-fcb0-4765-8c36-2e6a05fff00d',
                'https://firebasestorage.googleapis.com/v0/b/agingeco.appspot.com/o/content%2Fcar-checking%2F3%2F3.png?alt=media&token=9195ca02-b87f-475f-b1d4-39ea9a080249',
                'https://firebasestorage.googleapis.com/v0/b/agingeco.appspot.com/o/content%2Fcar-checking%2F3%2F5.png?alt=media&token=04033fb4-039e-4575-ab63-384ac6caae05',
                'https://firebasestorage.googleapis.com/v0/b/agingeco.appspot.com/o/content%2Fcar-checking%2F3%2F6.png?alt=media&token=62b35281-b7ab-4e59-a050-c008532d1c41'
              ]
            },
          ]
        }
      },

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

  navigateContentList(item) {
    if (item.destination) {
      this.navCtrl.push(item.destination.page, { payload: item.destination.payload ,title : item.text.en });
      return;
    }
  }

}
