import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LevelsPageRoutingModule } from './levels-routing.module';

import { LevelsPage } from './levels.page';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ComponentsModule,
    LevelsPageRoutingModule
  ],
  declarations: [LevelsPage]
})
export class LevelsPageModule {}
