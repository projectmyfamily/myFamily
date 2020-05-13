import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesejoPageRoutingModule } from './desejo-routing.module';

import { DesejoPage } from './desejo.page';
import { ModalperfilPage } from '../modalperfil/modalperfil.page';
import { ModaltarefaPage } from '../modaltarefa/modaltarefa.page';
import { ModaldesejoPage } from '../modaldesejo/modaldesejo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesejoPageRoutingModule
  ],
  declarations: [DesejoPage, ModalperfilPage, ModaldesejoPage],
  entryComponents: [ModalperfilPage, ModaldesejoPage]
})
export class DesejoPageModule {}
