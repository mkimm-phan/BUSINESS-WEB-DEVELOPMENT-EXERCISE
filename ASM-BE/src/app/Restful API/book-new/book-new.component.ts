import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curriculum } from 'src/app/Interface/Book';
import { Book2 } from 'src/app/Interface/Books';
import { BookService } from 'src/app/Server/book.service';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css']
})
export class BookNewComponent1{
  curriculum=new Curriculum();
  curriculums:any
  errMessage:string=''
  constructor(private _service: BookService, private router: Router, private activateRoute: ActivatedRoute){
  this._service.getCurriculums().subscribe({
    next:(data)=>{this.curriculums=data},
    error:(err)=>{this.errMessage=err}
    })
  }
  postCurriculum()
  {
    this._service.postCurriculum(this.curriculum).subscribe({
      next:(data)=>{this.curriculums=data},
      error:(err)=>{this.errMessage=err}
      })
    alert('Thêm giáo trình thành công');
    this.goBack();
  }
  
  goBack() {
    this.router.navigate(['API']);
  }
}
