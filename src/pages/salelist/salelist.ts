import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsSalelistPage } from '../tabs/tabs-salelist';

@Component({
  selector: 'page-salelist',
  templateUrl: 'salelist.html'
})
export class SalelistPage {
  salelistTabPage:any = TabsSalelistPage;
  constructor(public navCtrl: NavController) {

  }
  
}
