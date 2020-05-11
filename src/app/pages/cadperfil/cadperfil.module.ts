import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadperfilPageRoutingModule } from './cadperfil-routing.module';

import { CadperfilPage } from './cadperfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadperfilPageRoutingModule
  ],
  declarations: [CadperfilPage]
})
export class CadperfilPageModule {}
