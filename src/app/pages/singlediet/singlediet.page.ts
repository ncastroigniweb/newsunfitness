import { Component, OnInit } from '@angular/core';
import { strings } from '../../config/strings';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { FavoriteService } from '../../services/favorite.service';

@Component({
  selector: 'app-singlediet',
  templateUrl: './singlediet.page.html',
  styleUrls: ['./singlediet.page.scss'],
})
export class SingledietPage implements OnInit {

  public strings = strings;
  diet: any = {};
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

          this.dataFavorite.existDiet(this.id)
          .then( exist => this.icon = ( exist ) ? 'star' : 'star-outline');

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

    this.dataService.getDataDietById(this.id)
    .subscribe( resp => {

      this.diet = resp[0];
      this.isLoading = false;
      this.isReady = true;

  } );

}


addToFavorites() {
  const item = {
    id: this.diet.diet_id,
    title: this.diet.diet_title,
    image: this.diet.diet_image,
};

  const exist = this.dataFavorite.saveDiet( item );
  this.icon = ( exist ) ? 'star' : 'star-outline';
}

}
