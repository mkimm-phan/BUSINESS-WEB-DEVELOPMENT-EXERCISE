import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ptbac1Component } from './ptbac1.component';

describe('Ptbac1Component', () => {
  let component: Ptbac1Component;
  let fixture: ComponentFixture<Ptbac1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ptbac1Component]
    });
    fixture = TestBed.createComponent(Ptbac1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
