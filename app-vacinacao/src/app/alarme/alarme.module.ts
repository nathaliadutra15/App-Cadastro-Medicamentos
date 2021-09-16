import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlarmePageRoutingModule } from './alarme-routing.module';

import { AlarmePage } from './alarme.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlarmePageRoutingModule
  ],
  declarations: [AlarmePage]
})
export class AlarmePageModule {}
