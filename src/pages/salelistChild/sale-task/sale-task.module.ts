import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SaleTaskPage } from './sale-task';

@NgModule({
  declarations: [
    SaleTaskPage,
  ],
  imports: [
    IonicPageModule.forChild(SaleTaskPage),
  ],
})
export class SaleTaskPageModule {}
