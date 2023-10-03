/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { LoginPage } from '../login/login.page';
import { strings } from '../../config/strings';
import { SignupPage } from '../signup/signup.page';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  constructor(
    public menuCtrl: MenuController,
    public statusBar: StatusBar,
    private authService: AuthService,
    public navCtrl: NavController,
    private router: Router,
    public modalCtrl: ModalController,
    public loadingController: LoadingController

    ) { }

    private _strings = strings;
    public get strings() {
      return this._strings;
    }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
   }

   ngOnInit() {
    this.statusBar.styleDefault();
    this.statusBar.backgroundColorByHexString('#ffffff');
  }

  async goLoginPage() {

    const modal = await this.modalCtrl.create({
       component: LoginPage,
     });

    modal.present();

   }

   async presentAlert(value) {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 2000,
      message: value,
      mode: 'ios'
    });
    await loading.present();
  }


  async goSignUpPage() {

    const modal = await this.modalCtrl.create({
       component: SignupPage,
     });

    modal.present();

   }

}
