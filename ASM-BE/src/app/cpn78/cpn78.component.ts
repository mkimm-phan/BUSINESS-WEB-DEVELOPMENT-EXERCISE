import { Component } from '@angular/core';

@Component({
  selector: 'app-cpn78',
  templateUrl: './cpn78.component.html',
  styleUrls: ['./cpn78.component.css']
})
export class Cpn78Component {
  myVar = 'Hello Angular';
  
  getMyVar() {
    return this.myVar;
  } 
}
