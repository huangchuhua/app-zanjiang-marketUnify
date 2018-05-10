import { Component } from '@angular/core';
import { IonicPage, ModalController, NavParams } from 'ionic-angular';

//外呼记录详情页面
import { CallRecordDetailsPage } from '../../../pages/call-record-details/call-record-details';
/**
 * Generated class for the CallRecordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-call-record',
  templateUrl: 'call-record.html',
})
export class CallRecordPage {

  constructor(public modalCtrl: ModalController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CallRecordPage');
  }

  checkDetails(){
    let modal = this.modalCtrl.create(CallRecordDetailsPage);
    modal.present();
  }

}
