import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../Interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {
  
  private _url: string = "./assets/data/product.json";
  constructor(private _http: HttpClient) { }

  getProducts():Observable<Iproduct[]>{
    return this._http.get<Iproduct[]>(this._url)
  }
}
