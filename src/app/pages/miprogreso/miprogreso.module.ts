import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiprogresoPageRoutingModule } from './miprogreso-routing.module';

import { MiprogresoPage } from './miprogreso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiprogresoPageRoutingModule
  ],
  declarations: [MiprogresoPage]
})
export class MiprogresoPageModule {}
