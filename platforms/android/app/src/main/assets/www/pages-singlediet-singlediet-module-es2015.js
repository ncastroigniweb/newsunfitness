(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-singlediet-singlediet-module"],{

/***/ "4J75":
/*!*******************************************************!*\
  !*** ./src/app/pages/singlediet/singlediet.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-bg {\n  background-position: center;\n  background-size: cover;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n\n.header-bg .text {\n  color: #fff;\n  text-align: center;\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.75) 90%);\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-start;\n  flex-direction: column;\n  padding: 20px 30px;\n}\n\n.header-bg .name {\n  color: #ffffff;\n  text-align: left;\n  margin: 0;\n  font-weight: bold;\n  font-size: 17px;\n  text-transform: capitalize;\n  margin-bottom: 10px;\n}\n\n.header-bg .time {\n  color: var(--ion-color-primary);\n  margin-bottom: 5px;\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.header-bg .subtitle {\n  color: #ffffff;\n  text-align: left;\n  opacity: 0.8;\n  margin: 0;\n  font-size: 16px;\n  text-transform: capitalize;\n}\n\n.header-title {\n  font-weight: bold;\n  font-size: 16px;\n  padding: 20px 20px;\n  background: #f5f5f5;\n  margin: 0;\n}\n\n.information {\n  padding: 10px 0;\n}\n\n.information ion-col {\n  justify-content: center;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: 16px 0;\n}\n\n.information ion-col ion-label {\n  text-align: center;\n  font-size: 18px;\n}\n\n.information ion-col ion-text {\n  color: var(--ion-color-primary);\n  text-align: center;\n  font-size: 14px;\n  font-weight: bold;\n  margin-top: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaW5nbGVkaWV0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUZBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFRTtFQUNFLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtBQUNKOztBQUVFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoic2luZ2xlZGlldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWJne1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5oZWFkZXItYmcgLnRleHR7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYigwIDAgMCAvIDAlKSAxMCUsIHJnYmEoMCwgMCwgMCwgMC43NSkgOTAlKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMjBweCAzMHB4O1xuICB9XG4gIFxuICAuaGVhZGVyLWJnIC5uYW1le1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIFxuICAuaGVhZGVyLWJnIC50aW1le1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5oZWFkZXItYmcgLnN1YnRpdGxle1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgb3BhY2l0eTogMC44O1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIH1cblxuICAuaGVhZGVyLXRpdGxle1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5pbmZvcm1hdGlvbntcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG59XG5cbi5pbmZvcm1hdGlvbiBpb24tY29se1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDE2cHggMDtcbn1cblxuLmluZm9ybWF0aW9uIGlvbi1jb2wgaW9uLWxhYmVse1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5pbmZvcm1hdGlvbiBpb24tY29sIGlvbi10ZXh0e1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG59Il19 */");

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

/***/ "HHES":
/*!*****************************************************!*\
  !*** ./src/app/pages/singlediet/singlediet.page.ts ***!
  \*****************************************************/
/*! exports provided: SingledietPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingledietPage", function() { return SingledietPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_singlediet_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./singlediet.page.html */ "d68a");
/* harmony import */ var _singlediet_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./singlediet.page.scss */ "4J75");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/strings */ "3kIx");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/data.service */ "EnSQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_favorite_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/favorite.service */ "kUbd");









let SingledietPage = class SingledietPage {
    constructor(dataService, router, route, plt, dataFavorite) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.plt = plt;
        this.dataFavorite = dataFavorite;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_4__["strings"];
        this.diet = {};
        this.isLoading = false;
        this.isReady = false;
        this.rating = 0;
        this.count = 0;
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
                this.dataFavorite.existDiet(this.id)
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
        this.dataService.getDataDietById(this.id)
            .subscribe(resp => {
            this.diet = resp[0];
            this.isLoading = false;
            this.isReady = true;
        });
    }
    addToFavorites() {
        const item = {
            id: this.diet.diet_id,
            title: this.diet.diet_title,
            image: this.diet.diet_image,
        };
        const exist = this.dataFavorite.saveDiet(item);
        this.icon = (exist) ? 'star' : 'star-outline';
    }
};
SingledietPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: _services_favorite_service__WEBPACK_IMPORTED_MODULE_8__["FavoriteService"] }
];
SingledietPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-singlediet',
        template: _raw_loader_singlediet_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_singlediet_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SingledietPage);



