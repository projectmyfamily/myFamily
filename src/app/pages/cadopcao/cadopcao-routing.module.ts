import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadopcaoPage } from './cadopcao.page';

const routes: Routes = [
  {
    path: '',
    component: CadopcaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadopcaoPageRoutingModule {}
