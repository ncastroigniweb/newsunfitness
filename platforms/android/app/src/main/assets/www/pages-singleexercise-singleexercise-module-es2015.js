(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-singleexercise-singleexercise-module"],{

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

/***/ "O+Tv":
/*!***********************************************************************!*\
  !*** ./src/app/pages/singleexercise/singleexercise-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: SingleexercisePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleexercisePageRoutingModule", function() { return SingleexercisePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _singleexercise_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./singleexercise.page */ "Pf7c");




const routes = [
    {
        path: '',
        component: _singleexercise_page__WEBPACK_IMPORTED_MODULE_3__["SingleexercisePage"]
    }
];
let SingleexercisePageRoutingModule = class SingleexercisePageRoutingModule {
};
SingleexercisePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SingleexercisePageRoutingModule);



/***/ }),

/***/ "OrRY":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/singleexercise/singleexercise.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header *ngIf=\"!isLoading\">\n  <ion-toolbar color=\"primary\">\n    <ion-title mode=\"ios\">{{exercise.exercise_title}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <app-backbutton color=\"light\"></app-backbutton>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<app-loading *ngIf=\"isLoading\"></app-loading>\n\n<ion-content *ngIf=\"!isLoading\">\n\n  <div class=\"details\">\n\n    <img [src]=\"exercise.exercise_image | image\">\n  \n    <ion-grid fixed>\n      <ion-row>\n          <ion-col size=\"4\" class=\"col-icon\">\n          <ion-icon name=\"list-outline\" color=\"primary\"></ion-icon>\n          <p class=\"name\">{{strings.ST97}}</p>\n          <p class=\"value\">{{exercise.exercise_sets}}</p>\n          </ion-col>\n  \n          <ion-col size=\"4\" class=\"col-icon\">\n            <ion-icon name=\"sync-outline\" color=\"primary\"></ion-icon>\n            <p class=\"name\">{{strings.ST98}}</p>\n            <p class=\"value\">{{exercise.exercise_reps}}</p>\n          </ion-col>\n  \n          <ion-col size=\"4\" class=\"col-icon\">\n              <ion-icon name=\"stopwatch-outline\" color=\"primary\"></ion-icon>\n              <p class=\"name\">{{strings.ST99}}</p>\n              <p class=\"value\">{{exercise.exercise_rest}}</p>\n          </ion-col>\n      </ion-row>\n    </ion-grid>\n  \n  \n      <div class=\"tags\" (click)=toggleInfo()>\n          <h1>{{strings.ST112}}</h1>\n          <ion-icon [name]=\"isInfoHidden ? 'chevron-forward-outline' : 'chevron-down-outline'\" color=\"primary\" slot=\"end\"></ion-icon>\n        </div>\n      \n        <div class=\"animated fadeIn subinfo\" [hidden]=\"isInfoHidden\" style=\"padding: 20px 5px;\">\n        <p class=\"title\">{{strings.ST111}}</p>\n        <p class=\"subtitle\">{{exercise.exercise_title}}</p>\n  \n        <p class=\"title\">{{strings.ST17}}</p>\n        <p class=\"subtitle\">{{exercise.level_title}}</p>\n  \n        </div> \n      \n        <div class=\"tags\" (click)=toggleInstru()>\n            <h1>{{strings.ST113}}</h1>\n            <ion-icon [name]=\"isInstruHidden ? 'chevron-forward-outline' : 'chevron-down-outline'\" color=\"primary\" slot=\"end\"></ion-icon>\n          </div>\n        \n          <div class=\"animated fadeIn subinfo\" [hidden]=\"isInstruHidden\">\n          <app-html [htmlcontent]=\"exercise.exercise_instructions\"></app-html>\n          </div> \n  \n  \n          <div class=\"tags\" (click)=toggleTips()>\n              <h1>{{strings.ST114}}</h1>\n              <ion-icon [name]=\"isTipsHidden ? 'chevron-forward-outline' : 'chevron-down-outline'\" color=\"primary\" slot=\"end\"></ion-icon>\n            </div>\n          \n            <div class=\"animated fadeIn subinfo\" [hidden]=\"isTipsHidden\">\n            <app-html [htmlcontent]=\"exercise.exercise_tips\"></app-html>\n            </div> \n  \n  </div>\n  \n  \n  </ion-content>\n  \n  <ion-footer mode=\"ios\" no-border>\n      <ion-button (click)=\"play()\" class=\"primary ion-text-uppercase ion-text-bold\" mode=\"ios\" expand=\"block\">\n        {{strings.ST102}}\n          <ion-icon slot=\"start\" name=\"caret-forward-outline\"></ion-icon>\n      </ion-button>\n    </ion-footer>\n\n");

/***/ }),

/***/ "Pf7c":
/*!*************************************************************!*\
  !*** ./src/app/pages/singleexercise/singleexercise.page.ts ***!
  \*************************************************************/
/*! exports provided: SingleexercisePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleexercisePage", function() { return SingleexercisePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_singleexercise_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./singleexercise.page.html */ "OrRY");
/* harmony import */ var _singleexercise_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./singleexercise.page.scss */ "RHzf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/data.service */ "EnSQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config/strings */ "3kIx");
/* harmony import */ var _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/streaming-media/ngx */ "RU0F");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "0QAI");









let SingleexercisePage = class SingleexercisePage {
    constructor(dataService, router, route, streamingMedia, screenOrientation) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.streamingMedia = streamingMedia;
        this.screenOrientation = screenOrientation;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_6__["strings"];
        this.exercise = {};
        this.isLoading = false;
        this.isInfoHidden = true;
        this.isInstruHidden = true;
        this.isTipsHidden = true;
        this.orientation = 'landscape';
    }
    ngOnInit() {
        if (this.orientation === 'landscape') {
            this.setPortrait();
        }
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = true;
            this.route.params.subscribe(data => {
                this.id = data.id;
                this.getDetails();
                if (!this.id) {
                    this.goBack();
                }
            });
        });
    }
    goBack() {
        this.router.navigate(['/home']);
    }
    toggleInfo() {
        this.isInfoHidden = !this.isInfoHidden;
    }
    toggleInstru() {
        this.isInstruHidden = !this.isInstruHidden;
    }
    toggleTips() {
        this.isTipsHidden = !this.isTipsHidden;
    }
    getDetails() {
        this.dataService.getDataExerciseById(this.id)
            .subscribe(resp => {
            this.exercise = resp[0];
            this.isLoading = false;
        });
    }
    play() {
        const options = {
            successCallback: () => { console.log('Video played'); },
            errorCallback: (e) => { console.log('Error streaming'); },
            orientation: 'landscape',
            shouldAutoClose: true,
            controls: true
        };
        this.streamingMedia.playVideo(this.exercise.exercise_video, options);
    }
    setPortrait() {
        // set to portrait
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    }
};
SingleexercisePage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_7__["StreamingMedia"] },
    { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_8__["ScreenOrientation"] }
];
SingleexercisePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-singleexercise',
        template: _raw_loader_singleexercise_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_singleexercise_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SingleexercisePage);



/***/ }),

/***/ "RHzf":
/*!***************************************************************!*\
  !*** ./src/app/pages/singleexercise/singleexercise.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".details img {\n  width: 100%;\n  display: block;\n  max-width: 340px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 15px;\n  margin-top: 15px;\n}\n\n.details {\n  margin: 14px;\n}\n\nion-grid {\n  margin-bottom: 20px;\n}\n\np {\n  font-size: 14px;\n  margin: 0;\n}\n\n.subinfo {\n  padding: 8px 0;\n}\n\n.title {\n  margin-bottom: 8px;\n  font-weight: bold;\n}\n\n.subtitle {\n  margin-bottom: 18px;\n}\n\n.col-icon {\n  text-align: center;\n}\n\n.col-icon ion-icon {\n  font-size: 38px;\n  display: block;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 14px;\n}\n\n.col-icon .name {\n  margin: 0;\n  font-weight: bold;\n  font-size: 14px;\n  margin-bottom: 7px;\n}\n\n.col-icon .value {\n  margin: 0;\n  font-size: 14px;\n}\n\n.tags {\n  background-color: #f9f9f9;\n  border-left: 3px solid var(--ion-color-primary);\n  padding: 15px;\n  position: relative;\n  margin-bottom: 10px;\n}\n\n.tags h1 {\n  font-size: 13px;\n  text-transform: uppercase;\n  font-weight: bold;\n  margin: 0;\n}\n\n.tags ion-icon {\n  position: absolute;\n  right: 14px;\n  top: 11px;\n  font-size: 22px;\n}\n\nion-footer {\n  padding: 9px 11px;\n}\n\nion-footer ion-button {\n  font-size: 14px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaW5nbGVleGVyY2lzZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBQ0E7O0FBR0E7RUFDSSx5QkFBQTtFQUNBLCtDQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFBSjs7QUFHQTtFQUNJLGlCQUFBO0FBQUo7O0FBRUE7RUFFQSxlQUFBO0VBQ0EsaUJBQUE7QUFBQSIsImZpbGUiOiJzaW5nbGVleGVyY2lzZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGV0YWlscyBpbWd7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWF4LXdpZHRoOiAzNDBweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uZGV0YWlsc3tcbiAgICBtYXJnaW46IDE0cHg7XG59XG5cbmlvbi1ncmlke1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbnB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbjogMDtcbn1cblxuLnN1YmluZm97XG4gICAgcGFkZGluZzogOHB4IDA7XG59XG5cbi50aXRsZXtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zdWJ0aXRsZXtcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xufVxuXG4uY29sLWljb257XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29sLWljb24gaW9uLWljb257XG4gICAgZm9udC1zaXplOiAzOHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDtcbn1cblxuLmNvbC1pY29uIC5uYW1le1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xufVxuXG4uY29sLWljb24gLnZhbHVle1xubWFyZ2luOiAwO1xuZm9udC1zaXplOiAxNHB4O1xuICAgIFxufVxuXG4udGFnc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi50YWdzIGgxe1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjowO1xufVxuXG4udGFncyBpb24taWNvbntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDE0cHg7XG4gICAgdG9wOiAxMXB4O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuaW9uLWZvb3RlcntcbiAgICBwYWRkaW5nOiA5cHggMTFweDtcbn1cbmlvbi1mb290ZXIgaW9uLWJ1dHRvbntcblxuZm9udC1zaXplOiAxNHB4O1xuZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4iXX0= */");

/***/ }),

/***/ "vnTM":
/*!***************************************************************!*\
  !*** ./src/app/pages/singleexercise/singleexercise.module.ts ***!
  \***************************************************************/
/*! exports provided: SingleexercisePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleexercisePageModule", function() { return SingleexercisePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _singleexercise_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./singleexercise-routing.module */ "O+Tv");
/* harmony import */ var _singleexercise_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./singleexercise.page */ "Pf7c");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "iTUp");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");









let SingleexercisePageModule = class SingleexercisePageModule {
};
SingleexercisePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _singleexercise_routing_module__WEBPACK_IMPORTED_MODULE_5__["SingleexercisePageRoutingModule"]
        ],
        declarations: [_singleexercise_page__WEBPACK_IMPORTED_MODULE_6__["SingleexercisePage"]]
    })
], SingleexercisePageModule);



/***/ })

}]);
//# sourceMappingURL=pages-singleexercise-singleexercise-module-es2015.js.map