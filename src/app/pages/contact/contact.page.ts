/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { strings } from '../../config/strings';
import { Platform, LoadingController, NavController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { config } from '../../config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  public strings = strings;
  public innerHeight: any;

  validationsform: FormGroup;

  constructor(
    public plt: Platform,
    private formBuilder: FormBuilder,
    public loadingController: LoadingController,
    private navCtrl: NavController,
    public http: HttpClient
    ) {}

    // Http Options
    httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      })
    };

    ngOnInit() {

      this.innerHeight = this.plt.height() / 2.5 + 'px';

      this.validationsform = this.formBuilder.group({
        name: new FormControl('', Validators.compose([
          Validators.required
        ])),
        email: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])),
        message: new FormControl('', Validators.compose([
          Validators.required,
        ])),
      });
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

    backButton() {
      this.navCtrl.back();
    }

    sentMessage(value) {

      const messageData = {
              name: value.name,
              email: value.email,
              message: value.message
      };

      this.http.post(config.Url+'/controller/contactform.php', messageData, this.httpOptions)
        .subscribe(data => {
          if (data === 'false') {
            this.presentAlert(strings.ST32);
          } else {
            this.presentAlert(strings.ST74);
            this.backButton();
          }
         }, error => {
          console.log(error);
        });
    }


}
