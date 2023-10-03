import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SinglecategoryPageRoutingModule } from './singlecategory-routing.module';

import { SinglecategoryPage } from './singlecategory.page';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ComponentsModule,
    SinglecategoryPageRoutingModule
  ],
  declarations: [SinglecategoryPage]
})
export class SinglecategoryPageModule {}
