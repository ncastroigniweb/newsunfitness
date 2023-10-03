import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingledietPageRoutingModule } from './singlediet-routing.module';

import { SingledietPage } from './singlediet.page';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ComponentsModule,
    SingledietPageRoutingModule
  ],
  declarations: [SingledietPage]
})
export class SingledietPageModule {}
