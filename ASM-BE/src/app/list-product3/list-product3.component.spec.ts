import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProduct3Component } from './list-product3.component';

describe('ListProduct3Component', () => {
  let component: ListProduct3Component;
  let fixture: ComponentFixture<ListProduct3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListProduct3Component]
    });
    fixture = TestBed.createComponent(ListProduct3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
