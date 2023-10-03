(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-terms-terms-module"],{

/***/ "/qot":
/*!*****************************************************!*\
  !*** ./src/app/pages/terms/terms-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: TermsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsPageRoutingModule", function() { return TermsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _terms_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./terms.page */ "vXk2");




const routes = [
    {
        path: '',
        component: _terms_page__WEBPACK_IMPORTED_MODULE_3__["TermsPage"]
    }
];
let TermsPageRoutingModule = class TermsPageRoutingModule {
};
TermsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TermsPageRoutingModule);



/***/ }),

/***/ "91Gy":
/*!*********************************************!*\
  !*** ./src/app/pages/terms/terms.module.ts ***!
  \*********************************************/
/*! exports provided: TermsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsPageModule", function() { return TermsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _terms_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./terms-routing.module */ "/qot");
/* harmony import */ var _terms_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./terms.page */ "vXk2");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let TermsPageModule = class TermsPageModule {
};
TermsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _terms_routing_module__WEBPACK_IMPORTED_MODULE_5__["TermsPageRoutingModule"]
        ],
        declarations: [_terms_page__WEBPACK_IMPORTED_MODULE_6__["TermsPage"]]
    })
], TermsPageModule);



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

/***/ "VlHW":
/*!*********************************************!*\
  !*** ./src/app/pages/terms/terms.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXJtcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "fdul":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/terms/terms.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header *ngIf=\"!isLoading\">\n  <ion-toolbar color=\"primary\">\n    <ion-title class=\"ion-text-center\" mode=\"ios\">{{strings.ST82}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <app-backbutton color=\"light\"></app-backbutton>\n  </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <app-loading *ngIf=\"isLoading\"></app-loading>\n  \n  <div *ngIf=\"!isLoading\">\n  <div class=\"html\" [innerHTML]=\"privacypolicy\"></div>\n  <div class=\"html\" [innerHTML]=\"termsofservice\"></div>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "vXk2":
/*!*******************************************!*\
  !*** ./src/app/pages/terms/terms.page.ts ***!
  \*******************************************/
/*! exports provided: TermsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsPage", function() { return TermsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_terms_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./terms.page.html */ "fdul");
/* harmony import */ var _terms_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./terms.page.scss */ "VlHW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/data.service */ "EnSQ");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/strings */ "3kIx");






let TermsPage = class TermsPage {
    constructor(dataService) {
        this.dataService = dataService;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_5__["strings"];
        this.isLoading = true;
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
};
TermsPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }
];
TermsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-terms',
        template: _raw_loader_terms_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_terms_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TermsPage);



/***/ })

}]);
//# sourceMappingURL=pages-terms-terms-module-es2015.js.map