import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleexercisePageRoutingModule } from './singleexercise-routing.module';

import { SingleexercisePage } from './singleexercise.page';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ComponentsModule,
    SingleexercisePageRoutingModule
  ],
  declarations: [SingleexercisePage]
})
export class SingleexercisePageModule {}
