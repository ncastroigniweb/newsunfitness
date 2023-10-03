(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-start-start-module"],{

/***/ "Ryxb":
/*!*****************************************************!*\
  !*** ./src/app/pages/start/start-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: StartPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPageRoutingModule", function() { return StartPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _start_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./start.page */ "x2OB");




const routes = [
    {
        path: '',
        component: _start_page__WEBPACK_IMPORTED_MODULE_3__["StartPage"]
    }
];
let StartPageRoutingModule = class StartPageRoutingModule {
};
StartPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StartPageRoutingModule);



/***/ }),

/***/ "TXlj":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/start/start.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content fixed class=\"dark\">\n\n  <ion-grid fixed class=\"grid-bg\">\n  \n    <ion-row class=\"ion-justify-content-center ion-align-items-center\" style=\"height: 100%;\">\n      <ion-col size=\"8\" class=\"ion-text-center\">\n        <img src=\"./assets/images/logo.png\" class=\"start-logo\"/>\n  \n        <ion-button class=\"button-h start-button\" mode=\"ios\" (click)=\"goLoginPage()\" color=\"primary\" fill=\"solid\" size=\"default\" shape=\"round\" expand=\"block\">\n          {{strings.ST26}}\n        </ion-button>\n  \n        <ion-button class=\"button-h margin-h start-button\" (click)=\"goSignUpPage()\" mode=\"ios\" color=\"primary\" fill=\"outline\" size=\"default\" shape=\"round\" expand=\"block\">\n          {{strings.ST27}}\n        </ion-button>\n  \n      </ion-col>\n    </ion-row>\n  \n  </ion-grid>\n  \n  </ion-content>\n  ");

/***/ }),

/***/ "f9I+":
/*!*********************************************!*\
  !*** ./src/app/pages/start/start.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".grid-bg {\n  height: 100%;\n  background-image: url('bg.jpg');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.start-logo {\n  max-width: 140px;\n  margin-bottom: 40px;\n}\n\n.margin-h {\n  margin-top: 15px !important;\n  margin-bottom: 15px !important;\n}\n\n.button-h {\n  height: 50px;\n  font-size: 14px;\n  font-weight: bold !important;\n}\n\n.color-facebook {\n  --background: #3b5998 !important;\n  --background-hover: #3b5998 !important;\n  --background-activated: #3b5998 !important;\n  --background-focused: #3b5998 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzdGFydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUFBSjs7QUFHQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHQTtFQUNJLDJCQUFBO0VBQ0EsOEJBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUFBSjs7QUFHQTtFQUNJLGdDQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQ0FBQTtFQUNBLHdDQUFBO0FBQUoiLCJmaWxlIjoic3RhcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uZ3JpZC1iZ3tcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnLmpwZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5zdGFydC1sb2dve1xuICAgIG1heC13aWR0aDogMTQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuLm1hcmdpbi1oe1xuICAgIG1hcmdpbi10b3A6IDE1cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b24taHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci1mYWNlYm9va3tcbiAgICAtLWJhY2tncm91bmQ6ICMzYjU5OTggIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6ICMzYjU5OTggIWltcG9ydGFudDtcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjM2I1OTk4ICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6ICMzYjU5OTggIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "ulMc":
/*!*********************************************!*\
  !*** ./src/app/pages/start/start.module.ts ***!
  \*********************************************/
/*! exports provided: StartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPageModule", function() { return StartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _start_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./start-routing.module */ "Ryxb");
/* harmony import */ var _start_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./start.page */ "x2OB");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../login/login.module */ "F4UR");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");
/* harmony import */ var _signup_signup_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../signup/signup.module */ "UUSl");










let StartPageModule = class StartPageModule {
};
StartPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _start_routing_module__WEBPACK_IMPORTED_MODULE_5__["StartPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _login_login_module__WEBPACK_IMPORTED_MODULE_7__["LoginPageModule"],
            _signup_signup_module__WEBPACK_IMPORTED_MODULE_9__["SignupPageModule"]
        ],
        declarations: [_start_page__WEBPACK_IMPORTED_MODULE_6__["StartPage"]]
    })
], StartPageModule);



/***/ }),

/***/ "x2OB":
/*!*******************************************!*\
  !*** ./src/app/pages/start/start.page.ts ***!
  \*******************************************/
/*! exports provided: StartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPage", function() { return StartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_start_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./start.page.html */ "TXlj");
/* harmony import */ var _start_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./start.page.scss */ "f9I+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _login_login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../login/login.page */ "bP1B");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../config/strings */ "3kIx");
/* harmony import */ var _signup_signup_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../signup/signup.page */ "XHxw");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");



/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/member-ordering */









let StartPage = class StartPage {
    constructor(menuCtrl, statusBar, authService, navCtrl, router, modalCtrl, loadingController) {
        this.menuCtrl = menuCtrl;
        this.statusBar = statusBar;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.loadingController = loadingController;
        this._strings = _config_strings__WEBPACK_IMPORTED_MODULE_8__["strings"];
    }
    get strings() {
        return this._strings;
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }
    ngOnInit() {
        this.statusBar.styleDefault();
        this.statusBar.backgroundColorByHexString('#ffffff');
    }
    goLoginPage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _login_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"],
            });
            modal.present();
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
    goSignUpPage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _signup_signup_page__WEBPACK_IMPORTED_MODULE_9__["SignupPage"],
            });
            modal.present();
        });
    }
};
StartPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_10__["StatusBar"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
StartPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-start',
        template: _raw_loader_start_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_start_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], StartPage);



/***/ })

}]);
//# sourceMappingURL=pages-start-start-module-es2015.js.map