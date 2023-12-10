import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { ICurriculum } from './Interface/curriculum';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {
  private apiUrl = 'http://localhost:3000'; // Update with your actual backend URL

  constructor(private _http: HttpClient) {}

  getCurriculums(): Observable<ICurriculum[]> {
    const headers = new HttpHeaders().set("Content-Type", "application/json;charset=utf-8");
    const requestOptions: Object = {
      headers: headers,
      responseType: "json"
    };

    return this._http.get<ICurriculum[]>(`${this.apiUrl}/curriculums`, requestOptions).pipe(
      retry(3),
      catchError((error: HttpErrorResponse) => {
        console.error('API Error:', error);
        return throwError('Error occurred while fetching data from the API.');
      })
    );
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }

  getCurriculum(Id: string): Observable<ICurriculum> {
    const headers = new HttpHeaders().set("Content-Type", "application/json;charset=utf-8");
    const requestOptions: Object = {
      headers: headers,
      responseType: "json"
    };

    return this._http.get<ICurriculum>(`${this.apiUrl}/curriculums/${Id}`, requestOptions).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  postCurriculum(aCurriculum: any): Observable<ICurriculum[]> {
    const headers = new HttpHeaders().set("Content-Type", "application/json;charset=utf-8");
    const requestOptions: Object = {
      headers: headers,
      responseType: "json"
    };

    return this._http.post<ICurriculum[]>(`${this.apiUrl}/curriculums`, aCurriculum, requestOptions).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  putCurriculum(aCurriculum: any): Observable<ICurriculum[]> {
    const headers = new HttpHeaders().set("Content-Type", "application/json;charset=utf-8");
    const requestOptions: Object = {
      headers: headers,
      responseType: "json"
    };

    return this._http.put<ICurriculum[]>(`${this.apiUrl}/curriculums`, aCurriculum, requestOptions).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  deleteCurriculum(Id: string): Observable<ICurriculum[]> {
    const headers = new HttpHeaders().set("Content-Type", "application/json;charset=utf-8");
    const requestOptions: Object = {
      headers: headers,
      responseType: "json"
    };

    return this._http.delete<ICurriculum[]>(`${this.apiUrl}/curriculums/${Id}`, requestOptions).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }
}
