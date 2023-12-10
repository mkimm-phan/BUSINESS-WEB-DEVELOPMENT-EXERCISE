import { Component } from '@angular/core';
import { ProductHttpService } from '../Server/product-http.service';

@Component({
  selector: 'app-exercise90-httpservice',
  templateUrl: './exercise90-httpservice.component.html',
  styleUrls: ['./exercise90-httpservice.component.css']
})
export class Exercise90HttpserviceComponent {
  products:any=null;
  
  constructor(private _service: ProductHttpService){
    this._service.getProducts().subscribe({
      next: (data: any) => {
        console.log(data); // Check if data is logged correctly
        this.products = data;
      }
    })
  } 
}
