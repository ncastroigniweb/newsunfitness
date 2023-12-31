(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-miprogreso-miprogreso-module"],{

/***/ "0np6":
/*!**********************************!*\
  !*** ./src/app/config/config.ts ***!
  \**********************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* eslint-disable @typescript-eslint/naming-convention */
const config = {
    // backend url
    Url: 'https://pruebas.innovaweb.com.co',
    // facebook page url
    Facebook: 'https://facebook.com',
    // youtube page url
    Youtube: 'https://youtube.com',
    // twitter page url
    Twitter: 'https://twitter.com',
    // twitter page url
    Instagram: 'https://instagram.com',
    // admob banner id
    BannerId: '',
    StatusBarColor: '#f39c12',
};


/***/ }),

/***/ "7jo8":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/miprogreso/miprogreso.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-button (click)=\"backButton()\" slot=\"start\" mode=\"md\" >\n      <ion-icon [color]=\"color\" mode=\"md\" name=\"arrow-back-outline\"></ion-icon>\n    </ion-button>\n    <ion-title mode=\"ios\" class=\"ion-text-center\"\n      >Mi progreso dia {{this.day}}</ion-title\n    >\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <app-loading></app-loading>\n\n  <ion-content>\n    <ion-grid class=\"ion-no-padding\">\n      <ion-row\n        class=\"header-bg\"\n        [style.background-image]=\"'url(' + (config.Url + '/images/' + workout.workout_image) + ')'\"\n        [ngStyle]=\"{'height': innerHeight}\"\n      >\n        <div class=\"text\">\n          <p class=\"name\">{{workout.workout_title}}</p>\n          <p class=\"time\">{{workout.workout_duration}} {{strings.ST95}}</p>\n        </div>\n      </ion-row>\n      <ion-row class=\"cols\">\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <p class=\"text\">Sube aquí tu progreso</p>\n        </ion-col>\n        \n      </ion-row>\n    </ion-grid>\n\n    <div class=\"progreso_temporal\" >\n      <ion-grid class=\"ion-no-padding\">\n      <ion-row class=\"header-bg\">\n        <ion-spinner name=\"dots\" *ngIf=\"procesando\"></ion-spinner>\n        <img [src]=\"tempImg\"  [ngStyle]=\"{'height': innerHeight} \" *ngIf=\"tempImg\">\n        <img [src]=\"config.Url + '/uploads/images/' + bdImg.url_imagen\"  [ngStyle]=\"{'height': innerHeight} \" *ngIf=\"bdImg && !tempImg\">\n      </ion-row>\n      <ion-row class=\"cols\">\n        <ion-col size=\"12\" class=\"ion-text-center\" >\n          <p class=\"text\"><ion-button\n            (click)=\"presentActionSheet()\"\n            class=\"primary ion-text-uppercase ion-text-bold ios button button-block button-solid ion-activatable ion-focusable hydrated\"\n            mode=\"ios\"\n            expand=\"block\"\n          >\n            Abrir\n            <ion-icon slot=\"start\" name=\"log-in-outline\"></ion-icon>\n          </ion-button></p>\n        </ion-col>\n        <!-- <ion-col size=\"12\" class=\"ion-text-center \" *ngIf=\"tempImg || bdImg\" *ngIf=\"!tempImg && !bdImg\">\n          <p class=\"text\" ><ion-button\n            (click)=\"eliminar_foto()\"\n            class=\"primary ion-text-uppercase ion-text-bold ios button button-block button-solid ion-activatable ion-focusable hydrated\"\n            mode=\"ios\"\n            expand=\"block\"\n          >\n            Eliminar\n            <ion-icon slot=\"start\" name=\"trash-outline\"></ion-icon>\n          </ion-button></p>\n        </ion-col>-->\n        \n      </ion-row>\n    </ion-grid>\n    </div>\n  \n\n\n\n");

/***/ }),

