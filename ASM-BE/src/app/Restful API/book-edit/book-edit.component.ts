import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curriculum } from 'src/app/Interface/Book';
// import { Book } from 'src/app/Interface/Book';
import { BookApiService } from 'src/app/Server/book-api.service';
import { BookService } from 'src/app/Server/book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  curriculum=new Curriculum();
  curriculums:any;
  errMessage:string=''
  constructor(private _service: BookService, private router: Router, private activateRoute: ActivatedRoute){
    activateRoute.paramMap.subscribe((param) => {
      let id = param.get('id');
      if (id != null) {
        this.searchCurriculum(id);
      }
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  searchCurriculum(Id: string) {
    this._service.getCurriculum(Id).subscribe({
      next: (data) => {
        this.curriculum = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }
  putCurriculum()
  {
    this._service.putCurriculum(this.curriculum).subscribe({
    next:(data)=>{this.curriculums=data},
    error:(err)=>{this.errMessage=err}
    })
    alert('Sửa giáo trình thành công');
    this.cancelEdit();
  }

  cancelEdit() {
    // Redirect to book details without saving changes
      this.router.navigate(['API']);
  }
}
