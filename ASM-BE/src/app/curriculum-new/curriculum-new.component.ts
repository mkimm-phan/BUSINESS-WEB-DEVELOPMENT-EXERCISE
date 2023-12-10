import { Component } from '@angular/core';
import { BookService } from '../Server/book.service';
import { FormControl, FormGroup } from '@angular/forms';
import { CurriculumService } from '../curriculum..service';
import { Curriculum } from '../Interface/curriculum'; 
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-curriculum-new',
  templateUrl: './curriculum-new.component.html',
  styleUrls: ['./curriculum-new.component.css']
})
export class CurriculumNewComponent {
  curriculum=new Curriculum();
  curriculums:any
  errMessage:string=''
  constructor(private _service: CurriculumService, private router: Router, private activateRoute: ActivatedRoute){
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
    this.router.navigate(['curriculum']);
  }
}
