import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeCallRecordPage } from './home-call-record';

@NgModule({
  declarations: [
    HomeCallRecordPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeCallRecordPage),
  ],
})
export class HomeCallRecordPageModule {}
