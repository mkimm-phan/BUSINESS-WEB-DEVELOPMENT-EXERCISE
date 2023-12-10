import { Component } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {
  products=[ {"ProductID":"p1",
              "ProductName":"Coca",
              "Price":11},

              {"ProductID":"p2",
              "ProductName":"Pepsi",
              "Price":11},

              {"ProductID":"p3",
              "ProductName":"String",
              "Price":12}
            ]
}
