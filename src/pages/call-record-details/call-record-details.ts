import { Component } from '@angular/core';
import { IonicPage, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the CallRecordDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-call-record-details',
  templateUrl: 'call-record-details.html',
})
export class CallRecordDetailsPage {

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }
   //头部导航栏的返回
   goBack(){
    this.viewCtrl.dismiss();
  }
}