/***/ }),

/***/ "SsZM":
/*!*******************************************************!*\
  !*** ./src/app/pages/singlediet/singlediet.module.ts ***!
  \*******************************************************/
/*! exports provided: SingledietPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingledietPageModule", function() { return SingledietPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _singlediet_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./singlediet-routing.module */ "uUC1");
/* harmony import */ var _singlediet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./singlediet.page */ "HHES");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "iTUp");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");









let SingledietPageModule = class SingledietPageModule {
};
SingledietPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _singlediet_routing_module__WEBPACK_IMPORTED_MODULE_5__["SingledietPageRoutingModule"]
        ],
        declarations: [_singlediet_page__WEBPACK_IMPORTED_MODULE_6__["SingledietPage"]]
    })
], SingledietPageModule);



/***/ }),

/***/ "d68a":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/singlediet/singlediet.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header *ngIf=\"!isLoading\">\n  <ion-toolbar color=\"primary\">\n    <ion-title mode=\"ios\">{{diet.diet_title}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <app-backbutton color=\"light\"></app-backbutton>\n  </ion-buttons>\n  <ion-buttons slot=\"end\">\n          <ion-button (click)=\"addToFavorites()\" slot=\"start\">\n          <ion-icon color=\"light\" mode=\"md\" [name]=\"icon\"></ion-icon>\n          </ion-button>\n  </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<app-loading *ngIf=\"isLoading\"></app-loading>\n\n<ion-content *ngIf=\"!isLoading\" class=\"ion-no-padding\">\n\n    <ion-grid class=\"ion-no-padding\">\n        <ion-row class=\"header-bg\" [style.background-image]=\"'url(' + (diet.diet_image | image) + ')'\" [ngStyle]=\"{'height': innerHeight}\">\n          <div class=\"text\">\n          <p class=\"time\">{{diet.category_title}}</p>\n          <p class=\"name\">{{diet.diet_title}}</p>\n          <p class=\"subtitle\">{{strings.ST43}} {{diet.diet_servings}} | {{strings.ST44}} {{diet.diet_time}}</p>\n        </div>\n    </ion-row>\n    </ion-grid>\n\n    <ion-grid class=\"information\">\n      <ion-row>\n        <ion-col size=\"3\">\n          <ion-label>{{diet.diet_calories}}</ion-label>\n          <ion-text class=\"ion-text-wrap\">{{strings.ST49}}</ion-text>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-label>{{diet.diet_protein}}</ion-label>\n          <ion-text>{{strings.ST50}}</ion-text>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-label>{{diet.diet_fat}}</ion-label>\n          <ion-text>{{strings.ST51}}</ion-text>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-label>{{diet.diet_carbs}}</ion-label>\n          <ion-text>{{strings.ST52}}</ion-text>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <h2 class=\"header-title\" style=\"margin-top: 0;\">\n      {{strings.ST46}}\n    </h2>\n\n    <div class=\"ion-padding\">\n    <app-html [htmlcontent]=\"diet.diet_description\"></app-html>\n    </div>\n\n    <h2 class=\"header-title\" style=\"margin-top: 0;\">\n      {{strings.ST47}}\n    </h2>\n\n    <div class=\"ion-padding\">\n    <app-html [htmlcontent]=\"diet.diet_ingredients\"></app-html>\n    </div>\n\n    <h2 class=\"header-title\" style=\"margin-top: 0;\">\n      {{strings.ST48}}\n    </h2>\n\n    <div class=\"ion-padding\">\n    <app-html [htmlcontent]=\"diet.diet_directions\"></app-html>\n    </div>\n\n\n</ion-content>\n\n");

/***/ }),

/***/ "uUC1":
/*!***************************************************************!*\
  !*** ./src/app/pages/singlediet/singlediet-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: SingledietPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingledietPageRoutingModule", function() { return SingledietPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _singlediet_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./singlediet.page */ "HHES");




const routes = [
    {
        path: '',
        component: _singlediet_page__WEBPACK_IMPORTED_MODULE_3__["SingledietPage"]
    }
];
let SingledietPageRoutingModule = class SingledietPageRoutingModule {
};
SingledietPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SingledietPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-singlediet-singlediet-module-es2015.js.map