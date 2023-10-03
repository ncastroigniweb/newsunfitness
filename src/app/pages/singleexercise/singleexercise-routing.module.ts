import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleexercisePage } from './singleexercise.page';

const routes: Routes = [
  {
    path: '',
    component: SingleexercisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleexercisePageRoutingModule {}
