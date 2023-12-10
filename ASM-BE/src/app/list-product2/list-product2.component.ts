import { Component } from '@angular/core';

@Component({
  selector: 'app-list-product2',
  templateUrl: './list-product2.component.html',
  styleUrls: ['./list-product2.component.css']
})
export class ListProduct2Component {
  products=[ {"ProductID":"p1",
  "ProductName":"Coca",
  "Price":11},

  {"ProductID":"p2",
  "ProductName":"Pepsi",
  "Price":11},

  {"ProductID":"p3",
  "ProductName":"String",
  "Price":11}
]
}
