import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeusAlarmesPageRoutingModule } from './meus-alarmes-routing.module';

import { MeusAlarmesPage } from './meus-alarmes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeusAlarmesPageRoutingModule
  ],
  declarations: [MeusAlarmesPage]
})
export class MeusAlarmesPageModule {}
