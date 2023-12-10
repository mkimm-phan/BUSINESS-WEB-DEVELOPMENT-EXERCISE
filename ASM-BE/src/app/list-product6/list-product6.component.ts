import { Component } from '@angular/core';
import { ProductService } from '../Server/product.service';

@Component({
  selector: 'app-list-product6',
  templateUrl: './list-product6.component.html',
  styleUrls: ['./list-product6.component.css']
})
export class ListProduct6Component {
  filterProducts:any=null

  constructor(private ps:ProductService){

  }

  searchProduct(min:string, max:string){
    let v1=parseFloat(min)
    let v2=parseFloat(max)
    this.filterProducts=this.ps.searchProduct(v1,v2)
  }
}
