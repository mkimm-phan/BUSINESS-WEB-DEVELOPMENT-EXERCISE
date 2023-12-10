import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs'; 
import { Iproduct } from '../Interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService1Service {
    // Taoj dduonwgf dan

    private _url='./assets/datasets/product.json'
    constructor(private http:HttpClient) { }
  
    getProducts():Observable<Iproduct[]>{
      return this.http.get<Iproduct[]>(this._url)
    }

    getProductsHandleError()
    {
    return this.http.get<Iproduct[]>(this._url)
    .pipe(retry(3), catchError(this.handleError))
    }
    handleError(error:HttpErrorResponse){
    return throwError(()=>new Error(error.message))
    }
}
