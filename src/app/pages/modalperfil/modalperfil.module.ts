import { DesejoPageModule } from './../desejo/desejo.module';
import { DesejoPage } from './../desejo/desejo.page';
import { TarefaPageModule } from './../tarefa/tarefa.module';
import { HomePageModule } from './../home/home.module';
import { TarefaPage } from './../tarefa/tarefa.page';
import { HomePage } from './../home/home.page';
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
    ModalperfilPageRoutingModule,
    HomePageModule,
    TarefaPageModule,
    DesejoPageModule
  ],
  declarations: [ModalperfilPage, HomePage, TarefaPage, DesejoPage],
  exports: [ModalperfilPage]
})
export class ModalperfilPageModule {}
