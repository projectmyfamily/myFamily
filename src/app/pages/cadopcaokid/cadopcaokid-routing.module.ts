import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadopcaokidPage } from './cadopcaokid.page';

const routes: Routes = [
  {
    path: '',
    component: CadopcaokidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadopcaokidPageRoutingModule {}
