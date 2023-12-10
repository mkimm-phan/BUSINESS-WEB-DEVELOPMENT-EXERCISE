import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CurriculumService } from '../curriculum..service';

@Component({
  selector: 'app-curriculum-detail',
  templateUrl: './curriculum-detail.component.html',
  styleUrls: ['./curriculum-detail.component.css']
})
export class CurriculumDetailComponent {
  curriculum:any;
  errMessage:string=''
  constructor(private _service: CurriculumService, private router: Router, private activateRoute: ActivatedRoute){
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
}
