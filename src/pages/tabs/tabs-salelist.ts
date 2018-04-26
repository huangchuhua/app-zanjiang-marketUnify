import { Component } from '@angular/core';
//首页下的tab页面
import { SaleTaskPage } from '../salelistChild/sale-task/sale-task';
import { CallRecordPage } from '../salelistChild/call-record/call-record';


@Component({
  templateUrl: 'tabs-salelist.html'
})
export class TabsSalelistPage {
  //home组件的tab数组
  tabSalelists:object;

  constructor() {
    this.tabSalelists=[
      {
        root:SaleTaskPage,
        tabTitle:'营销任务',
        tabIcon:''
      },
      {
        root:CallRecordPage,
        tabTitle:'外呼记录',
        tabIcon:''
      }
    ]
  }
}
