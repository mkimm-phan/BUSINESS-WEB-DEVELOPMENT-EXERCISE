import { Component } from '@angular/core';
import { ProductService } from '../Server/product.service';

@Component({
  selector: 'app-list-product4',
  templateUrl: './list-product4.component.html',
  styleUrls: ['./list-product4.component.css']
})
export class ListProduct4Component {
  products:any
  constructor(ps:ProductService){
    this.products=ps.getListProduct()
  }
}