/***/ "9XBZ":
/*!*******************************************************!*\
  !*** ./src/app/pages/miprogreso/miprogreso.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-bg {\n  background-position: center;\n  background-size: cover;\n  align-items: center;\n  justify-content: center;\n}\n\n.header-bg .text {\n  color: #fff;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.6);\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 10px 30px;\n}\n\n.header-bg .name {\n  color: #ffffff;\n  text-align: center;\n  margin-bottom: 9px;\n  font-weight: bold;\n  font-size: 15px;\n  text-transform: capitalize;\n}\n\n.header-bg .time {\n  color: var(--ion-color-primary);\n  margin-top: 5px;\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.cols {\n  background-color: #f9f9f9;\n  padding: 10px 0;\n}\n\n.cols .text {\n  color: var(--ion-color-primary);\n  font-weight: bold;\n  text-transform: uppercase;\n  margin: 0;\n  padding-bottom: 5px;\n}\n\n.cols .value {\n  text-transform: uppercase;\n  margin: 0;\n  color: var(--ion-color-dark);\n  font-size: 14px;\n  opacity: 0.7;\n}\n\n.days {\n  padding: 16px;\n}\n\n.tags {\n  background-color: #f9f9f9;\n  border-left: 3px solid var(--ion-color-primary);\n  padding: 15px;\n  position: relative;\n  margin-bottom: 10px;\n}\n\n.tags h1 {\n  font-size: 13px;\n  text-transform: uppercase;\n  font-weight: bold;\n  margin: 0;\n}\n\n.tags ion-icon {\n  position: absolute;\n  right: 14px;\n  top: 11px;\n  font-size: 22px;\n}\n\n.img_progreso {\n  width: 300px;\n}\n\n.btn-eliminar {\n  background-color: red !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtaXByb2dyZXNvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FBQ0o7O0FBRUE7RUFDSSwrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSwrQ0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDQSxZQUFBO0FBQ0E7O0FBRUE7RUFDSSxnQ0FBQTtBQUNKIiwiZmlsZSI6Im1pcHJvZ3Jlc28ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1iZ3tcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXItYmcgLnRleHR7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42MCk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLWJnIC5uYW1le1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA5cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4uaGVhZGVyLWJnIC50aW1le1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmNvbHN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG59XHJcblxyXG4uY29scyAudGV4dHtcclxuICAgIGNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn0gXHJcblxyXG4uY29scyAudmFsdWV7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6dmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG59IFxyXG5cclxuLmRheXN7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG4udGFnc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4udGFncyBoMXtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbjowO1xyXG59XHJcblxyXG4udGFncyBpb24taWNvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxNHB4O1xyXG4gICAgdG9wOiAxMXB4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcblxyXG4uaW1nX3Byb2dyZXNve1xyXG53aWR0aDogMzAwcHg7O1xyXG59XHJcblxyXG4uYnRuLWVsaW1pbmFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "AVSq":
/*!*******************************************************!*\
  !*** ./src/app/pages/miprogreso/miprogreso.module.ts ***!
  \*******************************************************/
/*! exports provided: MiprogresoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiprogresoPageModule", function() { return MiprogresoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _miprogreso_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./miprogreso-routing.module */ "zX3P");
/* harmony import */ var _miprogreso_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./miprogreso.page */ "EhF8");







let MiprogresoPageModule = class MiprogresoPageModule {
};
MiprogresoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _miprogreso_routing_module__WEBPACK_IMPORTED_MODULE_5__["MiprogresoPageRoutingModule"]
        ],
        declarations: [_miprogreso_page__WEBPACK_IMPORTED_MODULE_6__["MiprogresoPage"]]
    })
], MiprogresoPageModule);



/***/ }),

/***/ "EhF8":
/*!*****************************************************!*\
  !*** ./src/app/pages/miprogreso/miprogreso.page.ts ***!
  \*****************************************************/
