import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-emergency-number',
  templateUrl: 'emergency-number.html',
})
export class EmergencyNumberPage {

  public numbers = [
    {
      title: 'แจ้งเหตุสาธารณะภัย',
      number: '198'
    },
    {
      title: 'หน่วยแพทย์กู้ชีพ กทม',
      number: '1555'
    },
    {
      title: 'สายด่วนอุบัติเหตุ จส 100',
      number: '1808'
    },
    {
      title: 'ร่วมด้วยช่วนกัน',
      number: '1677'
    },
    {
      title: 'แจ้งรถหาย',
      number: '1192'
    }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmergencyNumberPage');
  }

}
