import { Component,ViewChildren,ElementRef,Renderer,QueryList} from '@angular/core';

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

  @ViewChildren('list') listEle:QueryList<ElementRef>;

  constructor(el: ElementRef, renderer: Renderer) {
  }
  //显示与隐藏更多字段点击事件
  upAndDown(id){
    let itemArr=this.listEle.last.nativeElement.children;
    let arrow_btn=itemArr[id].children[0].children[1];
    let content=itemArr[id].children[1];
    console.log(arrow_btn,content);
    
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
  ngOnInit(){
    // console.log(999)
  }
}
