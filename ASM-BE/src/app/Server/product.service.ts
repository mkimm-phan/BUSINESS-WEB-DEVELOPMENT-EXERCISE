import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts() {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  getListProduct(){
  let products=[ {"ProductID":"p1",
  "ProductName":"Coca",
  "Price":11},

  {"ProductID":"p2",
  "ProductName":"PepSi",
  "Price":15},

  {"ProductID":"p3",
  "ProductName":"OhShi",
  "Price":14}
  ]
    return products
  }
  
  searchProduct(min:number, max:number){
    
    let products=this.getListProduct()
    let filter=products.filter(p=>p.Price>=min && p.Price<=max)
    return filter
  }
}
