import { ModaltermosPage } from './../modaltermos/modaltermos.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, ModalController } from '@ionic/angular';

import { CadprincipalPageRoutingModule } from './cadprincipal-routing.module';

import { CadprincipalPage } from './cadprincipal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadprincipalPageRoutingModule,

  ],
  declarations: [CadprincipalPage, ModaltermosPage],
  entryComponents: [ModaltermosPage]
})
export class CadprincipalPageModule {}
