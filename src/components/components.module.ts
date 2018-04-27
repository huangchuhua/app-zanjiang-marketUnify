import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//获取任务的组件
import { GetTaskComponent } from './sale-components/get-task/get-task';
//营销任务列表的组件
import { SalelTaskListComponent } from './sale-components/salel-task-list/salel-task-list';
//外呼记录的组件
import { CallRecordListComponent } from './call-components/call-record-list/call-record-list';
@NgModule({
	declarations: [
		GetTaskComponent,
		SalelTaskListComponent,
    	CallRecordListComponent
	],
	imports: [BrowserModule],
	exports: [
		GetTaskComponent,
		SalelTaskListComponent,
    	CallRecordListComponent
	]
})
export class ComponentsModule {}
