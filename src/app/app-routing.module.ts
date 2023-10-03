import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loader',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'start',
    loadChildren: () => import('./pages/start/start.module').then( m => m.StartPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'forgotpass',
    loadChildren: () => import('./pages/forgotpass/forgotpass.module').then( m => m.ForgotpassPageModule)
  },
  {
    path: 'termsguest',
    loadChildren: () => import('./pages/termsguest/termsguest.module').then( m => m.TermsguestPageModule)
  },
  {
    path: 'posts',
    loadChildren: () => import('./pages/posts/posts.module').then( m => m.PostsPageModule)
  },
  {
    path: 'singlepost/:id',
    loadChildren: () => import('./pages/singlepost/singlepost.module').then( m => m.SinglepostPageModule)
  },
  {
    path: 'tags',
    loadChildren: () => import('./pages/tags/tags.module').then( m => m.TagsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./pages/aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./pages/terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'loader',
    loadChildren: () => import('./pages/loader/loader.module').then( m => m.LoaderPageModule)
  },
  {
    path: 'singletag/:id/:title',
    loadChildren: () => import('./pages/singletag/singletag.module').then( m => m.SingletagPageModule)
  },
  {
    path: 'diets',
    loadChildren: () => import('./pages/diets/diets.module').then( m => m.DietsPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./pages/categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'singlecategory/:id/:title',
    loadChildren: () => import('./pages/singlecategory/singlecategory.module').then( m => m.SinglecategoryPageModule)
  },
  {
    path: 'singlediet/:id',
    loadChildren: () => import('./pages/singlediet/singlediet.module').then( m => m.SingledietPageModule)
  },
  {
    path: 'workouts',
    loadChildren: () => import('./pages/workouts/workouts.module').then( m => m.WorkoutsPageModule)
  },
  {
    path: 'exercises',
    loadChildren: () => import('./pages/exercises/exercises.module').then( m => m.ExercisesPageModule)
  },
  {
    path: 'goals',
    loadChildren: () => import('./pages/goals/goals.module').then( m => m.GoalsPageModule)
  },
  {
    path: 'levels',
    loadChildren: () => import('./pages/levels/levels.module').then( m => m.LevelsPageModule)
  },
  {
    path: 'equipments',
    loadChildren: () => import('./pages/equipments/equipments.module').then( m => m.EquipmentsPageModule)
  },
  {
    path: 'bodyparts',
    loadChildren: () => import('./pages/bodyparts/bodyparts.module').then( m => m.BodypartsPageModule)
  },
  {
    path: 'singlegoal/:id/:title',
    loadChildren: () => import('./pages/singlegoal/singlegoal.module').then( m => m.SinglegoalPageModule)
  },
  {
    path: 'singlelevel/:id/:title',
    loadChildren: () => import('./pages/singlelevel/singlelevel.module').then( m => m.SinglelevelPageModule)
  },
  {
    path: 'singlebody/:id/:title',
    loadChildren: () => import('./pages/singlebody/singlebody.module').then( m => m.SinglebodyPageModule)
  },
  {
    path: 'singleequipment/:id/:title',
    loadChildren: () => import('./pages/singleequipment/singleequipment.module').then( m => m.SingleequipmentPageModule)
  },
  {
    path: 'singleexercise/:id',
    loadChildren: () => import('./pages/singleexercise/singleexercise.module').then( m => m.SingleexercisePageModule)
  },
  {
    path: 'singleworkout/:id',
    loadChildren: () => import('./pages/singleworkout/singleworkout.module').then( m => m.SingleworkoutPageModule)
  },
  {
    path: 'singleday/:id/:day',
    loadChildren: () => import('./pages/singleday/singleday.module').then( m => m.SingledayPageModule)
  },
  {
    path: 'quotes',
    loadChildren: () => import('./pages/quotes/quotes.module').then( m => m.QuotesPageModule)
  },
  {
    path: 'miprogreso',
    loadChildren: () => import('./pages/miprogreso/miprogreso.module').then( m => m.MiprogresoPageModule)
  },
  {
    path: 'miprogreso/:id/:day',
    loadChildren: () => import('./pages/miprogreso/miprogreso.module').then( m => m.MiprogresoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
