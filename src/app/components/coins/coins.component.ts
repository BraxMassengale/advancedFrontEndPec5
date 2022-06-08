import { Component, OnInit } from '@angular/core';
import {CoinsService} from "../../services/coins.service";
import {Coin} from "../../models/coin.interface";
import {MatTableDataSource} from "@angular/material/table";
import { rowsAnimation } from '../../animations/rows-animation'

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css'],
  animations: [rowsAnimation]
})
export class CoinsComponent implements OnInit {

  coins: Coin[] = [];
  dataSource!: MatTableDataSource<Coin>;
  displayedColumns: string[] = ['coin-name', 'coin-price'];
  coinsDataLoaded: boolean = false;

  constructor(private coinsService: CoinsService) { }

  ngOnInit(): void {
    this.coinsService.getAllCoins().subscribe((coins) => {
      if(this.coins != coins) {
        this.coins = coins
        this.dataSource = new MatTableDataSource<Coin>(coins);
        this.coinsDataLoaded = true;
      }
    })
  }

}
