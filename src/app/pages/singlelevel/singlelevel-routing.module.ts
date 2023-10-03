import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SinglelevelPage } from './singlelevel.page';

const routes: Routes = [
  {
    path: '',
    component: SinglelevelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SinglelevelPageRoutingModule {}
