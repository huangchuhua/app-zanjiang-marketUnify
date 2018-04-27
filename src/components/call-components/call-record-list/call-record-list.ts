import { Component } from '@angular/core';

/**
 * Generated class for the CallRecordListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'call-record-list',
  templateUrl: 'call-record-list.html'
})
export class CallRecordListComponent {

  text: string;

  constructor() {
    console.log('Hello CallRecordListComponent Component');
    this.text = 'Hello World';
  }

}
