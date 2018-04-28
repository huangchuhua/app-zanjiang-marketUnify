import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';


import { FeedbackListPage } from '../feedback-list/feedback-list';

/**
 * Generated class for the CallStatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-call-state',
  templateUrl: 'call-state.html',
})
export class CallStatePage {
  checkedVal:string ="有意向";
  constructor(public modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    
  }
  //头部导航栏的返回
  goBack(){
    let modal=this.modalCtrl.create(FeedbackListPage,{checkedVal:this.checkedVal});
    modal.present();
  }

  ionChange(){
    console.log(this.checkedVal)
  }
}
