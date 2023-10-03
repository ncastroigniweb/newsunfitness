import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingledayPageRoutingModule } from './singleday-routing.module';

import { SingledayPage } from './singleday.page';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ComponentsModule,
    SingledayPageRoutingModule
  ],
  declarations: [SingledayPage]
})
export class SingledayPageModule {}
