import { Component } from '@angular/core';
import { IonicPage, ModalController,NavParams } from 'ionic-angular';
//营销单页面
import { SalelistPage } from '../salelist/salelist';
//外呼结果页面
import { CallStatePage } from '../call-state/call-state';

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
  //声明外呼结果
  checkedVal:string;
  constructor(public modalCtrl:ModalController,private params: NavParams) {
    this.checkedVal=params.get("checkedVal")||"营销成功";
  }

  ionViewDidLoad() {
  }
  //头部导航栏的返回
  goBack(){
    let modal=this.modalCtrl.create(SalelistPage);
    modal.present();
  }
  //跳转到外呼结果页面
  selectState(){
    let modal=this.modalCtrl.create(CallStatePage);
    modal.present();
  }
}
