import { Component } from '@angular/core';
import { BookApiService } from '../Server/book-api.service';
import { Book } from '../Interface/Books';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css']
})
export class BookNewComponent {
  book = new Book();
  books: any
  errMessage: string = ''
  constructor(private _service: BookApiService) {
    this._service.getBooks().subscribe({
      next: (data) => { this.books = data },
      error: (err) => { this.errMessage = err }
    })
  }
  postBook() {
    this._service.postBook(this.book).subscribe({
      next: (data) => { this.books = data },
      error: (err) => { this.errMessage = err }
    })
  }

}
