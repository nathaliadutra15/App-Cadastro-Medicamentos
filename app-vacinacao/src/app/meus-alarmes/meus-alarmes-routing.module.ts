import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeusAlarmesPage } from './meus-alarmes.page';

const routes: Routes = [
  {
    path: '',
    component: MeusAlarmesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeusAlarmesPageRoutingModule {}
