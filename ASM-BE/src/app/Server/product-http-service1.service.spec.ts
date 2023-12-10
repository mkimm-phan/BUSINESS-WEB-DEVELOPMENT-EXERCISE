import { TestBed } from '@angular/core/testing';

import { ProductHttpService1Service } from './product-http-service1.service';

describe('ProductHttpService1Service', () => {
  let service: ProductHttpService1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductHttpService1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
