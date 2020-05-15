import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesejoPageRoutingModule } from './desejo-routing.module';

import { DesejoPage } from './desejo.page';

import { ModaldesejoPage } from '../modaldesejo/modaldesejo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesejoPageRoutingModule
  ],
  declarations: [DesejoPage, ModaldesejoPage],
  entryComponents: [ModaldesejoPage]
})
export class DesejoPageModule {}
