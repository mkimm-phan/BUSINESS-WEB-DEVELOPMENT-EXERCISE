import { Component } from '@angular/core';

@Component({
  selector: 'app-ptbac1',
  templateUrl: './ptbac1.component.html',
  styleUrls: ['./ptbac1.component.css']
})
export class Ptbac1Component {
  xulygiai(){
    let a=parseFloat(this.hsa)
    let b=parseFloat(this.hsb)
    if (a==0 && b==0)
    {
      this.ketqua="VSN"
    }
    else if (a==0 && b!=0)
    {
      this.ketqua="VNghiem"
    }
    else
    {
      this.ketqua="x=" + (-b/a)
    }
  }
  // binding 2way neu de number se mac dinh la 0
  public hsa:string=""
  public hsb:string=""
  public ketqua:string=""
}
