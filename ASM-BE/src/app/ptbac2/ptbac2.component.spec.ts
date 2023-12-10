import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ptbac2Component } from './ptbac2.component';

describe('Ptbac2Component', () => {
  let component: Ptbac2Component;
  let fixture: ComponentFixture<Ptbac2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ptbac2Component]
    });
    fixture = TestBed.createComponent(Ptbac2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
