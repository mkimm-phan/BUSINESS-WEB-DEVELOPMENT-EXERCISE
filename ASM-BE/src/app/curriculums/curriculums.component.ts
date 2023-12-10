import { Component } from '@angular/core';
import { CurriculumService } from '../curriculum..service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-curriculums',
  templateUrl: './curriculums.component.html',
  styleUrls: ['./curriculums.component.css']
})
export class CurriculumsComponent {
  curriculums: any;
  errMessage: string = '';

  constructor(private _service: CurriculumService, private router: Router, private activateRoute: ActivatedRoute) {
    this._service.getCurriculums().subscribe({
      next: (data) => { this.curriculums = data; },
      error: (err) => {
        this.errMessage = err;
        console.log('Error Message:', this.errMessage); // Add this line
      }
    });
  }

  deleteCurriculum(Id: any) {
    if (window.confirm('Bạn có chắc muốn xóa giáo trình này?')) {
      this._service.deleteCurriculum(Id).subscribe({
        next: (data) => { this.curriculums = data; },
        error: (err) => {
          this.errMessage = err;
          console.log('Error Message:', this.errMessage); // Add this line
        }
      });
    }
  }
}
