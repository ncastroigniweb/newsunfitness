import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleequipmentPage } from './singleequipment.page';

const routes: Routes = [
  {
    path: '',
    component: SingleequipmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleequipmentPageRoutingModule {}
