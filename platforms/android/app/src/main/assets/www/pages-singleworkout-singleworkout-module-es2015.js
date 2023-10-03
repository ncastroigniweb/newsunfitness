(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-singleworkout-singleworkout-module"],{

/***/ "04FJ":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/singleworkout/singleworkout.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <app-backbutton color=\"light\"></app-backbutton>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\" mode=\"ios\">{{strings.ST94}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"addToFavorites()\" slot=\"start\">\n        <ion-icon color=\"light\"[name]=\"icon\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"presentModal()\" slot=\"start\">\n        <ion-icon color=\"light\" name=\"information-circle-outline\"></ion-icon>\n      </ion-button>\n</ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<app-loading *ngIf=\"isLoading\"></app-loading>\n\n<ion-content *ngIf=\"!isLoading\" class=\"ion-no-padding\">\n\n    <ion-grid class=\"ion-no-padding\">\n        <ion-row class=\"header-bg\" [style.background-image]=\"'url(' + (workout.workout_image | image) + ')'\" [ngStyle]=\"{'height': innerHeight}\">\n          <div class=\"text\">\n          <p class=\"name\">{{workout.workout_title}}</p>\n          <p class=\"time\">{{workout.workout_duration}} {{strings.ST95}}</p>\n        </div>\n        </ion-row>\n        <ion-row class=\"cols\">\n          <ion-col size=\"6\" class=\"ion-text-center\">\n            <p class=\"text\">{{strings.ST16}}</p>\n            <p >{{workout.goal_title}}</p>\n          </ion-col>\n          <ion-col size=\"6\" class=\"ion-text-center\">\n              <p class=\"text\">{{strings.ST17}}</p>\n              <p >{{workout.level_title}}</p>\n            </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <div class=\"days\">\n\n      <div *ngFor=\"let item of days let i = index\">\n            <div class=\"tags\" [routerLink]=\"['/singleday', workout.workout_id, i+1]\">\n                <h1>{{strings.ST87}} {{i+1}}</h1>\n                <ion-icon name=\"arrow-forward\" color=\"primary\" slot=\"end\"></ion-icon>\n            </div>\n      </div>\n\n    </div>\n\n</ion-content>\n");

/***/ }),

/***/ "Buiw":
/*!*************************************************************!*\
  !*** ./src/app/pages/singleworkout/singleworkout.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-bg {\n  background-position: center;\n  background-size: cover;\n  align-items: center;\n  justify-content: center;\n}\n\n.header-bg .text {\n  color: #fff;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.6);\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 10px 30px;\n}\n\n.header-bg .name {\n  color: #ffffff;\n  text-align: center;\n  margin-bottom: 9px;\n  font-weight: bold;\n  font-size: 15px;\n  text-transform: capitalize;\n}\n\n.header-bg .time {\n  color: var(--ion-color-primary);\n  margin-top: 5px;\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.cols {\n  background-color: #f9f9f9;\n  padding: 10px 0;\n}\n\n.cols .text {\n  color: var(--ion-color-primary);\n  font-weight: bold;\n  text-transform: uppercase;\n  margin: 0;\n  padding-bottom: 5px;\n}\n\n.cols .value {\n  text-transform: uppercase;\n  margin: 0;\n  color: var(--ion-color-dark);\n  font-size: 14px;\n  opacity: 0.7;\n}\n\n.days {\n  padding: 16px;\n}\n\n.tags {\n  background-color: #f9f9f9;\n  border-left: 3px solid var(--ion-color-primary);\n  padding: 15px;\n  position: relative;\n  margin-bottom: 10px;\n}\n\n.tags h1 {\n  font-size: 13px;\n  text-transform: uppercase;\n  font-weight: bold;\n  margin: 0;\n}\n\n.tags ion-icon {\n  position: absolute;\n  right: 14px;\n  top: 11px;\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaW5nbGV3b3Jrb3V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FBQ0o7O0FBRUE7RUFDSSwrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSwrQ0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoic2luZ2xld29ya291dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWJne1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5oZWFkZXItYmcgLnRleHR7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42MCk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcbn1cblxuLmhlYWRlci1iZyAubmFtZXtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogOXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmhlYWRlci1iZyAudGltZXtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jb2xze1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gICAgcGFkZGluZzogMTBweCAwO1xufVxuXG4uY29scyAudGV4dHtcbiAgICBjb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbn0gXG5cbi5jb2xzIC52YWx1ZXtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjp2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG9wYWNpdHk6IDAuNztcbn0gXG5cbi5kYXlze1xuICAgIHBhZGRpbmc6IDE2cHg7XG59XG5cbi50YWdze1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnRhZ3MgaDF7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luOjA7XG59XG5cbi50YWdzIGlvbi1pY29ue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTRweDtcbiAgICB0b3A6IDExcHg7XG4gICAgZm9udC1zaXplOiAyMnB4O1xufSJdfQ== */");

