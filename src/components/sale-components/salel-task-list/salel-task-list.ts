import { Component } from '@angular/core';

/**
 * Generated class for the SalelTaskListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'salel-task-list',
  templateUrl: 'salel-task-list.html'
})
export class SalelTaskListComponent {

  text: string;

  constructor() {
    console.log('Hello SalelTaskListComponent Component');
    this.text = 'Hello World';
  }

}
