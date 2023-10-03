/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { Router } from '@angular/router';
import { NavController, MenuController, ModalController, LoadingController } from '@ionic/angular';
import { strings } from '../../config/strings';
import { config } from '../../config/config';
import firebase from 'firebase/app';
import { TermsguestPage } from '../termsguest/termsguest.page';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { FirebaseService } from "../../services/firebase.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  validationsform: FormGroup;
  data_user: any = {};

  constructor(
    private authService: AuthService,
    public navCtrl: NavController,
    private formBuilder: FormBuilder,
    private router: Router,
    public menuCtrl: MenuController,
    public modalCtrl: ModalController,
    public loadingController: LoadingController,
    public http: HttpClient,
    private firebase: FirebaseService,
  ) { }

        // Http Options
        httpOptions = {
          headers: new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          })
        };

  // tslint:disable-next-line: variable-name
  private _strings = strings;
  public get strings() {
    return this._strings;
  }

  ngOnInit() {
    this.validationsform = this.formBuilder.group({
      name: new FormControl('', Validators.compose([
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),
    });
  }

  tryRegister(value) {
  

    this.authService.doRegister(value)
    .then(res => {
      firebase.auth().currentUser.updateProfile({
        displayName : value.name,
    });

      this.modalCtrl.dismiss();
      console.log("Display: " + value.name);
      
      let data_user = {
        id_user: this.firebase.getIdUser(),
        display_name: value.name
      };

      this.http.post(config.Url+'/controller/guardar_display.php', data_user, this.httpOptions)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error en la solicitud:', error);
          return throwError('Algo salió mal. Por favor, inténtalo de nuevo más tarde.');
        })
      ).subscribe(data => {
          if (data === 'false') {
            this.presentAlert(strings.ST32);
          } else {
            this.presentAlert(strings.ST74);
          }
         }, error => {
          console.log(error);
        });

      this.router.navigate(['/home']);
    }, err => {
      if (err.code === 'auth/email-already-in-use') {
        this.presentAlert(strings.ST36);
      } else {
        this.presentAlert(strings.ST32);
      }
    });



  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
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

  goClosePage() {
    this.modalCtrl.dismiss();
  }

  async goTermsPage() {

    const modal = await this.modalCtrl.create({
       component: TermsguestPage,
     });

    modal.present();

   }

}
