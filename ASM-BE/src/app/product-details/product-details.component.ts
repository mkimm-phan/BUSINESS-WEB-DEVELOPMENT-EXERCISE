import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  productIdfromList=""
  constructor(private activeRoute:ActivatedRoute, private router: Router){
    activeRoute.paramMap.subscribe(
      (params) =>{
        let productid = params.get('id');
        if (productid !=null)
        {
          this.productIdfromList=productid
        }

      }
    )
  }
}
