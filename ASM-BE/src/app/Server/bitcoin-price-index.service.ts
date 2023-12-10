import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, retry, catchError, throwError, Observable } from 'rxjs';
import { BitcoinPrice } from '../Interface/Bitcoin';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class BitcoinPriceIndexService {
  [x: string]: any;
  private apiUrl = 'https://api.coindesk.com/v1/bpi/currentprice.json';

  constructor(private http: HttpClient) {}

  getBitcoinPrice(): Observable<BitcoinPrice> {
    return this.http.get<BitcoinPrice>(this.apiUrl);
  }
  
}