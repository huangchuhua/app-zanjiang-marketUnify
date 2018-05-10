import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//双向数据绑定
import { FormsModule } from '@angular/forms';

import { MyselfPage } from '../pages/myself/myself';
import { IntegrationPage } from '../pages/integration/integration';
import { SalelistPage } from '../pages/salelist/salelist';
import { TabsPage } from '../pages/tabs/tabs';
//首页下的tab页面
import { SaleTaskPage } from '../pages/salelistChild/sale-task/sale-task';
import { CallRecordPage } from '../pages/salelistChild/call-record/call-record';
import { TabsSalelistPage } from '../pages/tabs/tabs-salelist';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//回单页面
import {FeedbackListPage } from '../pages/feedback-list/feedback-list';
//外呼结果页面
import { CallStatePage } from '../pages/call-state/call-state';
//任务详情页面
import { TaskDetailsPage } from '../pages/task-details/task-details';
//全部任务弹层页面
import { TaskPopoverPage } from '../pages/task-popover/task-popover';
//外呼记录详情
import { CallRecordDetailsPage } from '../pages/call-record-details/call-record-details';

@NgModule({
  declarations: [
    MyApp,
    MyselfPage,
    IntegrationPage,
    SalelistPage,
    TabsPage,
    CallRecordPage,
    SaleTaskPage,
    TabsSalelistPage,
    FeedbackListPage,
    CallStatePage,
    TaskDetailsPage,
    TaskPopoverPage,
    CallRecordDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{mode:'ios'/*配置android ios使用一套样式*/}),
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyselfPage,
    IntegrationPage,
    SalelistPage,
    TabsPage,
    CallRecordPage,
    SaleTaskPage,
    TabsSalelistPage,
    FeedbackListPage,
    CallStatePage,
    TaskDetailsPage,
    TaskPopoverPage,
    CallRecordDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
