import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalpinPageRoutingModule } from './modalpin-routing.module';

import { ModalpinPage } from './modalpin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalpinPageRoutingModule
  ],
  declarations: []
})
export class ModalpinPageModule {}
