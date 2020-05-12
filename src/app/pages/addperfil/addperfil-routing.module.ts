import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddperfilPage } from './addperfil.page';

const routes: Routes = [
  {
    path: '',
    component: AddperfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddperfilPageRoutingModule {}
