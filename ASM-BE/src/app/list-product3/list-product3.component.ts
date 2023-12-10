import { Component } from '@angular/core';
import { ProductService } from '../Server/product.service';

@Component({
  selector: 'app-list-product3',
  templateUrl: './list-product3.component.html',
  styleUrls: ['./list-product3.component.css']
})
export class ListProduct3Component {
  products:any

  constructor(private productService:ProductService){
    this.products=productService.getListProduct()
  }
}
