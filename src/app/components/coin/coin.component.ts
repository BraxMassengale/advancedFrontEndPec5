import { Component, OnInit } from '@angular/core';
import {CoinsService} from "../../services/coins.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Coin} from "../../models/coin.interface";

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css']
})
export class CoinComponent implements OnInit {

  coin: Coin | undefined;
  showContent = false;
  coinDataLoaded = false;

  constructor(private coinsService: CoinsService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const identifier  = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("identifier --> ", identifier )

    if(identifier != null) {
      this.coinsService.getCoinById(identifier).subscribe((coin: any) => {
        if(!coin) {
          return this.router.navigateByUrl('/');
        }

        this.coin = coin[0];
        this.coinDataLoaded = true;

        return coin;
      })
    }
  }

  showDetails() {
    this.showContent = !this.showContent;
  }

}
