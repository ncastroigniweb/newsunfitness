(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-forgotpass-forgotpass-module"],{

/***/ "0VIz":
/*!***************************************************************!*\
  !*** ./src/app/pages/forgotpass/forgotpass-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ForgotpassPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpassPageRoutingModule", function() { return ForgotpassPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _forgotpass_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgotpass.page */ "c2Mu");




const routes = [
    {
        path: '',
        component: _forgotpass_page__WEBPACK_IMPORTED_MODULE_3__["ForgotpassPage"]
    }
];
let ForgotpassPageRoutingModule = class ForgotpassPageRoutingModule {
};
ForgotpassPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ForgotpassPageRoutingModule);



/***/ }),

/***/ "G09Y":
/*!*******************************************************!*\
  !*** ./src/app/pages/forgotpass/forgotpass.module.ts ***!
  \*******************************************************/
/*! exports provided: ForgotpassPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpassPageModule", function() { return ForgotpassPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _forgotpass_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgotpass-routing.module */ "0VIz");
/* harmony import */ var _forgotpass_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgotpass.page */ "c2Mu");







let ForgotpassPageModule = class ForgotpassPageModule {
};
ForgotpassPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _forgotpass_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotpassPageRoutingModule"]
        ],
        declarations: [_forgotpass_page__WEBPACK_IMPORTED_MODULE_6__["ForgotpassPage"]]
    })
], ForgotpassPageModule);



/***/ }),

/***/ "NSb+":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgotpass/forgotpass.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\">\n      <ion-title class=\"ion-text-capitalize\">\n        {{strings.ST29}}\n      </ion-title>\n          <ion-buttons slot=\"start\">\n            <ion-button color=\"dark\" mode=\"md\" (click)=\"goClosePage()\" slot=\"start\">\n              <ion-icon name=\"chevron-back-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<ion-grid fixed style=\"height: 100%;\">\n\n    <ion-row class=\"ion-justify-content-center ion-align-items-center\" style=\"height: 100%;\">\n      <ion-col size=\"8\" class=\"ion-text-center\">\n        <img src=\"./assets/images/logo_dark.png\" class=\"start-logo\"/>\n  \n        <form class=\"form\" autocomplete=\"off\" [formGroup]=\"validationsform\" (ngSubmit)=\"tryRestPass(validationsform.value)\">\n            <ion-list class=\"line-input\" mode=\"md\"> \n                <ion-item mode=\"md\">\n                    <ion-icon name=\"mail-outline\" size=\"small\" slot=\"start\"></ion-icon>\n              <ion-input class=\"ion-text-left\" placeholder=\"Email\" type=\"email\" formControlName=\"email\"></ion-input>\n                </ion-item> \n              </ion-list>\n            <ion-button class=\"button-h\" mode=\"ios\" type=\"submit\" [disabled]=\"!validationsform.valid\" color=\"primary\" fill=\"solid\" size=\"default\" shape=\"round\" expand=\"block\">\n              {{strings.ST28}}\n            </ion-button>\n          </form>\n\n          <p class=\"go-to-restpass\">\n              <a (click)=\"goClosePage()\">{{strings.ST35}}</a>\n            </p>\n  \n      </ion-col>\n    </ion-row>\n  \n  </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ "c2Mu":
/*!*****************************************************!*\
  !*** ./src/app/pages/forgotpass/forgotpass.page.ts ***!
  \*****************************************************/
/*! exports provided: ForgotpassPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpassPage", function() { return ForgotpassPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_forgotpass_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./forgotpass.page.html */ "NSb+");
/* harmony import */ var _forgotpass_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgotpass.page.scss */ "wP9w");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../config/strings */ "3kIx");









let ForgotpassPage = class ForgotpassPage {
    constructor(authService, navCtrl, formBuilder, router, menuCtrl, modalCtrl, loadingController) {
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.modalCtrl = modalCtrl;
        this.loadingController = loadingController;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_8__["strings"];
    }
    ngOnInit() {
        this.validationsform = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ]))
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
    tryRestPass(value) {
        this.authService.doRestPass(value)
            .then(res => {
            this.modalCtrl.dismiss();
            this.presentAlert(_config_strings__WEBPACK_IMPORTED_MODULE_8__["strings"].ST34);
            this.router.navigate(['/login']);
        }, err => {
            if (err.code === 'auth/user-not-found') {
                this.presentAlert(_config_strings__WEBPACK_IMPORTED_MODULE_8__["strings"].ST31);
            }
            else {
                this.presentAlert(_config_strings__WEBPACK_IMPORTED_MODULE_8__["strings"].ST32);
            }
        });
    }
    goClosePage() {
        this.modalCtrl.dismiss();
    }
};
ForgotpassPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] }
];
ForgotpassPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-forgotpass',
        template: _raw_loader_forgotpass_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_forgotpass_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ForgotpassPage);



/***/ }),

/***/ "wP9w":
/*!*******************************************************!*\
  !*** ./src/app/pages/forgotpass/forgotpass.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".start-logo {\n  max-width: 140px;\n  margin-bottom: 40px;\n}\n\n.button-h {\n  height: 50px;\n  font-size: 14px;\n  font-weight: bold !important;\n  margin: 0 !important;\n  margin-top: 10px !important;\n  text-transform: uppercase !important;\n}\n\n.go-to-restpass {\n  text-align: center;\n  margin-top: 20px;\n  font-size: 13px;\n  text-transform: uppercase !important;\n}\n\n.go-to-restpass a {\n  color: #807e7e;\n}\n\n.line-input {\n  margin-bottom: 0 !important;\n}\n\n.line-input ion-item {\n  --border-color: transparent!important;\n  --background-activated: white;\n  --background-focused: white;\n  --background-hover: white;\n  --highlight-height: 0;\n  border: 1px solid #807e7e;\n  border-radius: 50px;\n}\n\n.line-input ion-item.item-has-focus {\n  border: 1px solid var(--ion-color-primary);\n}\n\n.line-input ion-item ion-label {\n  color: #807e7e !important;\n  font-weight: 300;\n  font-size: 14px !important;\n}\n\n.line-input ion-item ion-icon {\n  color: #807e7e !important;\n  margin-right: 8px !important;\n}\n\n.sc-ion-input-ios-h {\n  font-size: 14px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb3Jnb3RwYXNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0NBQUE7QUFDSjs7QUFFQTtFQUVFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUFBRjs7QUFHQTtFQUVFLGNBQUE7QUFERjs7QUFJQTtFQUNJLDJCQUFBO0FBREo7O0FBRUk7RUFDSSxxQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUFSOztBQUVRO0VBQ0ksMENBQUE7QUFBWjs7QUFHUTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQURaOztBQUlRO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtBQUZaOztBQU9BO0VBQ0ksMEJBQUE7QUFKSiIsImZpbGUiOiJmb3Jnb3RwYXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGFydC1sb2dve1xuICAgIG1heC13aWR0aDogMTQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuLmJ1dHRvbi1oeyBcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcbn1cblxuLmdvLXRvLXJlc3RwYXNzXG57XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XG59XG5cbi5nby10by1yZXN0cGFzcyBhXG57XG4gIGNvbG9yOiAjODA3ZTdlO1xufVxuXG4ubGluZS1pbnB1dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMCFpbXBvcnRhbnQ7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xuICAgICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB3aGl0ZTtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHdoaXRlO1xuICAgICAgICAtLWJhY2tncm91bmQtaG92ZXI6IHdoaXRlO1xuICAgICAgICAtLWhpZ2hsaWdodC1oZWlnaHQ6IDA7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM4MDdlN2U7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG5cbiAgICAgICAgJi5pdGVtLWhhcy1mb2N1cyB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIH1cblxuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgY29sb3I6ICM4MDdlN2UhaW1wb3J0YW50O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweCFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgIGNvbG9yOiAjODA3ZTdlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uc2MtaW9uLWlucHV0LWlvcy1oe1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=pages-forgotpass-forgotpass-module-es2015.js.map