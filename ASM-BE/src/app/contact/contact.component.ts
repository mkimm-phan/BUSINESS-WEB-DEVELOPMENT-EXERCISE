import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  //
  @Input("AppComponentData") public DataFromAppComponent:any
  @Input ("MyValue") public MyValue:any
  @Output () public childEvent= new EventEmitter()
  sendDataToAppComponent()
  {
    let data={"id":123,
              "name":"Coca", 
              "price":15000
            }
    this.childEvent.emit(data)
  }
}
