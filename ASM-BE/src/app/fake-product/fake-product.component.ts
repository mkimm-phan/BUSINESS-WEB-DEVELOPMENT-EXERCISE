import { Component } from '@angular/core';
import { FakeproductService } from '../Server/fakeproduct.service';

@Component({
  selector: 'app-fake-product',
  templateUrl: './fake-product.component.html',
  styleUrls: ['./fake-product.component.css']
})
export class FakeProductComponent {
  data:any
  errMessage:string=''
    constructor(_service:FakeproductService){
    _service.getFakeProductData().subscribe({
      next:(data)=>{ this.data=data},
      error:(err)=>{
        this.errMessage=err
      }
    }
  )
}
}
