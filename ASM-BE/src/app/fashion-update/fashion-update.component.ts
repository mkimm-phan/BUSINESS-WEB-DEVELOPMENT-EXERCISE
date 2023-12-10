import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Fashion } from '../Interface/Fashion';
import { FashionApiService } from '../Server/fashion-api.service';

@Component({
  selector: 'app-fashion-update',
  templateUrl: './fashion-update.component.html',
  styleUrls: ['./fashion-update.component.css']
})
export class FashionUpdateComponent {
  fashion = new Fashion();
  fashions: any;
  errMessage: string = ''
  constructor(private _service: FashionApiService, private router: Router, private activateRoute: ActivatedRoute) {
    activateRoute.paramMap.subscribe((param) => {
      let id = param.get('id');
      if (id != null) {
        this.searchFashion(id);
      }
    });
  }
  searchFashion(Id: string) {
    this._service.getFashion(Id).subscribe({
      next: (data) => {
        this.fashion = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }
  putFashion() {
    this._service.putFashion(this.fashion).subscribe({
      next: (data) => { this.fashions = data },
      error: (err) => { this.errMessage = err }
    })
    alert('Sửa thành công');
    this.goBack();
  }
  goBack() {
    this.router.navigate(['GioiThieu']);
  }
}
