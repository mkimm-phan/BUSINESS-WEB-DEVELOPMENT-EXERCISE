import { Component } from '@angular/core';
import { ProductHttpService1Service } from '../Server/product-http-service1.service';

@Component({
  selector: 'app-service-product-http-handle-error',
  templateUrl: './service-product-http-handle-error.component.html',
  styleUrls: ['./service-product-http-handle-error.component.css']
})
export class ServiceProductHttpHandleErrorComponent {
  products:any
  errMessage:string=''
  constructor(_service:ProductHttpService1Service){
  _service.getProductsHandleError().subscribe({
  next:(data)=>{this.products=data},
  error:(err)=>{this.errMessage=err}
  })
  }
}
