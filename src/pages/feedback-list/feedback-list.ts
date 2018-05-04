import { Component } from '@angular/core';
import { IonicPage, ModalController,NavParams,ViewController } from 'ionic-angular';
//外呼结果页面
import { CallStatePage } from '../call-state/call-state';
//根组件页面
import { MyApp } from '../../app/app.component';

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
  constructor(
    public modalCtrl:ModalController,
    private params: NavParams,
    public viewCtrl: ViewController
  ) {
    this.checkedVal=params.get("checkedVal")||"营销成功";
  }

  ionViewDidLoad() {
  }

  //头部导航栏的返回
  goBack(){
    this.viewCtrl.dismiss();
  }

  //跳转到外呼结果页面
  selectState(){
    let callStateModal=this.modalCtrl.create(CallStatePage,{checkedVal:this.checkedVal});
    callStateModal.onDidDismiss(data=>{
      this.checkedVal=data.checkedVal;
    })
    callStateModal.present();
  }

  //确定事件
  sure(){
    let salelistModal=this.modalCtrl.create(MyApp);
    salelistModal.present();
  }
}
