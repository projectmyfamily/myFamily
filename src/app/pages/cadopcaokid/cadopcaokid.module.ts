import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadopcaokidPageRoutingModule } from './cadopcaokid-routing.module';

import { CadopcaokidPage } from './cadopcaokid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadopcaokidPageRoutingModule
  ],
  declarations: [CadopcaokidPage]
})
export class CadopcaokidPageModule {}
