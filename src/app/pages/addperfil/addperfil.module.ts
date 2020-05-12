import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddperfilPageRoutingModule } from './addperfil-routing.module';

import { AddperfilPage } from './addperfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddperfilPageRoutingModule
  ],
  declarations: [AddperfilPage]
})
export class AddperfilPageModule {}
