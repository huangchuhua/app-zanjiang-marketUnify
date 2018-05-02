import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
//外呼记录详情页面
import { CallRecordDetailsPage } from '../../../pages/call-record-details/call-record-details';

/**
 * Generated class for the CallRecordListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'call-record-list',
  templateUrl: 'call-record-list.html'
})
export class CallRecordListComponent {

  constructor(public modalCtrl:ModalController) {
  }

  checkDetails(){
    let modal = this.modalCtrl.create(CallRecordDetailsPage);
    modal.present();
  }

}
