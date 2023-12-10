import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/Interface/Book';
import { BookService } from 'src/app/Server/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book!: Book;
  errMessage: string = '';

  constructor(
    private _service: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const bookId = params.get('id');
      if (bookId) {
        this.searchBook(bookId);
      }
    });
  }

  searchBook(bookId: string) {
    this._service.getBook(bookId).subscribe({
      next: (data) => { this.book = data; },
      error: (err) => { this.errMessage = err; }
    });
  }

  goBack() {
    this.router.navigate(['API']);
  }
}
