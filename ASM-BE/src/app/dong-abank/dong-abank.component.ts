import { Component } from '@angular/core';
import { DongABankService } from '../Server/dong-abank.service';

@Component({
  selector: 'app-dong-abank',
  templateUrl: './dong-abank.component.html',
  styleUrls: ['./dong-abank.component.css']
})
export class DongAbankComponent {
  data: any
  errMessage: string=""
  
  constructor(_service: DongABankService) {
    _service.getDongABankData().subscribe({
      next: (data) => {
        this.data = data
      },
      error: (err)=> {
        this.errMessage = err.message
      }
    })
    
  }
}
