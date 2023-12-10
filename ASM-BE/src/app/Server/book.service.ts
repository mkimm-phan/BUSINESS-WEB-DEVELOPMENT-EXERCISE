import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, retry, throwError } from 'rxjs';
import { ICurriculum } from '../Interface/curriculum';

@Injectable({
  providedIn: 'root'
})
export class BookService{
  // [x: string]: any;
  // private apiUrl = 'http://localhost:3000';

  // constructor(private http: HttpClient) {}

  // getBooks(): Observable<any> {
  //   const headers = new HttpHeaders().set("Content-Type", "text/plain;charset=utf-8")
  //   const requestOptions: Object = {
  //     headers: headers,
  //     responseType: "text"
  //   }
  //   return this.http.get<any>("/books", requestOptions).pipe(
  //     map(res => JSON.parse(res) as Array<IBook2>),
  //     retry(3),
  //     catchError(this.handleError))
  // }
  // handleError(error: HttpErrorResponse) {
  //   return throwError(() => new Error(error.message))
  // }

  
  // getBook(bookId: string): Observable<any> {
  //   const headers = new HttpHeaders().set("Content-Type", "text/plain;charset=utf-8")
  //   const requestOptions: Object = {
  //     headers: headers,
  //     responseType: "text"
  //   }
  //   return this.http.get<any>("/books/" + bookId, requestOptions).pipe(
  //     map(res => JSON.parse(res) as IBook2),
  //     retry(3),
  //     catchError(this.handleError))
  // }


  // createBook(book: Book2): Observable<Book2[]> {
  //   return this.http.post<Book2[]>(`${this.apiUrl}/books`, book);
  // }

  // addBook(newBook: Book2): Observable<Book2> {
  //   return this.http.post<Book2>(this.apiUrl, newBook);
  // }
  
  // updateBook(book: Book2): Observable<Book2[]> {
  //   return this.http.put<Book2[]>(`${this.apiUrl}/books`, book);
  // }

  // deleteBook(id: string): Observable<Book2[]> {
  //   return this.http.delete<Book2[]>(`${this.apiUrl}/books/${id}`);
  // }
  constructor(private _http: HttpClient) { }
  getCurriculums():Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.get<any>("/curriculums",requestOptions).pipe(
      map(res=>JSON.parse(res) as Array<ICurriculum>),
      retry(3),
      catchError(this.handleError))
    }
  handleError(error:HttpErrorResponse){
    return throwError(()=>new Error(error.message))
  }
  getCurriculum(Id:string):Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.get<any>("/curriculums/"+Id,requestOptions).pipe(
      map(res=>JSON.parse(res) as ICurriculum),
      retry(3),
      catchError(this.handleError))
  }
  postCurriculum(aCurriculum:any):Observable<any>
  {
  const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
  const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.post<any>("/curriculums",JSON.stringify(aCurriculum),requestOptions).pipe(
      map(res=>JSON.parse(res) as Array<ICurriculum>),
      retry(3),
      catchError(this.handleError))
  }
  putCurriculum(aCurriculum:any):Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.put<any>("/curriculums",JSON.stringify(aCurriculum),requestOptions).pipe(
      map(res=>JSON.parse(res) as Array<ICurriculum>),
      retry(3),
      catchError(this.handleError))
  }
  deleteCurriculum(Id:string):Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
      const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.delete<any>("/curriculums/"+Id,requestOptions).pipe(
      map(res=>JSON.parse(res) as Array<ICurriculum>),
      retry(3),
      catchError(this.handleError))
  }
  
}