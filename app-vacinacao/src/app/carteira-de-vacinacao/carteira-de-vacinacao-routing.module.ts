import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarteiraDeVacinacaoPage } from './carteira-de-vacinacao.page';

const routes: Routes = [
  {
    path: '',
    component: CarteiraDeVacinacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarteiraDeVacinacaoPageRoutingModule {}
