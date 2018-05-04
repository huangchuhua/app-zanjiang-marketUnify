import { Component } from '@angular/core';
import { IonicPage, ModalController, ViewController, NavParams } from 'ionic-angular';

import { FeedbackListPage } from '../../pages/feedback-list/feedback-list';

/**
 * Generated class for the TaskDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-task-details',
  templateUrl: 'task-details.html',
})
export class TaskDetailsPage {

  constructor(
    public modalCtrl: ModalController,
    public viewCtrl: ViewController,
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
  }
  //头部导航栏的返回
  goBack(){
    this.viewCtrl.dismiss();
  }
  //跳转到回单页面
  feedbackList(){
    let modal=this.modalCtrl.create(FeedbackListPage);
    modal.present();
  }
}
