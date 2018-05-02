import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsSalelistPage } from '../tabs/tabs-salelist';
//全部任务弹层页面
import { TaskPopoverPage } from '../../pages/task-popover/task-popover';
//导入弹层控件
import {PopoverController } from 'ionic-angular';

@Component({
  selector: 'page-salelist',
  templateUrl: 'salelist.html'
})
export class SalelistPage {
  salelistTabPage:any = TabsSalelistPage;
  constructor(public popoverCtrl:PopoverController,public navCtrl: NavController) {

  }
  //显示全部任务的弹窗页面
  showAllTask(myEvent){
    let popover=this.popoverCtrl.create(TaskPopoverPage);
    popover.present({
      ev:myEvent
    });
  }
}
