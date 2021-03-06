import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CoinsComponent} from "./components/coins/coins.component";
import {CoinComponent} from "./components/coin/coin.component";

const routes: Routes = [
  {path: '', component: CoinsComponent},
  {path: 'coin/:id', component: CoinComponent},
  {path: '**', component: CoinsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