/*! exports provided: MiprogresoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiprogresoPage", function() { return MiprogresoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_miprogreso_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./miprogreso.page.html */ "7jo8");
/* harmony import */ var _miprogreso_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./miprogreso.page.scss */ "9XBZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ "vaRf");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/data.service */ "EnSQ");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config/strings */ "3kIx");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config/config */ "0np6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_favorite_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/favorite.service */ "kUbd");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/firebase.service */ "Z2Br");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ "qCKp");


















let MiprogresoPage = class MiprogresoPage {
    constructor(camera, dataService, router, route, plt, dataFavorite, loadingController, sanitizer, firebase, authService, http, navCtrl, actionSheetController) {
        this.camera = camera;
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.plt = plt;
        this.dataFavorite = dataFavorite;
        this.loadingController = loadingController;
        this.sanitizer = sanitizer;
        this.firebase = firebase;
        this.authService = authService;
        this.http = http;
        this.navCtrl = navCtrl;
        this.actionSheetController = actionSheetController;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_6__["strings"];
        this.isLoading = false;
        this.workout = {};
        this.icon = 'star-outline';
        this.config = _config_config__WEBPACK_IMPORTED_MODULE_7__["config"];
        this.bdImg = {};
        this.progreso = [];
        // Http Options
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpHeaders"]({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            })
        };
    }
    openCamera() {
        this.procesando = true;
        const options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        };
        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            let base64Image = 'data:image/jpeg;base64,' + imageData;
            this.tempImg = this.sanitizer.bypassSecurityTrustResourceUrl(base64Image);
            this.guardar_foto(base64Image);
            //console.log("62 -->", base64Image);
            let data = {
                image: base64Image,
            };
            // this.dataService.postImage(data);
        }, (err) => {
            // Handle error
        });
        this.procesando = false;
    }
    eliminar_foto() {
        this.tempImg = '';
        this.bdImg = '';
    }
    ngOnInit() {
    }
    guardar_foto(base64Image) {
        let data_progreso = {
            id_user: this.id_user,
            id_workout: this.id,
            day: this.day,
            imagen: base64Image
        };
        this.http.post(_config_config__WEBPACK_IMPORTED_MODULE_7__["config"].Url + '/controller/procesar_imagen.php', data_progreso, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["catchError"])((error) => {
            console.error('Error en la solicitud:', error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_16__["throwError"])('Algo salió mal. Por favor, inténtalo de nuevo más tarde.');
        })).subscribe(data => {
            if (data === 'false') {
                this.presentAlert(_config_strings__WEBPACK_IMPORTED_MODULE_6__["strings"].ST32);
            }
            else {
                this.presentAlert(_config_strings__WEBPACK_IMPORTED_MODULE_6__["strings"].ST118);
            }
        }, error => {
            console.log(error);
        });
    }
    presentAlert(value) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                spinner: null,
                duration: 2000,
                message: value,
                mode: 'ios'
            });
            yield loading.present();
        });
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = true;
            this.innerHeight = this.plt.height() / 3 + 'px';
            this.id_user = yield this.firebase.getIdUser();
            //console.log("ID USUARIO: " + this.id_user);
            this.route.params.subscribe(data => {
                this.id = data.id;
                this.day = data.day;
                this.getDetails();
                //console.log("ID: " + data.id);
            });
            this.dataService.getProgreso(this.id, this.day, this.id_user)
                .subscribe(resp => {
                this.progreso = resp;
                this.bdImg = resp[0];
                this.isLoading = false;
            });
        });
    }
    getDetails() {
        this.dataService.getDataWorkoutById(this.id)
            .subscribe(resp => {
            this.workout = resp[0];
            this.isLoading = false;
        });
    }
    backButton() {
        this.navCtrl.back();
    }
    presentActionSheet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
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
            yield actionSheet.present();
            const { role } = yield actionSheet.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
};
MiprogresoPage.ctorParameters = () => [
    { type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"] },
    { type: _services_favorite_service__WEBPACK_IMPORTED_MODULE_10__["FavoriteService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["LoadingController"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_12__["FirebaseService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ActionSheetController"] }
];
MiprogresoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-miprogreso',
        template: _raw_loader_miprogreso_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_miprogreso_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MiprogresoPage);



/***/ }),

