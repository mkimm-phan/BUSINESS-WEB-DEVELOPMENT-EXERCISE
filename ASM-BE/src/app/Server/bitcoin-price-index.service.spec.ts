import { TestBed } from '@angular/core/testing';

import { BitcoinPriceIndexService } from './bitcoin-price-index.service';

describe('BitcoinPriceIndexService', () => {
  let service: BitcoinPriceIndexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BitcoinPriceIndexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
