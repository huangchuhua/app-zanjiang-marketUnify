import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeSaleTaskPage } from './home-sale-task';

@NgModule({
  declarations: [
    HomeSaleTaskPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeSaleTaskPage),
  ],
})
export class HomeSaleTaskPageModule {}
