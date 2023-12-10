// fashionnew.component.ts
import { Component } from '@angular/core';
import { FashionApiService } from '../Server/fashion-api.service';
import { Fashion } from '../Interface/Fashion';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-fashion-new',
  templateUrl: './fashion-new.component.html',
  styleUrls: ['./fashion-new.component.css']
})
export class FashionNewComponent {
  fashion: Fashion = {
    style: '',
    fashion_subject: '',
    fashion_detail: '',
    fashion_image: '',
    _id: undefined
  };
  errMessage: string = '';

  constructor(private _service: FashionApiService,  private router: Router, private activateRoute: ActivatedRoute) {}

  onFileSelected(event: any, fashion: Fashion) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      fashion.fashion_image = reader.result as string;
    };

    reader.readAsDataURL(file);
  }

  postFashion() {
    this._service.postFashion(this.fashion).subscribe({
      next: (data) => {
        this.fashion = data;
      },
      error: (err) => {
        this.errMessage = err;
      }
    });
  }
  goBack() {
    this.router.navigate(['GioiThieu']);
  }
}