/***/ }),

/***/ "EkK8":
/*!*************************************************************!*\
  !*** ./src/app/pages/singleworkout/singleworkout.module.ts ***!
  \*************************************************************/
/*! exports provided: SingleworkoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleworkoutPageModule", function() { return SingleworkoutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _singleworkout_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./singleworkout-routing.module */ "d6kS");
/* harmony import */ var _singleworkout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./singleworkout.page */ "s7TW");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "iTUp");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");









let SingleworkoutPageModule = class SingleworkoutPageModule {
};
SingleworkoutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _singleworkout_routing_module__WEBPACK_IMPORTED_MODULE_5__["SingleworkoutPageRoutingModule"]
        ],
        declarations: [_singleworkout_page__WEBPACK_IMPORTED_MODULE_6__["SingleworkoutPage"]]
    })
], SingleworkoutPageModule);



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

/***/ "d6kS":
/*!*********************************************************************!*\
  !*** ./src/app/pages/singleworkout/singleworkout-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: SingleworkoutPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleworkoutPageRoutingModule", function() { return SingleworkoutPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _singleworkout_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./singleworkout.page */ "s7TW");




const routes = [
    {
        path: '',
        component: _singleworkout_page__WEBPACK_IMPORTED_MODULE_3__["SingleworkoutPage"]
    }
];
let SingleworkoutPageRoutingModule = class SingleworkoutPageRoutingModule {
};
SingleworkoutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SingleworkoutPageRoutingModule);



/***/ }),

/***/ "s7TW":
/*!***********************************************************!*\
  !*** ./src/app/pages/singleworkout/singleworkout.page.ts ***!
  \***********************************************************/
/*! exports provided: SingleworkoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleworkoutPage", function() { return SingleworkoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_singleworkout_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./singleworkout.page.html */ "04FJ");
/* harmony import */ var _singleworkout_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./singleworkout.page.scss */ "Buiw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/strings */ "3kIx");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/data.service */ "EnSQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_favorite_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/favorite.service */ "kUbd");
/* harmony import */ var _components_description_description_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/description/description.component */ "bo4a");










let SingleworkoutPage = class SingleworkoutPage {
    constructor(dataService, router, route, plt, dataFavorite, modalController) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.plt = plt;
        this.dataFavorite = dataFavorite;
        this.modalController = modalController;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_4__["strings"];
        this.workout = {};
        this.isLoading = false;
        this.days = new Array(7);
        this.icon = 'star-outline';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = true;
            this.innerHeight = this.plt.height() / 3 + 'px';
            this.route.params.subscribe(data => {
                this.id = data.id;
                this.getDetails();
                this.dataFavorite.existWorkout(this.id)
                    .then(exist => this.icon = (exist) ? 'star' : 'star-outline');
                if (!this.id) {
                    this.goBack();
                }
            });
        });
    }
    goBack() {
        this.router.navigate(['/home']);
    }
    getDetails() {
        this.dataService.getDataWorkoutById(this.id)
            .subscribe(resp => {
            this.workout = resp[0];
            this.isLoading = false;
        });
    }
    addToFavorites() {
        const workout = {
            id: this.workout.workout_id,
            title: this.workout.workout_title,
            image: this.workout.workout_image,
        };
        const exist = this.dataFavorite.saveWorkout(workout);
        this.icon = (exist) ? 'star' : 'star-outline';
    }
    presentModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _components_description_description_component__WEBPACK_IMPORTED_MODULE_9__["DescriptionComponent"],
                componentProps: {
                    description: this.workout.workout_description,
                }
            });
            return yield modal.present();
        });
    }
};
SingleworkoutPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: _services_favorite_service__WEBPACK_IMPORTED_MODULE_8__["FavoriteService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] }
];
SingleworkoutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-singleworkout',
        template: _raw_loader_singleworkout_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_singleworkout_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SingleworkoutPage);



/***/ })

}]);
//# sourceMappingURL=pages-singleworkout-singleworkout-module-es2015.js.map