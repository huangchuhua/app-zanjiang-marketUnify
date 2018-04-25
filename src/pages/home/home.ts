import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsHomePage } from '../tabs/tabs-home';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  homePage:any = TabsHomePage;
  constructor(public navCtrl: NavController) {

  }

}
