import { Component } from '@angular/core';
import { BitcoinPriceIndexService } from '../Server/bitcoin-price-index.service';
import { BitcoinPrice} from '../Interface/Bitcoin'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-bitcoin-price-index',
  templateUrl: './bitcoin-price-index.component.html',
  styleUrls: ['./bitcoin-price-index.component.css']
})
export class BitcoinPriceIndexComponent {
[x: string]: any;
  bitcoinData: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchBitcoinData();
  }

  fetchBitcoinData() {
    this.http.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .subscribe((data: any) => {
        this.bitcoinData = data;
      });
  }

  getBitcoinCurrencies(): string[] {
    return Object.keys(this.bitcoinData.bpi);
  }

}
