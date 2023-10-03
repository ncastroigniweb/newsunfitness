/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { strings } from '../../config/strings';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { config } from '../../config/config';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public strings = strings;
  public innerHeight: any;
  isLoading = false;
  isReady = true;

  public homeMenu = [
    {
      title: strings.ST1,
      subline: strings.ST60,
      url: '/workouts',
      icon: '../assets/images/workouts.png'
    },
    {
      title: strings.ST2,
      subline: strings.ST61,
      url: '/exercises',
      icon: '../assets/images/exercises.png'
    },
    {
      title: strings.ST3,
      subline: strings.ST62,
      url: '/diets',
      icon: '../assets/images/diets.png'
    },
    {
      title: strings.ST4,
      subline: strings.ST63,
      url: '/posts',
      icon: '../assets/images/blog.png'
    },
    {
      title: strings.ST5,
      subline: strings.ST64,
      url: '/quotes',
      icon: '../assets/images/quotes.png'
    },
  ];

  constructor(
    public menuCtrl: MenuController,
    public router: Router,
    public statusBar: StatusBar) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(true, 'customMenu');
   }

   ngOnInit() {

    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString(config.StatusBarColor);

    this.isLoading = true;

    this.innerHeight = window.innerHeight / 2.9 + 'px';

  }

  openMenu(){
    this.menuCtrl.enable(true, 'customMenu');
    this.menuCtrl.open('customMenu');
  }

}

