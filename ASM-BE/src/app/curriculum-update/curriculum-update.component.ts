import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Curriculum } from '../Interface/Book';
import { CurriculumService } from '../curriculum..service';

@Component({
  selector: 'app-curriculum-update',
  templateUrl: './curriculum-update.component.html',
  styleUrls: ['./curriculum-update.component.css']
})
export class CurriculumUpdateComponent {
  curriculum = new Curriculum();
  curriculums: any;
  errMessage: string = ''
  constructor(private _service: CurriculumService, private router: Router, private activateRoute: ActivatedRoute) {
    activateRoute.paramMap.subscribe((param) => {
      let id = param.get('id');
      if (id != null) {
        this.searchCurriculum(id);
      }
    });
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
  putCurriculum() {
    this._service.putCurriculum(this.curriculum).subscribe({
      next: (data) => { this.curriculums = data },
      error: (err) => { this.errMessage = err }
    })
    alert('Sửa giáo trình thành công');
    this.goBack();
  }
  goBack() {
    this.router.navigate(['curriculum']);
  }
}