/***/ "EnSQ":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/config */ "0np6");

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable max-len */



const Url = _config_config__WEBPACK_IMPORTED_MODULE_3__["config"].Url;
let DataService = class DataService {
    constructor(http) {
        this.http = http;
        this.page = 0;
        // Http Options
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                Accept: "application/json",
                "Content-Type": "application/json",
            }),
        };
    }
    ejectQuery(query) {
        query = Url + query;
        return this.http.get(query);
    }
    postImage(data) {
        this.http
            .post(_config_config__WEBPACK_IMPORTED_MODULE_3__["config"].Url + "/controller/contactform.php", data, this.httpOptions)
            .subscribe((data) => {
            if (data === "false") {
            }
            else {
            }
        }, (error) => {
            console.log(error);
        });
    }
    getDataStrings() {
        return this.ejectQuery("/json/data_strings.php");
    }
    getDataPosts() {
        return this.ejectQuery("/json/data_posts.php");
    }
    getDataTags() {
        return this.ejectQuery("/json/data_tags.php");
    }
    getDataPostById(id) {
        return this.ejectQuery(`/json/data_posts.php?post=${id}`);
    }
    getDataPostsByTag(id) {
        return this.ejectQuery(`/json/data_posts.php?tag=${id}`);
    }
    getDataDiets() {
        return this.ejectQuery("/json/data_diets.php");
    }
    getDataCategories() {
        return this.ejectQuery("/json/data_categories.php");
    }
    getDataDietById(id) {
        return this.ejectQuery(`/json/data_diets.php?diet=${id}`);
    }
    getDataDietsByCategory(id) {
        return this.ejectQuery(`/json/data_diets.php?category=${id}`);
    }
    getDataGoals() {
        return this.ejectQuery("/json/data_goals.php");
    }
    getDataLevels() {
        return this.ejectQuery("/json/data_levels.php");
    }
    getProgreso(id, day, id_user) {
        return this.ejectQuery(`/json/data_progreso.php?id=${id}&day=${day}&id_user=${id_user}`);
    }
    getDataEquipments() {
        return this.ejectQuery("/json/data_equipments.php");
    }
    getDataBodyparts() {
        return this.ejectQuery("/json/data_bodyparts.php");
    }
    getDataQuotes() {
        return this.ejectQuery("/json/data_quotes.php");
    }
    getDataWorkoutsByGoal(id) {
        return this.ejectQuery(`/json/data_workouts.php?goal=${id}`);
    }
    getDataWorkoutsByLevel(id) {
        return this.ejectQuery(`/json/data_workouts.php?level=${id}`);
    }
    getDataExercisesByEquipment(id) {
        return this.ejectQuery(`/json/data_equipment.php?equipment=${id}`);
    }
    getDataExercisesByBodypart(id) {
        return this.ejectQuery(`/json/data_muscle.php?muscle=${id}`);
    }
    getDataExerciseById(id) {
        return this.ejectQuery(`/json/data_exercises.php?exercise=${id}`);
    }
    getDataWorkoutById(id) {
        return this.ejectQuery(`/json/data_workouts.php?workout=${id}`);
    }
    getDataWorkoutExercisesByDay(id, day) {
        return this.ejectQuery(`/json/data_days.php?id=${id}&day=${day}`);
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], DataService);



/***/ }),

/***/ "kUbd":
/*!**********************************************!*\
  !*** ./src/app/services/favorite.service.ts ***!
  \**********************************************/
