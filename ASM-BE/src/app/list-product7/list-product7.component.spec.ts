import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProduct7Component } from './list-product7.component';

describe('ListProduct7Component', () => {
  let component: ListProduct7Component;
  let fixture: ComponentFixture<ListProduct7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListProduct7Component]
    });
    fixture = TestBed.createComponent(ListProduct7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
