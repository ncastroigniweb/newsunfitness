import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule, SETTINGS } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { firebaseconfig } from "./config/firebase";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AuthService } from "./services/auth.service";
import { HttpClientModule } from "@angular/common/http";
import { IonicStorageModule } from "@ionic/storage-angular";

import { AdMobFree } from "@ionic-native/admob-free/ngx";
import { AdmobService } from "./services/admob.service";

import { StreamingMedia } from "@ionic-native/streaming-media/ngx";
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";

import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";

import { Camera } from "@awesome-cordova-plugins/camera/ngx";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseconfig.firebase), // imports firebase/app
    AngularFirestoreModule, // imports firebase/firestore
    AngularFireAuthModule, // imports firebase/auth
    AngularFireStorageModule, // imports firebase/storage
  ],
  providers: [
    Camera,
    StatusBar,
    SplashScreen,
    AuthService,
    AdMobFree,
    AdmobService,
    StreamingMedia,
    ScreenOrientation,
    InAppBrowser,
    { provide: SETTINGS, useValue: {} },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
