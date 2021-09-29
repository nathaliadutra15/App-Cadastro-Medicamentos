import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscaPostoPageRoutingModule } from './busca-posto-routing.module';

import { BuscaPostoPage } from './busca-posto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscaPostoPageRoutingModule
  ],
  declarations: [BuscaPostoPage]
})
export class BuscaPostoPageModule {}
