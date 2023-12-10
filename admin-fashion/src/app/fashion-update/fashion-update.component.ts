import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fashion } from '../interfaces/Fashion';
import { AdminFashionService } from '../services/admin-fashion.service';
import { CKEditor4 } from 'ckeditor4-angular';


@Component({
  selector: 'app-fashion-update',
  templateUrl: './fashion-update.component.html',
  styleUrls: ['./fashion-update.component.css']
})
export class FashionUpdateComponent {
  
  fashion = new Fashion();
  fashions: any;
  errMessage: string = ''
  constructor(private _service: AdminFashionService, private router: Router, private activateRoute: ActivatedRoute) {
    activateRoute.paramMap.subscribe((param) => {
      let id = param.get('id');
      if (id != null) {
        this.searchFashion(id);
      }
    });
  }
  public setFashion(f: Fashion) {
    this.fashion = f
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
    alert('Edit fashion success');
    this.goBack();
  }
  goBack() {
    this.router.navigate(['fashions']);
  }
  onFileSelected(event: any, fashion: Fashion) {
    let me = this;
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      fashion.fashion_image = reader.result!.toString();
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
  
  // public editorConfig: Editor.Config = {
    // autoParagraph: false, // Tắt tính năng tự động thêm thẻ <p>
  // };
  // ngOnInit(): void {
  //   CKEditor4.('editor1', {
  //     autoParagraph: false
  //   });
  // }

}
