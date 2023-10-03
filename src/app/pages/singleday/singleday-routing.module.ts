import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingledayPage } from './singleday.page';

const routes: Routes = [
  {
    path: '',
    component: SingledayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingledayPageRoutingModule {}
