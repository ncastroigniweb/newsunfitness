(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-signup-signup-module~pages-start-start-module"],{

/***/ "+dSU":
/*!*****************************************************!*\
  !*** ./src/app/pages/termsguest/termsguest.page.ts ***!
  \*****************************************************/
/*! exports provided: TermsguestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsguestPage", function() { return TermsguestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_termsguest_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./termsguest.page.html */ "M9Zl");
/* harmony import */ var _termsguest_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./termsguest.page.scss */ "4zqP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/strings */ "3kIx");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/data.service */ "EnSQ");



/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/member-ordering */




let TermsguestPage = class TermsguestPage {
    constructor(modalCtrl, dataService) {
        this.modalCtrl = modalCtrl;
        this.dataService = dataService;
        this.isLoading = true;
        // tslint:disable-next-line: variable-name
        this._strings = _config_strings__WEBPACK_IMPORTED_MODULE_5__["strings"];
    }
    get strings() {
        return this._strings;
    }
    ngOnInit() {
        this.isLoading = true;
        this.dataService.getDataStrings()
            .subscribe(resp => {
            const data = resp[0];
            this.privacypolicy = data.st_privacypolicy;
            this.termsofservice = data.st_termsofservice;
            this.isLoading = false;
        });
    }
    goClosePage() {
        this.modalCtrl.dismiss();
    }
};
TermsguestPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] }
];
TermsguestPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-termsguest',
        template: _raw_loader_termsguest_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_termsguest_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TermsguestPage);



/***/ }),

/***/ "4zqP":
/*!*******************************************************!*\
  !*** ./src/app/pages/termsguest/termsguest.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXJtc2d1ZXN0LnBhZ2Uuc2NzcyJ9 */");

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

/***/ "M9Zl":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/termsguest/termsguest.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\">\n      <ion-title class=\"ion-text-capitalize\">\n        {{strings.ST82}}\n      </ion-title>\n      <ion-buttons slot=\"start\">\n          <ion-buttons slot=\"start\">\n            <ion-button color=\"dark\" mode=\"md\" (click)=\"goClosePage()\" slot=\"start\">\n              <ion-icon name=\"chevron-back-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" fixed>\n\n  <app-loading *ngIf=\"isLoading\"></app-loading>\n  \n  <div *ngIf=\"!isLoading\">\n  <div [innerHTML]=\"privacypolicy\"></div>\n  <div [innerHTML]=\"termsofservice\"></div>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "P3JS":
/*!*******************************************************!*\
  !*** ./src/app/pages/termsguest/termsguest.module.ts ***!
  \*******************************************************/
/*! exports provided: TermsguestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsguestPageModule", function() { return TermsguestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _termsguest_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./termsguest-routing.module */ "kwsO");
/* harmony import */ var _termsguest_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./termsguest.page */ "+dSU");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let TermsguestPageModule = class TermsguestPageModule {
};
TermsguestPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _termsguest_routing_module__WEBPACK_IMPORTED_MODULE_5__["TermsguestPageRoutingModule"]
        ],
        declarations: [_termsguest_page__WEBPACK_IMPORTED_MODULE_6__["TermsguestPage"]]
    })
], TermsguestPageModule);



/***/ }),

/***/ "UUSl":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.module.ts ***!
  \***********************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup-routing.module */ "eOyQ");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "XHxw");
/* harmony import */ var _termsguest_termsguest_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../termsguest/termsguest.module */ "P3JS");








let SignupPageModule = class SignupPageModule {
};
SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"],
            _termsguest_termsguest_module__WEBPACK_IMPORTED_MODULE_7__["TermsguestPageModule"]
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
    })
], SignupPageModule);



/***/ }),

/***/ "XHxw":
/*!*********************************************!*\
  !*** ./src/app/pages/signup/signup.page.ts ***!
  \*********************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./signup.page.html */ "vfPX");
/* harmony import */ var _signup_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup.page.scss */ "bYg9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../config/strings */ "3kIx");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../config/config */ "0np6");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var _termsguest_termsguest_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../termsguest/termsguest.page */ "+dSU");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/firebase.service */ "Z2Br");



/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/member-ordering */













