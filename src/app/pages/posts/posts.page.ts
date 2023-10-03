import { Component, OnInit } from '@angular/core';
import { strings } from '../../config/strings';
import { DataService } from '../../services/data.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {

  public strings = strings;
  featuredItems = [];
  recentItems = [];
  innerHeight: any;
  isLoading = false;
  isReady = true;

  slideOpts = {
    slidesPerView: 1,
    freeMode: false,
  };

  constructor(
    private plt: Platform,
    private dataService: DataService
    ) { }

  ngOnInit() {

  }

  async ionViewWillEnter() {
    this.isLoading = true;
    this.innerHeight = this.plt.height() / 3 + 'px';

    this.dataService.getDataPosts()
    .subscribe( resp => {
      this.featuredItems = resp.filter((e, index) => e.post_featured === '1');
      this.recentItems = resp.filter((e, index) => index < 8);
      this.isReady = true;
      this.isLoading = false;

    });

  }

}
