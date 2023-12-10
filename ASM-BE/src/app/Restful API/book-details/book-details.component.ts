import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curriculum } from 'src/app/Interface/Book';
import { BookService } from 'src/app/Server/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  selectedBook: any;
errMessage: any;
curriculum: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // ngOnInit(): void {
  //   this.route.paramMap.subscribe(params => {
  //     const bookId = params.get('id');
  //     this.viewDetails();
  //   });
  // }

  viewDetails(bookId: string) {
    this.bookService.getCurriculum(bookId).subscribe(
      (book) => {
        this.selectedBook = book;
      },
      (error) => {
        console.error('Error fetching book details:', error);
      }
    );
  }

  closeDetails() {
    this.router.navigate(['/']); // Adjust the route to navigate back to the list
  }

  goBack() {
    this.router.navigate(['API']);
  }
}
