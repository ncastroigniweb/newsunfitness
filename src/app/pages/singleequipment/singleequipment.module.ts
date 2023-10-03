import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleequipmentPageRoutingModule } from './singleequipment-routing.module';

import { SingleequipmentPage } from './singleequipment.page';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ComponentsModule,
    SingleequipmentPageRoutingModule
  ],
  declarations: [SingleequipmentPage]
})
export class SingleequipmentPageModule {}
