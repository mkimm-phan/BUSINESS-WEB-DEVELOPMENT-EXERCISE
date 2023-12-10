import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent {
  public imagesIndex: Number=1
  changeImage1(){
    this.imagesIndex=1
  }
  changeImage2(){
    this.imagesIndex=2
  }
  public fruits=["Mango", "Apple", "Banana", "Samsung"]
}
