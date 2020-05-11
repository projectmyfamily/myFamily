import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdddesejoPageRoutingModule } from './adddesejo-routing.module';

import { AdddesejoPage } from './adddesejo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdddesejoPageRoutingModule
  ],
  declarations: [AdddesejoPage]
})
export class AdddesejoPageModule {}
