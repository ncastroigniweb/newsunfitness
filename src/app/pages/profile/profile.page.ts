import { Component, OnInit } from "@angular/core";
import { Platform, NavController, ModalController } from "@ionic/angular";
import { FirebaseService } from "../../services/firebase.service";
import { strings } from "../../config/strings";
import * as moment from "moment";
import { AuthService } from "../../services/auth.service";
import { Camera, CameraOptions } from "@awesome-cordova-plugins/camera/ngx";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {
  public strings = strings;
  public name: string;
  public id_user: string;
  public since: string;
  public innerHeight: any;
  isLoading = true;
  isWorkouts = false;
  isPosts = false;
  isDiets = false;

  constructor(
    private camera: Camera,
    private dataService: DataService,
    public plt: Platform,
    public navCtrl: NavController,
    private firebase: FirebaseService,
    public authService: AuthService
  ) {}

  ngOnInit() {}

  async ionViewWillEnter() {
    this.isLoading = true;

    this.name = await this.firebase.getDisplayName();

    this.id_user = await this.firebase.getIdUser();

    this.since = moment(await this.firebase.getCreationTime()).fromNow(true);

    this.innerHeight = this.plt.height() / 3 + "px";

    this.isLoading = false;
  }

  openCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        let base64Image = "data:image/jpeg;base64," + imageData;

        console.log("62 -->", base64Image);

        let data = {
          image: base64Image,
        };

        // this.dataService.postImage(data);
      },
      (err) => {
        // Handle error
      }
    );
  }

  toggleWorkouts() {
    this.isWorkouts = !this.isWorkouts;
  }

  togglePosts() {
    this.isPosts = !this.isPosts;
  }

  toggleDiets() {
    this.isDiets = !this.isDiets;
  }

  logout() {
    this.authService.doLogout().then(
      (res) => {
        this.navCtrl.pop();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
