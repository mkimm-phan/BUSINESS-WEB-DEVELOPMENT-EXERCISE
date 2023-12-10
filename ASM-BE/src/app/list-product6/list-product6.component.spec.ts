import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProduct6Component } from './list-product6.component';

describe('ListProduct6Component', () => {
  let component: ListProduct6Component;
  let fixture: ComponentFixture<ListProduct6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListProduct6Component]
    });
    fixture = TestBed.createComponent(ListProduct6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
