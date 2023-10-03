import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BackbuttonComponent } from './backbutton/backbutton.component';
import { LoadingComponent } from './loading/loading.component';
import { PipesModule } from '../pipes/pipes.module';
import { HtmlComponent } from './html/html.component';
import { IonicRatingComponentModule } from 'ionic-rating-component';
import { AddcommentComponent } from './addcomment/addcomment.component';
import { EmptyComponent } from './empty/empty.component';
import { RouterModule } from '@angular/router';
import { PostcommentsComponent } from './postcomments/postcomments.component';
import { PostratingComponent } from './postrating/postrating.component';
import { DescriptionComponent } from './description/description.component';
import { RestdayComponent } from './restday/restday.component';
import { DietsfavComponent } from './dietsfav/dietsfav.component';
import { WorkoutsfavComponent } from './workoutsfav/workoutsfav.component';
import { PostsfavComponent } from './postsfav/postsfav.component';



@NgModule({
  entryComponents: [AddcommentComponent, PostcommentsComponent],
  declarations: [
    BackbuttonComponent,
    LoadingComponent,
    HtmlComponent,
    EmptyComponent,
    AddcommentComponent,
    PostcommentsComponent,
    PostratingComponent,
    DescriptionComponent,
    RestdayComponent,
    DietsfavComponent,
    WorkoutsfavComponent,
    PostsfavComponent
  ],
  exports: [
    BackbuttonComponent,
    LoadingComponent,
    HtmlComponent,
    AddcommentComponent,
    PostcommentsComponent,
    EmptyComponent,
    PostratingComponent,
    DescriptionComponent,
    RestdayComponent,
    DietsfavComponent,
    WorkoutsfavComponent,
    PostsfavComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    PipesModule,
    IonicRatingComponentModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
