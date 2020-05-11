import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadprincipalPage } from './cadprincipal.page';

const routes: Routes = [
  {
    path: '',
    component: CadprincipalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadprincipalPageRoutingModule {}
