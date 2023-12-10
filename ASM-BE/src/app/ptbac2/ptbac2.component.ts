import { Component } from '@angular/core';

@Component({
  selector: 'app-ptbac2',
  templateUrl: './ptbac2.component.html',
  styleUrls: ['./ptbac2.component.css']
})
export class Ptbac2Component {
  findSolution(){
    let a=parseFloat(this.hsa)
    let b=parseFloat(this.hsb)
    let c=parseFloat(this.hsc)
    let delta = b*b - 4*a*c;

    if(delta < 0) {
      this.ketqua = "VSN";
    } else if (delta == 0) {
      this.ketqua = "VNghiem";
    } else {
      this.ketqua = "x1=" + (-b + Math.sqrt(delta)) / (2*a) + 
                  "x2=" + (-b - Math.sqrt(delta)) / (2*a); 
    }
      }
  // binding 2way neu de number se mac dinh la 0
  public hsa:string=""
  public hsb:string=""
  public hsc:string=""
  public ketqua:string=""

}
