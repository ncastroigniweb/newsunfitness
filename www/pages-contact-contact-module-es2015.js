(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-contact-contact-module"],{

/***/ "14/Y":
/*!*************************************************!*\
  !*** ./src/app/pages/contact/contact.module.ts ***!
  \*************************************************/
/*! exports provided: ContactPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageModule", function() { return ContactPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _contact_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-routing.module */ "qpdT");
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact.page */ "UtLR");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let ContactPageModule = class ContactPageModule {
};
ContactPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _contact_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactPageRoutingModule"]
        ],
        declarations: [_contact_page__WEBPACK_IMPORTED_MODULE_6__["ContactPage"]]
    })
], ContactPageModule);



/***/ }),

/***/ "Ljdl":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact/contact.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"darkheader ion-no-border\" mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <ion-title class=\"ion-text-capitalize\">\n      {{strings.ST73}}\n    </ion-title>\n      <ion-buttons slot=\"start\">\n        <app-backbutton color=\"light\"></app-backbutton>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-no-padding\">\n\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row class=\"header-bg\" [ngStyle]=\"{'height': innerHeight}\">\n      <div class=\"text\">\n      <p class=\"title\">{{strings.ST76}}</p>\n      <p class=\"subtitle\">{{strings.ST77}}</p>\n    </div>\n    </ion-row>\n  </ion-grid>\n\n  <div class=\"ion-padding\">\n\n  <form class=\"form\" autocomplete=\"off\" [formGroup]=\"validationsform\" (ngSubmit)=\"sentMessage(validationsform.value)\">\n    <ion-item>\n      <ion-label position=\"stacked\">{{strings.ST78}}</ion-label>\n      <ion-input type=\"text\" formControlName=\"name\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\">{{strings.ST79}}</ion-label>\n      <ion-input type=\"email\" formControlName=\"email\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\">{{strings.ST80}}</ion-label>\n      <ion-textarea formControlName=\"message\"></ion-textarea>\n    </ion-item>\n\n    <ion-button color=\"primary\" type=\"submit\" [disabled]=\"!validationsform.valid\" expand=\"block\" mode=\"ios\">\n      {{strings.ST81}}\n    </ion-button>\n\n  </form>\n\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "UtLR":
/*!***********************************************!*\
  !*** ./src/app/pages/contact/contact.page.ts ***!
  \***********************************************/
/*! exports provided: ContactPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPage", function() { return ContactPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_contact_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./contact.page.html */ "Ljdl");
/* harmony import */ var _contact_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.page.scss */ "rRKX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/strings */ "3kIx");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config/config */ "0np6");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/member-ordering */






let ContactPage = class ContactPage {
    constructor(plt, formBuilder, loadingController, navCtrl, http) {
        this.plt = plt;
        this.formBuilder = formBuilder;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.http = http;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_4__["strings"];
        // Http Options
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpHeaders"]({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            })
        };
    }
    ngOnInit() {
        this.innerHeight = this.plt.height() / 2.5 + 'px';
        this.validationsform = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required
            ])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
            ])),
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
    backButton() {
        this.navCtrl.back();
    }
    sentMessage(value) {
        const messageData = {
            name: value.name,
            email: value.email,
            message: value.message
        };
        this.http.post(_config_config__WEBPACK_IMPORTED_MODULE_7__["config"].Url + '/controller/contactform.php', messageData, this.httpOptions)
            .subscribe(data => {
            if (data === 'false') {
                this.presentAlert(_config_strings__WEBPACK_IMPORTED_MODULE_4__["strings"].ST32);
            }
            else {
                this.presentAlert(_config_strings__WEBPACK_IMPORTED_MODULE_4__["strings"].ST74);
                this.backButton();
            }
        }, error => {
            console.log(error);
        });
    }
};
ContactPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] }
];
ContactPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-contact',
        template: _raw_loader_contact_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contact_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ContactPage);



/***/ }),

/***/ "qpdT":
/*!*********************************************************!*\
  !*** ./src/app/pages/contact/contact-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ContactPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageRoutingModule", function() { return ContactPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.page */ "UtLR");




const routes = [
    {
        path: '',
        component: _contact_page__WEBPACK_IMPORTED_MODULE_3__["ContactPage"]
    }
];
let ContactPageRoutingModule = class ContactPageRoutingModule {
};
ContactPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ContactPageRoutingModule);



/***/ }),

/***/ "rRKX":
/*!*************************************************!*\
  !*** ./src/app/pages/contact/contact.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-bg {\n  background-image: url('profilebg.jpg');\n  background-position: center;\n  background-size: cover;\n  align-items: center;\n  justify-content: center;\n}\n\n.header-bg .text {\n  color: #fff;\n  text-align: center;\n  padding: 0 45px;\n}\n\n.header-bg .title {\n  color: #fff;\n  text-align: center;\n  margin-bottom: 15px;\n  font-weight: bold;\n  font-size: 26px;\n}\n\n.header-bg .subtitle {\n  color: rgba(255, 255, 255, 0.53);\n  margin-top: 5px;\n  text-align: center;\n  font-size: 14px;\n}\n\nion-icon {\n  font-size: 42px;\n}\n\nion-item {\n  --padding-start: 0;\n  --border-color: #e2e2e2;\n  --background-activated: white;\n  --background-focused: white;\n  --background-hover: white;\n  margin-bottom: 10px;\n}\n\nion-label {\n  text-transform: uppercase;\n  font-weight: bold;\n}\n\nion-button {\n  text-transform: uppercase;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb250YWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNDQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtBQUNKIiwiZmlsZSI6ImNvbnRhY3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1iZ3tcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcHJvZmlsZWJnLmpwZycpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5oZWFkZXItYmcgLnRleHR7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAgNDVweDtcbn1cblxuLmhlYWRlci1iZyAudGl0bGV7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyNnB4O1xufVxuXG4uaGVhZGVyLWJnIC5zdWJ0aXRsZXtcbiAgICBjb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gNTMlKTtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogNDJweDsgLy9QcmVmZXJyZWQgc2l6ZSBoZXJlXG59XG5cbmlvbi1pdGVte1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAtLWJvcmRlci1jb2xvcjogI2UyZTJlMjtcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB3aGl0ZTtcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogd2hpdGU7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB3aGl0ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5pb24tbGFiZWx7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW9uLWJ1dHRvbntcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=pages-contact-contact-module-es2015.js.map