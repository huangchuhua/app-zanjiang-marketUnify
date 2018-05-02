import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CallRecordDetailsPage } from './call-record-details';

@NgModule({
  declarations: [
    CallRecordDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CallRecordDetailsPage),
  ],
})
export class CallRecordDetailsPageModule {}
