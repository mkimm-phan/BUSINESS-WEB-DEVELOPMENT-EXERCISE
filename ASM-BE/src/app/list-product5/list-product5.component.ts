import { Component } from '@angular/core';
import { ProductService } from '../Server/product.service';

@Component({
  selector: 'app-list-product5',
  templateUrl: './list-product5.component.html',
  styleUrls: ['./list-product5.component.css']
})
export class ListProduct5Component {
  filterProducts:any
  constructor(ps:ProductService) {
    this.filterProducts=ps.searchProduct(12, 15)
  }
}
