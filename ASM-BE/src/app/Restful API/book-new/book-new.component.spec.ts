import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookNewComponent1 } from './book-new.component';
// import { BookNewComponent } from 'src/app/book-new/book-new.component';

describe('BookNewComponent', () => {
  let component: BookNewComponent1;
  let fixture: ComponentFixture<BookNewComponent1>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookNewComponent1]
    });
    fixture = TestBed.createComponent(BookNewComponent1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
