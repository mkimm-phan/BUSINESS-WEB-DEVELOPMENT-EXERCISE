import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise90HttpserviceComponent } from './exercise90-httpservice.component';

describe('Exercise90HttpserviceComponent', () => {
  let component: Exercise90HttpserviceComponent;
  let fixture: ComponentFixture<Exercise90HttpserviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise90HttpserviceComponent]
    });
    fixture = TestBed.createComponent(Exercise90HttpserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
