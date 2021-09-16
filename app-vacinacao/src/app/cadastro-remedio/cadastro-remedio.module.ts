import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroRemedioPageRoutingModule } from './cadastro-remedio-routing.module';

import { CadastroRemedioPage } from './cadastro-remedio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroRemedioPageRoutingModule
  ],
  declarations: [CadastroRemedioPage]
})
export class CadastroRemedioPageModule {}
