import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadkidPage } from './cadkid.page';

const routes: Routes = [
  {
    path: '',
    component: CadkidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadkidPageRoutingModule {}
