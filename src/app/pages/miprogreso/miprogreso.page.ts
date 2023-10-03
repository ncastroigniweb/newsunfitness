import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from "@awesome-cordova-plugins/camera/ngx";
import { DataService } from '../../services/data.service';
import { strings } from '../../config/strings';
import { config } from '../../config/config';
import { ExercisesObject } from '../../interfaces/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform, LoadingController, NavController } from '@ionic/angular';
import { FavoriteService } from '../../services/favorite.service';
import { DescriptionComponent } from '../../components/description/description.component';
import { DomSanitizer } from '@angular/platform-browser';
import { FirebaseService } from "../../services/firebase.service";
import { AuthService } from "../../services/auth.service";
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ProgresoObject } from '../../interfaces/interfaces';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-miprogreso',
  templateUrl: './miprogreso.page.html',
  styleUrls: ['./miprogreso.page.scss'],
})
export class MiprogresoPage implements OnInit {

  public strings = strings;
  day: any;
  isLoading = false;
  id: any;
  workout: any = {};
  innerHeight: any;
  icon = 'star-outline';
  config = config;
  tempImg: any ;
  bdImg: any = {};
  procesando: boolean;
  public id_user: string;
  progreso: ProgresoObject[] = [];

  
  constructor(
    private camera: Camera,
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute,
    public plt: Platform,
    private dataFavorite: FavoriteService,
    public loadingController: LoadingController,
    private sanitizer: DomSanitizer,
    private firebase: FirebaseService,
    public authService: AuthService,
    public http: HttpClient,
    private navCtrl: NavController,
    public actionSheetController: ActionSheetController,
  ) {}

      // Http Options
      httpOptions = {
        headers: new HttpHeaders({
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        })
      };


  openCamera() {
    
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        let base64Image = 'data:image/jpeg;base64,'+ imageData;
        this.tempImg = this.sanitizer.bypassSecurityTrustResourceUrl(base64Image);
        this.guardar_foto(base64Image);

        //console.log("62 -->", base64Image);

        let data = {
          image: base64Image,
        };

        // this.dataService.postImage(data);
      },
      (err) => {
        // Handle error
      }
    );
    this.procesando = false;
  }

  eliminar_foto(){
    this.tempImg = '';
    this.bdImg = '';
  }

  ngOnInit() {

  }

  guardar_foto(base64Image){
    
      this.procesando = true;
      let data_progreso = {
              id_user: this.id_user,
              id_workout: this.id,
              day: this.day,
              imagen: base64Image
      };

      this.http.post(config.Url+'/controller/procesar_imagen.php', data_progreso, this.httpOptions)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error en la solicitud:', error);
          return throwError('Algo salió mal. Por favor, inténtalo de nuevo más tarde.');
        })
      ).subscribe(data => {
          if (data === 'false') {
            this.presentAlert(strings.ST32);
          } else {
            this.presentAlert(strings.ST118);
          }
         }, error => {
          console.log(error);
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

  async ionViewWillEnter() {
    this.isLoading = true;
    this.procesando = true;
    this.innerHeight = this.plt.height() / 3 + 'px';
    this.id_user = await this.firebase.getIdUser();
    //console.log("ID USUARIO: " + this.id_user);
    
    this.route.params.subscribe(
      data => {
        this.id = data.id;
        this.day = data.day;
        this.getDetails();
       
        //console.log("ID: " + data.id);
      }

    );

    this.dataService.getProgreso(this.id, this.day, this.id_user)
    .subscribe( resp => {
      this.progreso = resp;

        this.bdImg = resp[0];
        this.procesando = false;


      this.isLoading = false;

  } );
  }

  getDetails() {

    this.dataService.getDataWorkoutById(this.id)
    .subscribe( resp => {

      this.workout = resp[0];
      this.isLoading = false;

  } );
}

backButton() {
  this.navCtrl.back();
}



async presentActionSheet() {
  const actionSheet = await this.actionSheetController.create({
    header: 'Elije una opción',
    cssClass: 'my-custom-class',
    buttons: [
      {
        text: 'Subir',
        role: 'upload',
        icon: 'cloud-upload-outline',
        handler: () => {
          this.openCamera();
        },
      },
      {
        text: 'Eliminar',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.eliminar_foto();
        },
      },
      {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        },
      },
    ],
  });
  await actionSheet.present();

  const { role } = await actionSheet.onDidDismiss();
  console.log('onDidDismiss resolved with role', role);
}

}
