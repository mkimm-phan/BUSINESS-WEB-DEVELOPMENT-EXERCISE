import { Component } from '@angular/core';
import { BookApiService } from '../Server/book-api.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
    books:any;
    errMessage:string=''
    constructor(private _service: BookApiService){
    this._service.getBooks().subscribe({
    next:(data)=>{this.books=data},
    error:(err)=>{this.errMessage=err}
  })
  }
}
