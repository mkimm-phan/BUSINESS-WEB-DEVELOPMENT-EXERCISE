import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookNewComponent } from './book-new.component';

describe('BookNewComponent', () => {
  let component: BookNewComponent;
  let fixture: ComponentFixture<BookNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookNewComponent]
    });
    fixture = TestBed.createComponent(BookNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
