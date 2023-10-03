import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Platform, ModalController } from '@ionic/angular';
import firebase from 'firebase/app';
import 'firebase/database';
import { FavoriteService } from '../../services/favorite.service';
import { strings } from '../../config/strings';
import { PostcommentsComponent } from '../../components/postcomments/postcomments.component';
import { AddcommentComponent } from '../../components/addcomment/addcomment.component';

@Component({
  selector: 'app-singlepost',
  templateUrl: './singlepost.page.html',
  styleUrls: ['./singlepost.page.scss'],
})
export class SinglepostPage implements OnInit {

  public strings = strings;
  post: any = {};
  isLoading = false;
  isReady = false;
  id: any;
  rating = 0;
  count = 0;
  innerHeight: any;
  icon = 'star-outline';

  constructor(
    private dataService: DataService,
    private router: Router,
    private modalCtrl: ModalController,
    private route: ActivatedRoute,
    public plt: Platform,
    private dataFavorite: FavoriteService
    ) {}

    ngOnInit() {

    }

    async ionViewWillEnter() {
      this.isLoading = true;
      this.innerHeight = this.plt.height() / 3 + 'px';
      this.route.params.subscribe(
        data => {
          this.id = data.id;
          this.getDetails();

          this.dataFavorite.existPost(this.id)
          .then( exist => this.icon = ( exist ) ? 'star' : 'star-outline');

          const commentsRef = firebase.database().ref(`postComments/${this.id}`);

          commentsRef.on('child_added', snapshot => {
            commentsRef.on('value', snap => {
            const comments = [];
            snap.forEach(row => {
            comments.push(Number(row.val().rating));
            });

            this.rating = comments.reduce((previous, current) => previous + current, 0) / comments.length;
            this.count = comments.length;

      });
      });

          if (!this.id) {
            this.goBack();
          }
        }
      );

    }

    goBack() {
      this.router.navigate(['/home']);
    }

    getDetails() {

    this.dataService.getDataPostById(this.id)
    .subscribe( resp => {

      this.post = resp[0];
      this.isLoading = false;
      this.isReady = true;

  } );

}

async showComments( id: string) {

  const modal = await this.modalCtrl.create({
     component: PostcommentsComponent,
     componentProps: {
      id
    }
   });

  modal.present();

 }

 async addComment( id: string) {

  const modal = await this.modalCtrl.create({
     component: AddcommentComponent,
     componentProps: {
      id
    }
   });

  modal.present();

 }


addToFavorites() {
  const item = {
    id: this.post.post_id,
    title: this.post.post_title,
    image: this.post.post_image,
};

  const exist = this.dataFavorite.savePost( item );
  this.icon = ( exist ) ? 'star' : 'star-outline';
}

}

