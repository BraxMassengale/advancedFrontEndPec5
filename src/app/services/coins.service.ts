import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Coin} from "../models/coin.interface";

@Injectable({
  providedIn: 'root'
})
export class CoinsService {

  constructor(private http: HttpClient) { }

  getAllCoins(): Observable<Coin[]> {
    return this.http.get<Coin[]>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc')
  }

  getCoinById(id: String): Observable<Coin> {
    return this.http.get<Coin>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=' + id)
  }
}
