import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadkidPageRoutingModule } from './cadkid-routing.module';

import { CadkidPage } from './cadkid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadkidPageRoutingModule
  ],
  declarations: [CadkidPage]
})
export class CadkidPageModule {}
