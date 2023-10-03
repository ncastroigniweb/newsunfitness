/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';
import { config } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class AdmobService {

  constructor( private admobFree: AdMobFree, public platform: Platform ) { }
  
  BannerAd() {
    this.admobFree.banner.hide();
    // const bannerConfig: AdMobFreeBannerConfig = {
    //   isTesting: true,
    //   autoShow: true,
    //   id: config.BannerId
    // };
    // this.admobFree.banner.config(bannerConfig);
    // this.admobFree.banner.prepare();
  }

  HideBannerAd() {
    this.admobFree.banner.hide();
  }

}
