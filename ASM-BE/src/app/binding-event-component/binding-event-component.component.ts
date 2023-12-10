import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-event-component',
  templateUrl: './binding-event-component.component.html',
  styleUrls: ['./binding-event-component.component.css']
})
export class BindingEventComponentComponent {

    hsa: number;
    hsb: number;
    ketqua: number;
  
    constructor() {
      this.hsa = 0;
      this.hsb = 0;
      this.ketqua = 0;
    }
  
    Plus() {
      this.ketqua = this.hsa + this.hsb;
    }
  
    Subtract() {
      this.ketqua = this.hsa - this.hsb;
    }
  
    Multiply() {
      this.ketqua = this.hsa * this.hsb; 
    }
  
    Divide() {
      this.ketqua = this.hsa / this.hsb;
    }
    
    Reset() {
      this.hsa=0;
      this.hsb=0;
      this.ketqua=0;
    }
  onClick(event: any){
    alert(event.pointerId)
  }
  onSubmit(value:string){
    alert(value)
  }

}
