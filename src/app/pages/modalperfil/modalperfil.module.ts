import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalperfilPageRoutingModule } from './modalperfil-routing.module';

import { ModalperfilPage } from './modalperfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalperfilPageRoutingModule
  ],
  declarations: [ModalperfilPage]
})
export class ModalperfilPageModule {}
