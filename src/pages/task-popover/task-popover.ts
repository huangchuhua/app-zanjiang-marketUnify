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
  //全部任务选择项
  taskListData:string=JSON.parse(localStorage.getItem("taskListData"))||"";
  constructor(public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    //隐藏弹出层的箭头
    let arrowEle=document.querySelector(".popover-arrow");
    arrowEle["style"].opacity=0;
    console.log("初始值："+this.taskListData);
  }
  //选择后关闭弹出窗
  close(event:any){
    localStorage.setItem("taskListData",JSON.stringify(this.taskListData));
    console.log(this.taskListData);
    setTimeout(()=>{
      this.viewCtrl.dismiss();
    },500)
  }
}
