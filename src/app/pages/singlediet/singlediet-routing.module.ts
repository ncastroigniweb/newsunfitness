import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingledietPage } from './singlediet.page';

const routes: Routes = [
  {
    path: '',
    component: SingledietPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingledietPageRoutingModule {}
