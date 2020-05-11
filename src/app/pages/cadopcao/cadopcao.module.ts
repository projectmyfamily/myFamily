import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadopcaoPageRoutingModule } from './cadopcao-routing.module';

import { CadopcaoPage } from './cadopcao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadopcaoPageRoutingModule
  ],
  declarations: [CadopcaoPage]
})
export class CadopcaoPageModule {}
