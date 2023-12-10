import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitcoinPriceIndexComponent } from './bitcoin-price-index.component';

describe('BitcoinPriceIndexComponent', () => {
  let component: BitcoinPriceIndexComponent;
  let fixture: ComponentFixture<BitcoinPriceIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BitcoinPriceIndexComponent]
    });
    fixture = TestBed.createComponent(BitcoinPriceIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
