import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiprogresoPage } from './miprogreso.page';

const routes: Routes = [
  {
    path: '',
    component: MiprogresoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiprogresoPageRoutingModule {}
