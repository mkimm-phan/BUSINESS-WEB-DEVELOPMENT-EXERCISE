import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumUpdateComponent } from './curriculum-update.component';

describe('CurriculumUpdateComponent', () => {
  let component: CurriculumUpdateComponent;
  let fixture: ComponentFixture<CurriculumUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurriculumUpdateComponent]
    });
    fixture = TestBed.createComponent(CurriculumUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
