import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
      path: 'meus-alarmes',
      loadChildren: () => import('../meus-alarmes/meus-alarmes-routing.module').then( m => m.MeusAlarmesPageRoutingModule)
    },]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}


