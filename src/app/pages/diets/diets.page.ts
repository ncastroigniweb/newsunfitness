import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { strings } from '../../config/strings';

@Component({
  selector: 'app-diets',
  templateUrl: './diets.page.html',
  styleUrls: ['./diets.page.scss'],
})
export class DietsPage implements OnInit {

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

    this.dataService.getDataDiets()
    .subscribe( resp => {
      this.featuredItems = resp.filter((e, index) => e.diet_featured === '1');
      this.recentItems = resp.filter((e, index) => index < 8);
      this.isReady = true;
      this.isLoading = false;

    });

  }

}
