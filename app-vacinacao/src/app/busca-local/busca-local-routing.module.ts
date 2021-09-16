import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscaLocalPage } from './busca-local.page';

const routes: Routes = [
  {
    path: '',
    component: BuscaLocalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscaLocalPageRoutingModule {}
