import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdddesejoPage } from './adddesejo.page';

const routes: Routes = [
  {
    path: '',
    component: AdddesejoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdddesejoPageRoutingModule {}
