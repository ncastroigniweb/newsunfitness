/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  posts: any = [];
  diets: any = [];
  workouts: any = [];

  constructor(
    private storage: Storage,
    private toastCtrl: ToastController
    ) { }

    async presentToast(message: string) {
      const toast = await this.toastCtrl.create({
        message,
        duration: 1500,
        mode: 'ios',
        color: 'dark',
        cssClass: 'ion-toast'
      });
      toast.present();
    }

// ------------------------------- POSTS

  savePost( post) {

    let exist = false;

    for ( const item of this.posts) {
      if ( item.id === post.id) {
        exist = true;
        break;
      }
    }

    if ( exist ) {

      this.posts = this.posts.filter( item => item.id !== post.id );
    } else {
      this.posts.push( post );

    }

    this.storage.set('posts', this.posts);

    return !exist;

  }

  async loadPosts() {

    this.storage.create();

    const posts = await this.storage.get('posts');
    this.posts = posts || [];
    return this.posts;

  }

  async existPost( id ) {

  await this.loadPosts();
  const exist = this.posts.find( post => post.id === id);
  return (exist) ? true : false;

  }

  async removePost( id ) {

    // tslint:disable-next-line: only-arrow-functions
    const ArrayFav = this.posts.filter(function(e) { return e.id !== id; });
    this.storage.set('posts', ArrayFav);


}


// ------------------------------- DIETS


saveDiet( diet) {

  let exist = false;

  for ( const item of this.diets) {
    if ( item.id === diet.id) {
      exist = true;
      break;
    }
  }

  if ( exist ) {

    this.diets = this.diets.filter( item => item.id !== diet.id );
  } else {
    this.diets.push( diet );

  }

  this.storage.set('diets', this.diets);

  return !exist;

}

async loadDiets() {

  this.storage.create();

  const diets = await this.storage.get('diets');
  this.diets = diets || [];
  return this.diets;

}

async existDiet( id ) {

await this.loadDiets();
const exist = this.diets.find( diet => diet.id === id);
return (exist) ? true : false;

}

async removeDiet( id ) {

  // tslint:disable-next-line: only-arrow-functions
  const ArrayFav = this.diets.filter(function(e) { return e.id !== id; });
  this.storage.set('diets', ArrayFav);


}

// ------------------------------- WORKOUTS


saveWorkout( workout) {

  let exist = false;

  for ( const item of this.workouts) {
    if ( item.id === workout.id) {
      exist = true;
      break;
    }
  }

  if ( exist ) {

    this.workouts = this.workouts.filter( item => item.id !== workout.id );
  } else {
    this.workouts.push( workout );

  }

  this.storage.set('workouts', this.workouts);

  return !exist;

}

async loadWorkouts() {

  this.storage.create();

  const workouts = await this.storage.get('workouts');
  this.workouts = workouts || [];
  return this.workouts;

}

async existWorkout( id ) {

await this.loadWorkouts();
const exist = this.workouts.find( workout => workout.id === id);
return (exist) ? true : false;

}

async removeWorkout( id ) {

  // tslint:disable-next-line: only-arrow-functions
  const ArrayFav = this.workouts.filter(function(e) { return e.id !== id; });
  this.storage.set('workouts', ArrayFav);


}

}