let SignupPage = class SignupPage {
    constructor(authService, navCtrl, formBuilder, router, menuCtrl, modalCtrl, loadingController, http, firebase) {
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.modalCtrl = modalCtrl;
        this.loadingController = loadingController;
        this.http = http;
        this.firebase = firebase;
        this.data_user = {};
        // Http Options
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            })
        };
        // tslint:disable-next-line: variable-name
        this._strings = _config_strings__WEBPACK_IMPORTED_MODULE_9__["strings"];
    }
    get strings() {
        return this._strings;
    }
    ngOnInit() {
        this.validationsform = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ])),
        });
    }
    tryRegister(value) {
        this.authService.doRegister(value)
            .then(res => {
            firebase_app__WEBPACK_IMPORTED_MODULE_11__["default"].auth().currentUser.updateProfile({
                displayName: value.name,
            });
            this.modalCtrl.dismiss();
            console.log("Display: " + value.name);
            let data_user = {
                id_user: this.firebase.getIdUser(),
                display_name: value.name
            };
            this.http.post(_config_config__WEBPACK_IMPORTED_MODULE_10__["config"].Url + '/controller/guardar_display.php', data_user, this.httpOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["catchError"])((error) => {
                console.error('Error en la solicitud:', error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["throwError"])('Algo salió mal. Por favor, inténtalo de nuevo más tarde.');
            })).subscribe(data => {
                if (data === 'false') {
                    this.presentAlert(_config_strings__WEBPACK_IMPORTED_MODULE_9__["strings"].ST32);
                }
                else {
                    this.presentAlert(_config_strings__WEBPACK_IMPORTED_MODULE_9__["strings"].ST74);
                }
            }, error => {
                console.log(error);
            });
            this.router.navigate(['/home']);
        }, err => {
            if (err.code === 'auth/email-already-in-use') {
                this.presentAlert(_config_strings__WEBPACK_IMPORTED_MODULE_9__["strings"].ST36);
            }
            else {
                this.presentAlert(_config_strings__WEBPACK_IMPORTED_MODULE_9__["strings"].ST32);
            }
        });
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false);
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
    goClosePage() {
        this.modalCtrl.dismiss();
    }
    goTermsPage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _termsguest_termsguest_page__WEBPACK_IMPORTED_MODULE_12__["TermsguestPage"],
            });
            modal.present();
        });
    }
};
SignupPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_15__["FirebaseService"] }
];
SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-signup',
        template: _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_signup_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SignupPage);



/***/ }),

/***/ "bYg9":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".start-logo {\n  max-width: 140px;\n  margin-bottom: 40px;\n}\n\n.button-h {\n  height: 50px;\n  font-size: 14px;\n  font-weight: bold !important;\n  margin: 0 !important;\n  margin-top: 10px !important;\n  text-transform: uppercase !important;\n}\n\n.go-to-terms {\n  text-align: center;\n  margin-top: 20px;\n  font-size: 13px;\n  text-transform: uppercase !important;\n}\n\n.go-to-terms a {\n  color: #807e7e;\n}\n\n.line-input {\n  margin-bottom: 0 !important;\n}\n\n.line-input ion-item {\n  --border-color: transparent!important;\n  --background-activated: white;\n  --background-focused: white;\n  --background-hover: white;\n  --highlight-height: 0;\n  border: 1px solid #807e7e;\n  border-radius: 50px;\n}\n\n.line-input ion-item.item-has-focus {\n  border: 1px solid var(--ion-color-primary);\n}\n\n.line-input ion-item ion-label {\n  color: #807e7e !important;\n  font-weight: 300;\n  font-size: 14px !important;\n}\n\n.line-input ion-item ion-icon {\n  color: #807e7e !important;\n  margin-right: 8px !important;\n}\n\n.sc-ion-input-ios-h {\n  font-size: 14px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaWdudXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQ0FBQTtBQUNKOztBQUVBO0VBRUUsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtBQUFGOztBQUdBO0VBRUUsY0FBQTtBQURGOztBQUlBO0VBQ0ksMkJBQUE7QUFESjs7QUFFSTtFQUNJLHFDQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBQVI7O0FBRVE7RUFDSSwwQ0FBQTtBQUFaOztBQUdRO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FBRFo7O0FBSVE7RUFDSSx5QkFBQTtFQUNBLDRCQUFBO0FBRlo7O0FBT0E7RUFDSSwwQkFBQTtBQUpKIiwiZmlsZSI6InNpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhcnQtbG9nb3tcbiAgICBtYXgtd2lkdGg6IDE0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi5idXR0b24taHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcbn1cblxuLmdvLXRvLXRlcm1zXG57XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XG59XG5cbi5nby10by10ZXJtcyBhXG57XG4gIGNvbG9yOiAjODA3ZTdlO1xufVxuXG4ubGluZS1pbnB1dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMCFpbXBvcnRhbnQ7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xuICAgICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB3aGl0ZTtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHdoaXRlO1xuICAgICAgICAtLWJhY2tncm91bmQtaG92ZXI6IHdoaXRlO1xuICAgICAgICAtLWhpZ2hsaWdodC1oZWlnaHQ6IDA7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM4MDdlN2U7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG5cbiAgICAgICAgJi5pdGVtLWhhcy1mb2N1cyB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIH1cblxuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgY29sb3I6ICM4MDdlN2UhaW1wb3J0YW50O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweCFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgIGNvbG9yOiAjODA3ZTdlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uc2MtaW9uLWlucHV0LWlvcy1oe1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "eOyQ":
/*!*******************************************************!*\
  !*** ./src/app/pages/signup/signup-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SignupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function() { return SignupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.page */ "XHxw");




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ "kwsO":
/*!***************************************************************!*\
  !*** ./src/app/pages/termsguest/termsguest-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: TermsguestPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsguestPageRoutingModule", function() { return TermsguestPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _termsguest_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./termsguest.page */ "+dSU");




