import { Component } from '@angular/core';
import { FashionApiService } from '../Server/fashion-api.service';
import { Fashion } from '../Interface/Fashion';

@Component({
  selector: 'app-fashion-detail',
  templateUrl: './fashion-detail.component.html',
  styleUrls: ['./fashion-detail.component.css']
})
export class FashionDetailComponent {
  fashion: any = null;
  errMessage: string = ''
  constructor(private _service: FashionApiService) {
  }
  searchFashion(id: string) {
    this._service.getFashion(id).subscribe({
      next: (data) => { this.fashion = data },
      error: (err) => { this.errMessage = err }
    })
  }
}
