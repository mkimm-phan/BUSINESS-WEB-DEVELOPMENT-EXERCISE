import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumNewComponent } from './curriculum-new.component';

describe('CurriculumNewComponent', () => {
  let component: CurriculumNewComponent;
  let fixture: ComponentFixture<CurriculumNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurriculumNewComponent]
    });
    fixture = TestBed.createComponent(CurriculumNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
