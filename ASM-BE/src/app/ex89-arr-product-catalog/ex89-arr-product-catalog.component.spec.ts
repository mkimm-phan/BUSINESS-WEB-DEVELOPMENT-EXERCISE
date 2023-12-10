import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex89ArrProductCatalogComponent } from './ex89-arr-product-catalog.component';

describe('Ex89ArrProductCatalogComponent', () => {
  let component: Ex89ArrProductCatalogComponent;
  let fixture: ComponentFixture<Ex89ArrProductCatalogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ex89ArrProductCatalogComponent]
    });
    fixture = TestBed.createComponent(Ex89ArrProductCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
