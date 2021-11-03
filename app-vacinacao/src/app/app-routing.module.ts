import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'quem-somos',
    loadChildren: () => import('./quem-somos/quem-somos.module').then( m => m.QuemSomosPageModule) 
  },
  {
    path: '',
    redirectTo: 'quem-somos',
    pathMatch: 'full'
  },
  {
    path: 'carteira-de-vacinacao',
    loadChildren: () => import('./carteira-de-vacinacao/carteira-de-vacinacao.module').then( m => m.CarteiraDeVacinacaoPageModule)
  },
  {
    path: 'busca-local',
    loadChildren: () => import('./busca-local/busca-local.module').then( m => m.BuscaLocalPageModule)
  },
  {
    path: 'cadastro-cliente',
    loadChildren: () => import('./cadastro-cliente/cadastro-cliente.module').then( m => m.CadastroClientePageModule)
  },
  {
    path: 'cadastro-remedio',
    loadChildren: () => import('./cadastro-remedio/cadastro-remedio.module').then( m => m.CadastroRemedioPageModule)
  },
  {
    path: 'alarme',
    loadChildren: () => import('./alarme/alarme.module').then( m => m.AlarmePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
    
  },
  {
    path: 'busca-posto',
    loadChildren: () => import('./busca-posto/busca-posto.module').then( m => m.BuscaPostoPageModule)
  },
  {
    path: 'meus-remedios/:id',
    loadChildren: () => import('./meus-remedios/meus-remedios.module').then( m => m.MeusRemediosPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
