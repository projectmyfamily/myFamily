import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalpinPage } from './modalpin.page';

const routes: Routes = [
  {
    path: '',
    component: ModalpinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalpinPageRoutingModule {}
