import { Component } from '@angular/core';
//首页下的tab页面
import { HomeSaleTaskPage } from '../home-sale-task/home-sale-task';
import { HomeCallRecordPage } from '../home-call-record/home-call-record';


@Component({
  templateUrl: 'tabs-home.html'
})
export class TabsHomePage {
  //home组件的tab数组
  tabHomes:object;

  constructor() {
    this.tabHomes=[
      {
        root:HomeSaleTaskPage,
        tabTitle:'营销任务',
        tabIcon:''
      },
      {
        root:HomeCallRecordPage,
        tabTitle:'外呼记录',
        tabIcon:''
      }
    ]
  }
}
