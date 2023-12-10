import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProduct4Component } from './list-product4.component';

describe('ListProduct4Component', () => {
  let component: ListProduct4Component;
  let fixture: ComponentFixture<ListProduct4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListProduct4Component]
    });
    fixture = TestBed.createComponent(ListProduct4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
