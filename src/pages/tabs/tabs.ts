import { Component } from '@angular/core';

import { MyselfPage } from '../myself/myself';
import { IntegrationPage } from '../integration/integration';
import { SalelistPage } from '../salelist/salelist';


@Component({
  selector:'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  //根组件的tab数组
  tabRoots:object;

  constructor() {
    this.tabRoots=[
      {
        root:SalelistPage,
        tabTitle:'营销单',
        tabIcon:'tab-salelist'
      },
      {
        root:IntegrationPage,
        tabTitle:'积分',
        tabIcon:'tab-integration'
      },{
        root:MyselfPage,
        tabTitle:'我的',
        tabIcon:'tab-myself'
      }
    ]
  }
}
