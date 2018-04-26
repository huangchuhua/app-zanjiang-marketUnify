import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

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

/*组件部分*/
//注册组件
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    MyApp,
    MyselfPage,
    IntegrationPage,
    SalelistPage,
    TabsPage,
    CallRecordPage,
    SaleTaskPage,
    TabsSalelistPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{mode:'ios'/*配置android ios使用一套样式*/}),
    ComponentsModule
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
    TabsSalelistPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