/*! exports provided: FavoriteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteService", function() { return FavoriteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "fwsW");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable prefer-arrow/prefer-arrow-functions */



let FavoriteService = class FavoriteService {
    constructor(storage, toastCtrl) {
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.posts = [];
        this.diets = [];
        this.workouts = [];
    }
    presentToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message,
                duration: 1500,
                mode: 'ios',
                color: 'dark',
                cssClass: 'ion-toast'
            });
            toast.present();
        });
    }
    // ------------------------------- POSTS
    savePost(post) {
        let exist = false;
        for (const item of this.posts) {
            if (item.id === post.id) {
                exist = true;
                break;
            }
        }
        if (exist) {
            this.posts = this.posts.filter(item => item.id !== post.id);
        }
        else {
            this.posts.push(post);
        }
        this.storage.set('posts', this.posts);
        return !exist;
    }
    loadPosts() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.storage.create();
            const posts = yield this.storage.get('posts');
            this.posts = posts || [];
            return this.posts;
        });
    }
    existPost(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loadPosts();
            const exist = this.posts.find(post => post.id === id);
            return (exist) ? true : false;
        });
    }
    removePost(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // tslint:disable-next-line: only-arrow-functions
            const ArrayFav = this.posts.filter(function (e) { return e.id !== id; });
            this.storage.set('posts', ArrayFav);
        });
    }
    // ------------------------------- DIETS
    saveDiet(diet) {
        let exist = false;
        for (const item of this.diets) {
            if (item.id === diet.id) {
                exist = true;
                break;
            }
        }
        if (exist) {
            this.diets = this.diets.filter(item => item.id !== diet.id);
        }
        else {
            this.diets.push(diet);
        }
        this.storage.set('diets', this.diets);
        return !exist;
    }
    loadDiets() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.storage.create();
            const diets = yield this.storage.get('diets');
            this.diets = diets || [];
            return this.diets;
        });
    }
    existDiet(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loadDiets();
            const exist = this.diets.find(diet => diet.id === id);
            return (exist) ? true : false;
        });
    }
    removeDiet(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // tslint:disable-next-line: only-arrow-functions
            const ArrayFav = this.diets.filter(function (e) { return e.id !== id; });
            this.storage.set('diets', ArrayFav);
        });
    }
    // ------------------------------- WORKOUTS
    saveWorkout(workout) {
        let exist = false;
        for (const item of this.workouts) {
            if (item.id === workout.id) {
                exist = true;
                break;
            }
        }
        if (exist) {
            this.workouts = this.workouts.filter(item => item.id !== workout.id);
        }
        else {
            this.workouts.push(workout);
        }
        this.storage.set('workouts', this.workouts);
        return !exist;
    }
    loadWorkouts() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.storage.create();
            const workouts = yield this.storage.get('workouts');
            this.workouts = workouts || [];
            return this.workouts;
        });
    }
    existWorkout(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loadWorkouts();
            const exist = this.workouts.find(workout => workout.id === id);
            return (exist) ? true : false;
        });
    }
    removeWorkout(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // tslint:disable-next-line: only-arrow-functions
            const ArrayFav = this.workouts.filter(function (e) { return e.id !== id; });
            this.storage.set('workouts', ArrayFav);
        });
    }
};
FavoriteService.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
FavoriteService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FavoriteService);



/***/ }),

/***/ "zX3P":
/*!***************************************************************!*\
  !*** ./src/app/pages/miprogreso/miprogreso-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: MiprogresoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiprogresoPageRoutingModule", function() { return MiprogresoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _miprogreso_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./miprogreso.page */ "EhF8");




const routes = [
    {
        path: '',
        component: _miprogreso_page__WEBPACK_IMPORTED_MODULE_3__["MiprogresoPage"]
    }
];
let MiprogresoPageRoutingModule = class MiprogresoPageRoutingModule {
};
MiprogresoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MiprogresoPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-miprogreso-miprogreso-module-es2015.js.map