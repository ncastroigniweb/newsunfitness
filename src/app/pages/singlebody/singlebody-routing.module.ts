import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SinglebodyPage } from './singlebody.page';

const routes: Routes = [
  {
    path: '',
    component: SinglebodyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SinglebodyPageRoutingModule {}
