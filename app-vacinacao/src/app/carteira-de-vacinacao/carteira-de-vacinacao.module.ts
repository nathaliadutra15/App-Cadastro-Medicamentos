import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarteiraDeVacinacaoPageRoutingModule } from './carteira-de-vacinacao-routing.module';

import { CarteiraDeVacinacaoPage } from './carteira-de-vacinacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarteiraDeVacinacaoPageRoutingModule
  ],
  declarations: [CarteiraDeVacinacaoPage]
})
export class CarteiraDeVacinacaoPageModule {}
