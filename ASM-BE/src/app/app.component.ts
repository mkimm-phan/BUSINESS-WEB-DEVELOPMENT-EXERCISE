import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ASM-BE';
  welcomeMessage='Hey Guest'
  DataFromOtherCompopnent:any=null
  myValue = 100
  MyvalueFromComponent: any=null
}
