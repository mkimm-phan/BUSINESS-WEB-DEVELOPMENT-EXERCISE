import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../Server/product.service';

@Component({
  selector: 'app-service-product-image-event',
  templateUrl: './service-product-image-event.component.html',
  styleUrls: ['./service-product-image-event.component.css']
})
export class ServiceProductImageEventComponent {
  public products:any
  
}
