import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroRemedioPage } from './cadastro-remedio.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroRemedioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroRemedioPageRoutingModule {}
