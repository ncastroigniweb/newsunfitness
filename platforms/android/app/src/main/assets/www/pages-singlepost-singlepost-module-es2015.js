(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-singlepost-singlepost-module"],{

/***/ "CwzX":
/*!*****************************************************!*\
  !*** ./src/app/pages/singlepost/singlepost.page.ts ***!
  \*****************************************************/
/*! exports provided: SinglepostPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglepostPage", function() { return SinglepostPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_singlepost_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./singlepost.page.html */ "HE1b");
/* harmony import */ var _singlepost_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./singlepost.page.scss */ "z12J");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/data.service */ "EnSQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/database */ "Zs65");
/* harmony import */ var _services_favorite_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/favorite.service */ "kUbd");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../config/strings */ "3kIx");
/* harmony import */ var _components_postcomments_postcomments_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/postcomments/postcomments.component */ "Lw+m");
/* harmony import */ var _components_addcomment_addcomment_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/addcomment/addcomment.component */ "cuam");













let SinglepostPage = class SinglepostPage {
    constructor(dataService, router, modalCtrl, route, plt, dataFavorite) {
        this.dataService = dataService;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.route = route;
        this.plt = plt;
        this.dataFavorite = dataFavorite;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_10__["strings"];
        this.post = {};
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
                this.dataFavorite.existPost(this.id)
                    .then(exist => this.icon = (exist) ? 'star' : 'star-outline');
                const commentsRef = firebase_app__WEBPACK_IMPORTED_MODULE_7__["default"].database().ref(`postComments/${this.id}`);
                commentsRef.on('child_added', snapshot => {
                    commentsRef.on('value', snap => {
                        const comments = [];
                        snap.forEach(row => {
                            comments.push(Number(row.val().rating));
                        });
                        this.rating = comments.reduce((previous, current) => previous + current, 0) / comments.length;
                        this.count = comments.length;
                    });
                });
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
        this.dataService.getDataPostById(this.id)
            .subscribe(resp => {
            this.post = resp[0];
            this.isLoading = false;
            this.isReady = true;
        });
    }
    showComments(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _components_postcomments_postcomments_component__WEBPACK_IMPORTED_MODULE_11__["PostcommentsComponent"],
                componentProps: {
                    id
                }
            });
            modal.present();
        });
    }
    addComment(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _components_addcomment_addcomment_component__WEBPACK_IMPORTED_MODULE_12__["AddcommentComponent"],
                componentProps: {
                    id
                }
            });
            modal.present();
        });
    }
    addToFavorites() {
        const item = {
            id: this.post.post_id,
            title: this.post.post_title,
            image: this.post.post_image,
        };
        const exist = this.dataFavorite.savePost(item);
        this.icon = (exist) ? 'star' : 'star-outline';
    }
};
SinglepostPage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _services_favorite_service__WEBPACK_IMPORTED_MODULE_9__["FavoriteService"] }
];
SinglepostPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-singlepost',
        template: _raw_loader_singlepost_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_singlepost_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SinglepostPage);



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

/***/ "HE1b":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/singlepost/singlepost.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header *ngIf=\"!isLoading\">\n  <ion-toolbar color=\"primary\">\n    <ion-title mode=\"ios\">{{post.post_title}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <app-backbutton color=\"light\"></app-backbutton>\n  </ion-buttons>\n  <ion-buttons slot=\"end\">\n          <ion-button (click)=\"addToFavorites()\" slot=\"start\">\n          <ion-icon color=\"light\" mode=\"md\" [name]=\"icon\"></ion-icon>\n          </ion-button>\n  </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<app-loading *ngIf=\"isLoading\"></app-loading>\n\n<ion-content *ngIf=\"!isLoading\" class=\"ion-no-padding\">\n\n    <ion-grid class=\"ion-no-padding\">\n        <ion-row class=\"header-bg\" [style.background-image]=\"'url(' + (post.post_image | image) + ')'\" [ngStyle]=\"{'height': innerHeight}\">\n          <div class=\"text\">\n          <p class=\"time\">{{post.tag_title}}</p>\n          <p class=\"name\">{{post.post_title}}</p>\n        </div>\n    </ion-row>\n    </ion-grid>\n\n      <div class=\"ion-padding\">\n      <app-html [htmlcontent]=\"post.post_description\"></app-html>\n      </div>\n\n  <div class=\"date-category\">\n      <p><ion-icon name=\"calendar-outline\"></ion-icon> {{post.post_date}}</p>\n      <p><ion-icon name=\"folder-open-outline\"></ion-icon> {{post.tag_title}}</p>\n      <p (click)=\"showComments(post.post_id)\"><ion-icon name=\"chatbubbles-outline\"></ion-icon> <span color=\"primary\">{{count}}</span></p>\n  </div>\n\n\n</ion-content>\n\n");

/***/ }),

/***/ "JX76":
/*!***************************************************************!*\
  !*** ./src/app/pages/singlepost/singlepost-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: SinglepostPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglepostPageRoutingModule", function() { return SinglepostPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _singlepost_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./singlepost.page */ "CwzX");




const routes = [
    {
        path: '',
        component: _singlepost_page__WEBPACK_IMPORTED_MODULE_3__["SinglepostPage"]
    }
];
let SinglepostPageRoutingModule = class SinglepostPageRoutingModule {
};
SinglepostPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SinglepostPageRoutingModule);



/***/ }),

/***/ "UND7":
/*!*******************************************************!*\
  !*** ./src/app/pages/singlepost/singlepost.module.ts ***!
  \*******************************************************/
/*! exports provided: SinglepostPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglepostPageModule", function() { return SinglepostPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _singlepost_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./singlepost-routing.module */ "JX76");
/* harmony import */ var _singlepost_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./singlepost.page */ "CwzX");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "iTUp");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");









let SinglepostPageModule = class SinglepostPageModule {
};
SinglepostPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _singlepost_routing_module__WEBPACK_IMPORTED_MODULE_5__["SinglepostPageRoutingModule"]
        ],
        declarations: [_singlepost_page__WEBPACK_IMPORTED_MODULE_6__["SinglepostPage"]]
    })
], SinglepostPageModule);



/***/ }),

/***/ "z12J":
/*!*******************************************************!*\
  !*** ./src/app/pages/singlepost/singlepost.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-bg {\n  background-position: center;\n  background-size: cover;\n  align-items: center;\n  justify-content: center;\n}\n\n.header-bg .text {\n  color: #fff;\n  text-align: center;\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.75) 90%);\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-start;\n  flex-direction: column;\n  padding: 20px 30px;\n}\n\n.header-bg .name {\n  color: #ffffff;\n  text-align: left;\n  margin: 0;\n  font-weight: bold;\n  font-size: 17px;\n  text-transform: capitalize;\n  margin-bottom: 6px;\n}\n\n.header-bg .time {\n  color: var(--ion-color-primary);\n  margin-bottom: 5px;\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.cols {\n  background-color: var(--ion-color-primary);\n  padding: 10px 24px;\n}\n\n.col-text {\n  color: white;\n  font-size: 14px;\n  text-transform: uppercase;\n  align-items: center;\n  display: flex;\n}\n\n.cols ion-icon {\n  padding: 0 5px;\n}\n\n.date-category {\n  border-top: 1px solid #eee;\n  border-bottom: 1px solid #eee;\n  padding: 20px;\n}\n\n.date-category p {\n  margin: 0;\n  font-size: 14px;\n  display: inline-flex;\n  text-transform: capitalize;\n  padding-right: 10px;\n  color: #9e9e9e;\n}\n\n.date-category ion-icon {\n  margin-right: 5px;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaW5nbGVwb3N0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxxRkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksK0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLDBDQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFDQTtFQUNJLGNBQUE7QUFFSjs7QUFDQTtFQUNJLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0FBRUo7O0FBQ0E7RUFDSSxTQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFFSjs7QUFDQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQUVKIiwiZmlsZSI6InNpbmdsZXBvc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1iZ3tcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaGVhZGVyLWJnIC50ZXh0e1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2IoMCAwIDAgLyAwJSkgMTAlLCByZ2JhKDAsIDAsIDAsIDAuNzUpIDkwJSk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcbn1cblxuLmhlYWRlci1iZyAubmFtZXtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuXG4uaGVhZGVyLWJnIC50aW1le1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbHN7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIHBhZGRpbmc6IDEwcHggMjRweDtcbiAgICB9XG5cbi5jb2wtdGV4dHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLmNvbHMgaW9uLWljb257XG4gICAgcGFkZGluZzogMCA1cHg7XG59XG5cbi5kYXRlLWNhdGVnb3J5e1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5kYXRlLWNhdGVnb3J5IHB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIGNvbG9yOiAjOWU5ZTllO1xufVxuXG4uZGF0ZS1jYXRlZ29yeSBpb24taWNvbntcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=pages-singlepost-singlepost-module-es2015.js.map