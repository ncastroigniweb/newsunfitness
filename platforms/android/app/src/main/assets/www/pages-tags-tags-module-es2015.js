(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tags-tags-module"],{

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

/***/ "KdM3":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tags/tags.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header *ngIf=\"!isLoading\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <app-backbutton color=\"light\"></app-backbutton>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\" mode=\"ios\">{{strings.ST55}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<app-loading *ngIf=\"isLoading\"></app-loading>\n\n<ion-content *ngIf=\"!isLoading\" class=\"ion-no-padding\">\n\n<app-empty *ngIf=\"getItems.length === 0\" [title]=\"strings.ST24\"></app-empty>\n\n<ion-list>\n  <ion-item *ngFor=\"let item of getItems\" [routerLink]=\"['/singletag', item.tag_id, item.tag_title]\">\n    <ion-label>\n      <h2>{{item.tag_title}}</h2>\n    </ion-label>\n    <ion-button slot=\"end\" fill=\"clear\">\n      <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n    </ion-button>\n  </ion-item>\n  </ion-list>\n\n  <div style=\"height: 50px;\"></div>\n\n</ion-content>\n");

/***/ }),

/***/ "LpyY":
/*!***************************************************!*\
  !*** ./src/app/pages/tags/tags-routing.module.ts ***!
  \***************************************************/
/*! exports provided: TagsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsPageRoutingModule", function() { return TagsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tags_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tags.page */ "YO8r");




const routes = [
    {
        path: '',
        component: _tags_page__WEBPACK_IMPORTED_MODULE_3__["TagsPage"]
    }
];
let TagsPageRoutingModule = class TagsPageRoutingModule {
};
TagsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TagsPageRoutingModule);



/***/ }),

/***/ "R3Jx":
/*!*******************************************!*\
  !*** ./src/app/pages/tags/tags.module.ts ***!
  \*******************************************/
/*! exports provided: TagsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsPageModule", function() { return TagsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _tags_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tags-routing.module */ "LpyY");
/* harmony import */ var _tags_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tags.page */ "YO8r");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "iTUp");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");









let TagsPageModule = class TagsPageModule {
};
TagsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _tags_routing_module__WEBPACK_IMPORTED_MODULE_5__["TagsPageRoutingModule"]
        ],
        declarations: [_tags_page__WEBPACK_IMPORTED_MODULE_6__["TagsPage"]]
    })
], TagsPageModule);



/***/ }),

/***/ "YO8r":
/*!*****************************************!*\
  !*** ./src/app/pages/tags/tags.page.ts ***!
  \*****************************************/
/*! exports provided: TagsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsPage", function() { return TagsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tags_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tags.page.html */ "KdM3");
/* harmony import */ var _tags_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tags.page.scss */ "yBiD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/data.service */ "EnSQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config/strings */ "3kIx");







let TagsPage = class TagsPage {
    constructor(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_6__["strings"];
        this.getItems = [];
        this.isLoading = false;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = true;
            this.getData();
        });
    }
    goBack() {
        this.router.navigate(['/posts']);
    }
    getData() {
        this.dataService.getDataTags()
            .subscribe(resp => {
            this.getItems = resp;
            this.isLoading = false;
        });
    }
};
TagsPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
TagsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tags',
        template: _raw_loader_tags_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tags_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TagsPage);



/***/ }),

/***/ "yBiD":
/*!*******************************************!*\
  !*** ./src/app/pages/tags/tags.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-avatar {\n  width: 70px;\n  height: 70px;\n}\n\nion-label h2 {\n  overflow: visible;\n  white-space: normal;\n}\n\nion-item {\n  --ripple-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0YWdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSwyQkFBQTtBQUNKIiwiZmlsZSI6InRhZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWF2YXRhciB7IFxuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogNzBweDtcbn1cblxuaW9uLWxhYmVsIGgye1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5cbmlvbi1pdGVtIHtcbiAgICAtLXJpcHBsZS1jb2xvcjogdHJhbnNwYXJlbnQ7XG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=pages-tags-tags-module-es2015.js.map