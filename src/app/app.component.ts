import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './services/auth.service';
import { AdmobService } from './services/admob.service';
import { strings } from './config/strings';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public signout = strings.ST8;

  public appPages = [
    {
      title: strings.ST1,
      url: '/workouts',
    },
    {
      title: strings.ST2,
      url: '/exercises',
    },
    {
      title: strings.ST3,
      url: '/diets',
    },
    {
      title: strings.ST4,
      url: '/posts',
    },
    {
      title: strings.ST5,
      url: '/quotes',
    },
    {
      title: strings.ST6,
      url: '/profile',
    },
    {
      title: strings.ST7,
      url: '/settings',
    },
  ];

  constructor(
    private platform: Platform,
    public navCtrl: NavController,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    public afAuth: AngularFireAuth,
    public authService: AuthService,
    public admob: AdmobService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then( async () => {
      await this.afAuth.user.subscribe(user => {
        if (user) {
          this.router.navigate(['/home']);
          this.admob.BannerAd();
        } else {
          this.router.navigate(['/start']);
        }
      }, err => {
        this.router.navigate(['/loader']);
      }, () => {
        this.splashScreen.hide();
      });
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
    });
  }

  logout() {
    this.authService.doLogout()
    .then(res => {
      this.navCtrl.pop();
    }, err => {
      console.log(err);
    });
  }

}
