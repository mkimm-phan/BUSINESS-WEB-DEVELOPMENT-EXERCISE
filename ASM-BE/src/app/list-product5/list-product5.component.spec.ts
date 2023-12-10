import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProduct5Component } from './list-product5.component';

describe('ListProduct5Component', () => {
  let component: ListProduct5Component;
  let fixture: ComponentFixture<ListProduct5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListProduct5Component]
    });
    fixture = TestBed.createComponent(ListProduct5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
