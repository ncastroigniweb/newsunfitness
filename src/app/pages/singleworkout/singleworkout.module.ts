import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleworkoutPageRoutingModule } from './singleworkout-routing.module';

import { SingleworkoutPage } from './singleworkout.page';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ComponentsModule,
    SingleworkoutPageRoutingModule
  ],
  declarations: [SingleworkoutPage]
})
export class SingleworkoutPageModule {}
