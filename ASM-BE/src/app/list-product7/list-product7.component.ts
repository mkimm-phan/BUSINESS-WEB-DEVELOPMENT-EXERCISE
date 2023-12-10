import { Component } from '@angular/core';
import { ProductService } from '../Server/product.service';
import { ProducthttpService } from '../Server/producthttp.service';


@Component({
  selector: 'app-list-product7',
  templateUrl: './list-product7.component.html',
  styleUrls: ['./list-product7.component.css']
})
export class ListProduct7Component {
  products:any=null
  constructor(private ps:ProducthttpService)
  {
    this.ps.getProducts().subscribe({
      next:(data) => {this.products=data}
    })
  }
}
