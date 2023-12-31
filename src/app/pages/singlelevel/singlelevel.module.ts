import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SinglelevelPageRoutingModule } from './singlelevel-routing.module';

import { SinglelevelPage } from './singlelevel.page';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ComponentsModule,
    SinglelevelPageRoutingModule
  ],
  declarations: [SinglelevelPage]
})
export class SinglelevelPageModule {}
