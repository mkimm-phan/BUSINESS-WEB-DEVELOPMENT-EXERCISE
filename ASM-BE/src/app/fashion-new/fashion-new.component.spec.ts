import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionNewComponent } from './fashion-new.component';

describe('FashionNewComponent', () => {
  let component: FashionNewComponent;
  let fixture: ComponentFixture<FashionNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FashionNewComponent]
    });
    fixture = TestBed.createComponent(FashionNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
