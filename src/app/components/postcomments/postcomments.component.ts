/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { strings } from '../../config/strings';
import firebase from 'firebase/app';
import 'firebase/database';
import { AddcommentComponent } from '../addcomment/addcomment.component';

@Component({
  selector: 'app-postcomments',
  templateUrl: './postcomments.component.html',
  styleUrls: ['./postcomments.component.scss'],
})
export class PostcommentsComponent implements OnInit {

  public strings = strings;
  @Input() id;
  getComments = [];
  isLoading = false;


  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  async ionViewWillEnter() {

    this.isLoading = true;

    firebase.database().ref(`postComments/${this.id}`).on('value', snapshot => {
      const comments = [];
      snapshot.forEach(row => {
      comments.push({
      id: row.key,
      rating: row.val().rating,
      comment: row.val().comment,
      user: row.val().user

              });
      });

      this.getComments = comments;
      this.isLoading = false;


      });
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

  close() {
    this.modalCtrl.dismiss();
  }

}
