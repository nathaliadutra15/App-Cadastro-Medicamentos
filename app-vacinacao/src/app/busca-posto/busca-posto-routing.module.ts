import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscaPostoPage } from './busca-posto.page';

const routes: Routes = [
  {
    path: '',
    component: BuscaPostoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscaPostoPageRoutingModule {}
