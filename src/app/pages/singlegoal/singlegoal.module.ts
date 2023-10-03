import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SinglegoalPageRoutingModule } from './singlegoal-routing.module';

import { SinglegoalPage } from './singlegoal.page';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ComponentsModule,
    SinglegoalPageRoutingModule
  ],
  declarations: [SinglegoalPage]
})
export class SinglegoalPageModule {}
