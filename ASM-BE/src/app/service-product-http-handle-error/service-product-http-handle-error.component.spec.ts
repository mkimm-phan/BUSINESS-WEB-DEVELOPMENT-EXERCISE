import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProductHttpHandleErrorComponent } from './service-product-http-handle-error.component';

describe('ServiceProductHttpHandleErrorComponent', () => {
  let component: ServiceProductHttpHandleErrorComponent;
  let fixture: ComponentFixture<ServiceProductHttpHandleErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceProductHttpHandleErrorComponent]
    });
    fixture = TestBed.createComponent(ServiceProductHttpHandleErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