const routes = [
    {
        path: '',
        component: _termsguest_page__WEBPACK_IMPORTED_MODULE_3__["TermsguestPage"]
    }
];
let TermsguestPageRoutingModule = class TermsguestPageRoutingModule {
};
TermsguestPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TermsguestPageRoutingModule);



/***/ }),

/***/ "vfPX":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\">\n      <ion-title class=\"ion-text-capitalize\">\n        {{strings.ST27}}\n      </ion-title>\n          <ion-buttons slot=\"start\">\n            <ion-button color=\"dark\" mode=\"md\" (click)=\"goClosePage()\" slot=\"start\">\n              <ion-icon name=\"chevron-back-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fixed>\n\n<ion-grid fixed style=\"height: 100%;\">\n\n    <ion-row class=\"ion-justify-content-center ion-align-items-center\" style=\"height: 100%;\">\n      <ion-col size=\"8\" class=\"ion-text-center\">\n        <img src=\"./assets/images/logo_dark.png\" class=\"start-logo\"/>\n  \n  <form class=\"form\" [formGroup]=\"validationsform\" (ngSubmit)=\"tryRegister(validationsform.value)\">\n              <ion-list class=\"line-input\" mode=\"md\"> \n                <ion-item mode=\"md\">\n                    <ion-icon name=\"person-outline\" size=\"small\" slot=\"start\"></ion-icon>\n              <ion-input class=\"ion-text-left\" placeholder=\"Nombre\" type=\"text\" formControlName=\"name\"></ion-input>\n                </ion-item> \n              </ion-list>\n\n              <ion-list class=\"line-input\" mode=\"md\"> \n                <ion-item mode=\"md\">\n                    <ion-icon name=\"mail-outline\" size=\"small\" slot=\"start\"></ion-icon>\n              <ion-input class=\"ion-text-left\" placeholder=\"Correo\" type=\"email\" formControlName=\"email\"></ion-input>\n                </ion-item> \n              </ion-list>\n\n              <ion-list class=\"line-input\" mode=\"md\"> \n                  <ion-item mode=\"md\"> \n                <ion-icon name=\"lock-closed-outline\" size=\"small\" slot=\"start\"></ion-icon>\n              <ion-input class=\"ion-text-left\" type=\"password\" placeholder=\"Contraseña\" formControlName=\"password\"></ion-input>\n                  </ion-item> \n              </ion-list>\n            <ion-button class=\"button-h\" mode=\"ios\" type=\"submit\" [disabled]=\"!validationsform.valid\" color=\"primary\" fill=\"solid\" size=\"default\" shape=\"round\" expand=\"block\">\n              {{strings.ST28}}\n            </ion-button>\n          </form>\n\n          <p class=\"go-to-terms\">\n              <a (click)=\"goTermsPage()\">{{strings.ST82}}</a>\n          </p>\n  \n      </ion-col>\n    </ion-row>\n  \n  </ion-grid>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default~pages-signup-signup-module~pages-start-start-module-es2015.js.map