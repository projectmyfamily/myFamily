import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModaldesejoPage } from './modaldesejo.page';

const routes: Routes = [
  {
    path: '',
    component: ModaldesejoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModaldesejoPageRoutingModule {}
