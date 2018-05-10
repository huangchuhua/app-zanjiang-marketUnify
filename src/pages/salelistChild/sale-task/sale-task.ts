import { Component,ViewChildren,ElementRef,Renderer,QueryList } from '@angular/core';
import { IonicPage, ModalController, NavParams } from 'ionic-angular';
//回单页面
import { FeedbackListPage } from '../../../pages/feedback-list/feedback-list';
//任务详情页面
import { TaskDetailsPage } from '../../../pages/task-details/task-details';

/**
 * Generated class for the HomeSaleTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sale-task',
  templateUrl: 'sale-task.html',
})
export class SaleTaskPage {
  hasTask:boolean=false;
  @ViewChildren('list') listEle:QueryList<ElementRef>;

  constructor(
    el: ElementRef, 
    renderer: Renderer,
    public modalCtrl: ModalController
  ) {
  }

  ionViewDidLoad() {
  }
  //显示与隐藏更多字段点击事件
  upAndDown(id){
    let itemArr=this.listEle.last.nativeElement.children;
    let arrow_btn=itemArr[id].children[0].children[1];
    let content=itemArr[id].children[1];
    
    if(arrow_btn.classList.contains("arrow_down")){
      arrow_btn.classList.remove("arrow_down");
      arrow_btn.classList.add("arrow_up");
      //改变字段的高度
      content.style.height="auto";
    }else{
      arrow_btn.classList.remove("arrow_up");
      arrow_btn.classList.add("arrow_down");
      //改变字段的高度
      content.style.height="95px";
    }
  }
  
  /**回单事件 */
  feedbackList(){
    let feedbackModal=this.modalCtrl.create(FeedbackListPage);
    feedbackModal.present();
  }

  /**查看任务详情 */
  getDetails(){
    let taskDetailsModal=this.modalCtrl.create(TaskDetailsPage);
    taskDetailsModal.present();
  }
  
}
