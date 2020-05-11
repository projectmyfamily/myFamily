import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModaltermosPageRoutingModule } from './modaltermos-routing.module';

import { ModaltermosPage } from './modaltermos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModaltermosPageRoutingModule
  ],
  declarations: [ModaltermosPage],
  exports: [ModaltermosPage]
})
export class ModaltermosPageModule {}
