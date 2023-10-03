import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SinglebodyPageRoutingModule } from './singlebody-routing.module';

import { SinglebodyPage } from './singlebody.page';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ComponentsModule,
    SinglebodyPageRoutingModule
  ],
  declarations: [SinglebodyPage]
})
export class SinglebodyPageModule {}
