import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cpn78Component } from './cpn78.component';

describe('Cpn78Component', () => {
  let component: Cpn78Component;
  let fixture: ComponentFixture<Cpn78Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cpn78Component]
    });
    fixture = TestBed.createComponent(Cpn78Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
