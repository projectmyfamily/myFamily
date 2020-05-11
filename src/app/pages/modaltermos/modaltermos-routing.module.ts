import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModaltermosPage } from './modaltermos.page';

const routes: Routes = [
  {
    path: '',
    component: ModaltermosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModaltermosPageRoutingModule {}
