import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-two-way-component',
  templateUrl: './binding-two-way-component.component.html',
  styleUrls: ['./binding-two-way-component.component.css']
})
export class BindingTwoWayComponentComponent {
  public name:string=""
  public address:string=""
  public email:string = ""; 
  public phone:string = "";
  setDefaultAddress(){
    this.name = "Default Name";
    this.email = "name@example.com";
    this.phone = "555-1234"; 
    this.address = "123 Main St";
  }
}
