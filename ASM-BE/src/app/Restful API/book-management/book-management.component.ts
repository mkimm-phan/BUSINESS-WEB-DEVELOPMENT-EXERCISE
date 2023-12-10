import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/Interface/Books';
import { BookApiService } from 'src/app/Server/book-api.service';

@Component({
  selector: 'app-book-management',
  templateUrl: './book-management.component.html',
  styleUrls: ['./book-management.component.css']
})
export class BookManagementComponent {
// [x: string]: any; // This line seems unnecessary

closeDetails() {
  throw new Error('Method not implemented.');
}

saveEdit() {
  throw new Error('Method not implemented.');
}

cancelEdit() {
  throw new Error('Method not implemented.');
}

saveNew() {
  throw new Error('Method not implemented.');
}

cancelNew() {
  throw new Error('Method not implemented.');
}

books: Book[] = [];
selectedBook: any;
editingBook: any;
creatingNew: any;
errMessage: string = '';
page: number = 1;

constructor(
  private bookService: BookApiService,
  private router: Router // Inject the Router service
) {}

ngOnInit(): void {
  this.fetchBooks();
}

fetchBooks() {
  this.bookService.getBooks().subscribe((books) => {
    this.books = books;
  });
}

viewDetails(bookId: any) {
  this.router.navigate(['book-detail', bookId]);
}

editBook(bookId: string) {
  // Implement edit book logic
}

deleteBook(bookId: string) {
  if (confirm('Are you sure you want to delete this book?')) {
    this.bookService.deleteBook(bookId).subscribe(() => {
      this.fetchBooks(); // Reload the list after deleting
    });
  }
}

createNewBook() {
  // Implement create new book logic
}
}
