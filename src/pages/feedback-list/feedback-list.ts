import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { SalelistPage } from '../salelist/salelist';

/**
 * Generated class for the FeedbackListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedback-list',
  templateUrl: 'feedback-list.html',
})
export class FeedbackListPage {

  constructor(public modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
  }
  //返回
  goBack(){
    let modal=this.modalCtrl.create(SalelistPage);
    modal.present();
  }
}
