import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

@Component({
  selector: 'page-emergency-number',
  templateUrl: 'emergency-number.html',
})
export class EmergencyNumberPage {

  public numbers = [
    {
      title: 'อุบัติเหตุและเจ็บป่วยฉุกเฉิน',
      number: '1669'
    },
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
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public phone: CallNumber
  ) {
  }

  call(item) {
    this.phone.callNumber(item.number,true);
  }

}
