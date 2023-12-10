import { Component } from '@angular/core';
import { FashionApiService } from '../Server/fashion-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css']
})
export class FashionComponent {
  fashions: any;
  errMessage: string = ''
  constructor(private _service: FashionApiService, private router: Router, private activateRoute: ActivatedRoute)
   {
    this._service.getFashions().subscribe({
      next: (data) => { this.fashions = data },
      error: (err) => { this.errMessage = err }
    })
  }
  // deleteFashion(Id: any) {
  //   if (window.confirm('Bạn có chắc muốn xóa giáo trình này?')) {
  //     this._service.deleteFashion(id).subscribe({
  //       next: (data) => { this.curriculums = data; },
  //       error: (err) => {
  //         this.errMessage = err;
  //         console.log('Error Message:', this.errMessage); // Add this line
  //       }
  //     });
  //   }
  // }
}