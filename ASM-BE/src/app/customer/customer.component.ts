import { Component } from '@angular/core';
import { Customer } from '../Interface/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  customer = new Customer("My Kim","kimptm@gmail.com","567890","refeefr")
  processInformation(){
    alert(this.customer.name)
  }
}
