import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise86JsonComponent } from './exercise86-json.component';

describe('Exercise86JsonComponent', () => {
  let component: Exercise86JsonComponent;
  let fixture: ComponentFixture<Exercise86JsonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise86JsonComponent]
    });
    fixture = TestBed.createComponent(Exercise86JsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
