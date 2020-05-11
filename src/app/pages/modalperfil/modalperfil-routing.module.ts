import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalperfilPage } from './modalperfil.page';

const routes: Routes = [
  {
    path: '',
    component: ModalperfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalperfilPageRoutingModule {}
