import { Component } from '@angular/core';
import { CustomerhttpService } from '../Server/customerhttp.service';

@Component({
  selector: 'app-exercise93',
  templateUrl: './exercise93.component.html',
  styleUrls: ['./exercise93.component.css']
})
export class Exercise93Component {
  customer:any=null
  constructor(private cus:CustomerhttpService)
  {
    this.cus.getProducts().subscribe({
      next:(data) => {this.customer=data}
    })
  }
}
