import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs'; 
import { Iproduct } from '../Interface/product';

@Injectable({
  providedIn: 'root'
})
export class CustomerhttpService {
  
  private _url='./assets/datasets/customers.json'
  constructor(private http:HttpClient) { }

  getProducts():Observable<Iproduct[]>{
    return this.http.get<Iproduct[]>(this._url)
  }
}
