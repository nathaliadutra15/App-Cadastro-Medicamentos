import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
      path: 'carteira-de-vacinacao',
      loadChildren: () => import('../carteira-de-vacinacao/carteira-de-vacinacao.module').then( m => m.CarteiraDeVacinacaoPageModule)
    },]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}


