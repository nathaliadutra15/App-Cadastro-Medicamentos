import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlarmePage } from './alarme.page';

const routes: Routes = [
  {
    path: '',
    component: AlarmePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlarmePageRoutingModule {}
