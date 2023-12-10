import { Component, OnInit } from '@angular/core';
// import { Book } from '../Interface/Book';
// import { Curriculum } from '../Interface/';
import { BookApiService } from '../Server/book-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../Server/book.service';

@Component({
  selector: 'app-restful-api-self-study',
  templateUrl: './restful-api-self-study.component.html',
  styleUrls: ['./restful-api-self-study.component.css']
})
export class RestfulAPISelfStudyComponent {
  curriculums:any;
  errMessage:string=''
  constructor(private _service: BookService, private router: Router, private activateRoute: ActivatedRoute){
  this._service.getCurriculums().subscribe({
  next:(data)=>{this.curriculums=data},
  error:(err)=>{this.errMessage=err}
    })
  }
  deleteCurriculum(Id: any) {
    if (window.confirm('Bạn có chắc muốn xóa giáo trình này?')) {
      this._service.deleteCurriculum(Id).subscribe({
        next:(data)=>{this.curriculums=data},
        error:(err)=>{this.errMessage=err}
      })
    };
  }
}

