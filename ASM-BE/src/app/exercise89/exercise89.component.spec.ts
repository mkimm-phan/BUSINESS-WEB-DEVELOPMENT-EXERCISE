import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise89Component } from './exercise89.component';

describe('Exercise89Component', () => {
  let component: Exercise89Component;
  let fixture: ComponentFixture<Exercise89Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise89Component]
    });
    fixture = TestBed.createComponent(Exercise89Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
