import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CallRecordPage } from './call-record';

@NgModule({
  declarations: [
    CallRecordPage,
  ],
  imports: [
    IonicPageModule.forChild(CallRecordPage),
  ],
})
export class CallRecordPageModule {}
