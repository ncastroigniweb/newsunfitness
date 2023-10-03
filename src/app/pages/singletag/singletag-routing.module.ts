import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingletagPage } from './singletag.page';

const routes: Routes = [
  {
    path: '',
    component: SingletagPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingletagPageRoutingModule {}
