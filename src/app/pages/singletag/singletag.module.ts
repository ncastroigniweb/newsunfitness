import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingletagPageRoutingModule } from './singletag-routing.module';

import { SingletagPage } from './singletag.page';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ComponentsModule,
    SingletagPageRoutingModule
  ],
  declarations: [SingletagPage]
})
export class SingletagPageModule {}
