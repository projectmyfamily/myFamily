import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModaldesejoPageRoutingModule } from './modaldesejo-routing.module';

import { ModaldesejoPage } from './modaldesejo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModaldesejoPageRoutingModule
  ],
  declarations: [ModaldesejoPage]
})
export class ModaldesejoPageModule {}
