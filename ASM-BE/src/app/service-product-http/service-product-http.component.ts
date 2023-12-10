import { Component } from '@angular/core';
import { ProductHttpService1Service } from '../Server/product-http-service1.service';

@Component({
  selector: 'app-service-product-http',
  templateUrl: './service-product-http.component.html',
  styleUrls: ['./service-product-http.component.css']
})
export class ServiceProductHttpComponent {
  products:any=null
  constructor(private ps:ProductHttpService1Service)
  {
    this.ps.getProducts().subscribe({
      next:(data) => {this.products=data}
    })
  }
}
