import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the TaskPopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-task-popover',
  templateUrl: 'task-popover.html',
})
export class TaskPopoverPage {

  constructor(public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
  }
  close(){
    console.log(110)
    this.viewCtrl.dismiss();
  }

}
