import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable, importProvidersFrom } from '@angular/core';
import { Observable, map, retry, catchError, throwError } from 'rxjs';
import { IBook } from '../Interface/Books';
// import { Book } from '../Interface/Book'

@Injectable({
  providedIn: 'root'
})
export class BookApiService {
  [x: string]: any;

  constructor(private _http: HttpClient) { }
  getBooks(): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "text/plain;charset=utf-8")
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    }
    return this._http.get<any>("/books", requestOptions).pipe(
      map(res => JSON.parse(res) as Array<IBook>),
      retry(3),
      catchError(this.handleError))
  }
  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message))
  }
  getBook(bookId: string): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "text/plain;charset=utf-8")
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    }
    return this._http.get<any>("/books/" + bookId, requestOptions).pipe(
      map(res => JSON.parse(res) as IBook),
      retry(3),
      catchError(this.handleError))
  }
  postBook(aBook: any): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "application/json;charset=utf-8")
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    }
    return this._http.post<any>("/books", JSON.stringify(aBook), requestOptions).pipe(
      map(res => JSON.parse(res) as Array<IBook>),
      retry(3),
      catchError(this.handleError))
  }
  putBook(aBook: any): Observable<any> {
    const headers = new HttpHeaders().set("ContentType", "application/json;charset=utf-8")
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    }
    return this._http.put<any>("/books", JSON.stringify(aBook), requestOptions).pipe(
      map(res => JSON.parse(res) as Array<IBook>),
      retry(3),
      catchError(this.handleError))
  }
  deleteBook(bookId: string): Observable<any> {
    const headers = new HttpHeaders().set("ContentType", "application/json;charset=utf-8")
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    }
    return this._http.delete<any>("/books/" + bookId, requestOptions).pipe(
      map(res => JSON.parse(res) as Array<IBook>),
      retry(3),
      catchError(this.handleError))
  }

}
