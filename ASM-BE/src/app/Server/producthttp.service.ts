import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../Interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProducthttpService {
  // Taoj dduonwgf dan

  private _url='./assets/datasets/products.json'
  constructor(private http:HttpClient) { }

  getProducts():Observable<Iproduct[]>{
    return this.http.get<Iproduct[]>(this._url)
  }
}