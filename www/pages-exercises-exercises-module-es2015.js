(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-exercises-exercises-module"],{

/***/ "/O25":
/*!*************************************************************!*\
  !*** ./src/app/pages/exercises/exercises-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ExercisesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExercisesPageRoutingModule", function() { return ExercisesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _exercises_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exercises.page */ "68wr");




const routes = [
    {
        path: '',
        component: _exercises_page__WEBPACK_IMPORTED_MODULE_3__["ExercisesPage"]
    }
];
let ExercisesPageRoutingModule = class ExercisesPageRoutingModule {
};
ExercisesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ExercisesPageRoutingModule);



/***/ }),

/***/ "68wr":
/*!***************************************************!*\
  !*** ./src/app/pages/exercises/exercises.page.ts ***!
  \***************************************************/
/*! exports provided: ExercisesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExercisesPage", function() { return ExercisesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_exercises_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./exercises.page.html */ "UvR4");
/* harmony import */ var _exercises_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exercises.page.scss */ "znbR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/strings */ "3kIx");





let ExercisesPage = class ExercisesPage {
    constructor() {
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_4__["strings"];
    }
    ngOnInit() {
    }
};
ExercisesPage.ctorParameters = () => [];
ExercisesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-exercises',
        template: _raw_loader_exercises_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_exercises_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ExercisesPage);



/***/ }),

/***/ "UvR4":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/exercises/exercises.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n      <ion-title class=\"ion-text-capitalize\" mode=\"ios\">\n        {{strings.ST2}}\n      </ion-title>\n            <ion-buttons slot=\"start\">\n              <app-backbutton color=\"light\"></app-backbutton>\n            </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-grid>\n      \n        <ion-row>\n          <ion-col [routerLink]=\"['/bodyparts']\">\n            <div class=\"card-center-image\" style=\"background-image: url('./assets/images/bodyparts.jpg');\">\n              <div class=\"card-center-bg\">\n                <div class=\"card-center-text\">\n                <p class=\"title\">{{strings.ST37}}</p>\n                <p class=\"subtitle\">{{strings.ST40}}</p>\n              </div>\n              </div>\n            </div>\n            \n          </ion-col>\n        </ion-row>\n      \n        <ion-row>\n            <ion-col [routerLink]=\"['/equipments']\">\n                <div class=\"card-center-image\" style=\"background-image: url('./assets/images/equipments.jpg');\">\n                    <div class=\"card-center-bg\">\n                      <div class=\"card-center-text\">\n                          <p class=\"title\">{{strings.ST38}}</p>\n                          <p class=\"subtitle\">{{strings.ST39}}</p>\n                    </div>\n                    </div>\n                  </div>\n            </ion-col>\n          </ion-row>\n\n      </ion-grid>\n\n</ion-content>");

/***/ }),

/***/ "y56J":
/*!*****************************************************!*\
  !*** ./src/app/pages/exercises/exercises.module.ts ***!
  \*****************************************************/
/*! exports provided: ExercisesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExercisesPageModule", function() { return ExercisesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _exercises_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exercises-routing.module */ "/O25");
/* harmony import */ var _exercises_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./exercises.page */ "68wr");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "iTUp");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");









let ExercisesPageModule = class ExercisesPageModule {
};
ExercisesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _exercises_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExercisesPageRoutingModule"]
        ],
        declarations: [_exercises_page__WEBPACK_IMPORTED_MODULE_6__["ExercisesPage"]]
    })
], ExercisesPageModule);



/***/ }),

/***/ "znbR":
/*!*****************************************************!*\
  !*** ./src/app/pages/exercises/exercises.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-grid {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\nion-grid ion-row {\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxleGVyY2lzZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNKO0FBQ0k7RUFDSSxZQUFBO0FBQ1IiLCJmaWxlIjoiZXhlcmNpc2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1ncmlkIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBcbiAgICBpb24tcm93IHtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgIH1cbiAgfSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=pages-exercises-exercises-module-es2015.js.map