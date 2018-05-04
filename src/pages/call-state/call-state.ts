import { Component } from '@angular/core';
import { IonicPage,NavParams,ViewController } from 'ionic-angular';


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
  checkedVal:string;
  constructor(public params:NavParams,public viewCtrl:ViewController) {
    this.checkedVal=params.get("checkedVal");
  }

  ionViewDidLoad() {
    
  }
  //头部导航栏的返回
  goBack(){
    this.viewCtrl.dismiss({checkedVal:this.checkedVal});
  }
}
