import { Component } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent {
  // Taoj 1 bieens gias tri la Mystyle 1
  public style1:string="Mystyle1" 
  public complexstyle={
    "Mystyle1": true,
    "Mystyle3": true
  }
  // Truyeenf du lieu qua function ben html
  processClick(data: string){
    alert(data)
  }


}
