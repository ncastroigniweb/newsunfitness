(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-termsguest-termsguest-module"], {
    /***/
    "+dSU":
    /*!*****************************************************!*\
      !*** ./src/app/pages/termsguest/termsguest.page.ts ***!
      \*****************************************************/

    /*! exports provided: TermsguestPage */

    /***/
    function dSU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TermsguestPage", function () {
        return TermsguestPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_termsguest_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./termsguest.page.html */
      "M9Zl");
      /* harmony import */


      var _termsguest_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./termsguest.page.scss */
      "4zqP");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _config_strings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../config/strings */
      "3kIx");
      /* harmony import */


      var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/data.service */
      "EnSQ");
      /* eslint-disable no-underscore-dangle */

      /* eslint-disable @typescript-eslint/member-ordering */


      var TermsguestPage = /*#__PURE__*/function () {
        function TermsguestPage(modalCtrl, dataService) {
          _classCallCheck(this, TermsguestPage);

          this.modalCtrl = modalCtrl;
          this.dataService = dataService;
          this.isLoading = true; // tslint:disable-next-line: variable-name

          this._strings = _config_strings__WEBPACK_IMPORTED_MODULE_5__["strings"];
        }

        _createClass(TermsguestPage, [{
          key: "strings",
          get: function get() {
            return this._strings;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.isLoading = true;
            this.dataService.getDataStrings().subscribe(function (resp) {
              var data = resp[0];
              _this.privacypolicy = data.st_privacypolicy;
              _this.termsofservice = data.st_termsofservice;
              _this.isLoading = false;
            });
          }
        }, {
          key: "goClosePage",
          value: function goClosePage() {
            this.modalCtrl.dismiss();
          }
        }]);

        return TermsguestPage;
      }();

      TermsguestPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
        }];
      };

      TermsguestPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-termsguest',
        template: _raw_loader_termsguest_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_termsguest_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TermsguestPage);
      /***/
    },

    /***/
    "4zqP":
    /*!*******************************************************!*\
      !*** ./src/app/pages/termsguest/termsguest.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function zqP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXJtc2d1ZXN0LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "EnSQ":
    /*!******************************************!*\
      !*** ./src/app/services/data.service.ts ***!
      \******************************************/

    /*! exports provided: DataService */

    /***/
    function EnSQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataService", function () {
        return DataService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../config/config */
      "0np6");
      /* eslint-disable @typescript-eslint/naming-convention */

      /* eslint-disable @typescript-eslint/member-ordering */

      /* eslint-disable max-len */


      var Url = _config_config__WEBPACK_IMPORTED_MODULE_3__["config"].Url;

      var DataService = /*#__PURE__*/function () {
        function DataService(http) {
          _classCallCheck(this, DataService);

          this.http = http;
          this.page = 0; // Http Options

          this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              Accept: "application/json",
              "Content-Type": "application/json"
            })
          };
        }

        _createClass(DataService, [{
          key: "ejectQuery",
          value: function ejectQuery(query) {
            query = Url + query;
            return this.http.get(query);
          }
        }, {
          key: "postImage",
          value: function postImage(data) {
            this.http.post(_config_config__WEBPACK_IMPORTED_MODULE_3__["config"].Url + "/controller/contactform.php", data, this.httpOptions).subscribe(function (data) {
              if (data === "false") {} else {}
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "getDataStrings",
          value: function getDataStrings() {
            return this.ejectQuery("/json/data_strings.php");
          }
        }, {
          key: "getDataPosts",
          value: function getDataPosts() {
            return this.ejectQuery("/json/data_posts.php");
          }
        }, {
          key: "getDataTags",
          value: function getDataTags() {
            return this.ejectQuery("/json/data_tags.php");
          }
        }, {
          key: "getDataPostById",
          value: function getDataPostById(id) {
            return this.ejectQuery("/json/data_posts.php?post=".concat(id));
          }
        }, {
          key: "getDataPostsByTag",
          value: function getDataPostsByTag(id) {
            return this.ejectQuery("/json/data_posts.php?tag=".concat(id));
          }
        }, {
          key: "getDataDiets",
          value: function getDataDiets() {
            return this.ejectQuery("/json/data_diets.php");
          }
        }, {
          key: "getDataCategories",
          value: function getDataCategories() {
            return this.ejectQuery("/json/data_categories.php");
          }
        }, {
          key: "getDataDietById",
          value: function getDataDietById(id) {
            return this.ejectQuery("/json/data_diets.php?diet=".concat(id));
          }
        }, {
          key: "getDataDietsByCategory",
          value: function getDataDietsByCategory(id) {
            return this.ejectQuery("/json/data_diets.php?category=".concat(id));
          }
        }, {
          key: "getDataGoals",
          value: function getDataGoals() {
            return this.ejectQuery("/json/data_goals.php");
          }
        }, {
          key: "getDataLevels",
          value: function getDataLevels() {
            return this.ejectQuery("/json/data_levels.php");
          }
        }, {
          key: "getProgreso",
          value: function getProgreso(id, day, id_user) {
            return this.ejectQuery("/json/data_progreso.php?id=".concat(id, "&day=").concat(day, "&id_user=").concat(id_user));
          }
        }, {
          key: "getDataEquipments",
          value: function getDataEquipments() {
            return this.ejectQuery("/json/data_equipments.php");
          }
        }, {
          key: "getDataBodyparts",
          value: function getDataBodyparts() {
            return this.ejectQuery("/json/data_bodyparts.php");
          }
        }, {
          key: "getDataQuotes",
          value: function getDataQuotes() {
            return this.ejectQuery("/json/data_quotes.php");
          }
        }, {
          key: "getDataWorkoutsByGoal",
          value: function getDataWorkoutsByGoal(id) {
            return this.ejectQuery("/json/data_workouts.php?goal=".concat(id));
          }
        }, {
          key: "getDataWorkoutsByLevel",
          value: function getDataWorkoutsByLevel(id) {
            return this.ejectQuery("/json/data_workouts.php?level=".concat(id));
          }
        }, {
          key: "getDataExercisesByEquipment",
          value: function getDataExercisesByEquipment(id) {
            return this.ejectQuery("/json/data_equipment.php?equipment=".concat(id));
          }
        }, {
          key: "getDataExercisesByBodypart",
          value: function getDataExercisesByBodypart(id) {
            return this.ejectQuery("/json/data_muscle.php?muscle=".concat(id));
          }
        }, {
          key: "getDataExerciseById",
          value: function getDataExerciseById(id) {
            return this.ejectQuery("/json/data_exercises.php?exercise=".concat(id));
          }
        }, {
          key: "getDataWorkoutById",
          value: function getDataWorkoutById(id) {
            return this.ejectQuery("/json/data_workouts.php?workout=".concat(id));
          }
        }, {
          key: "getDataWorkoutExercisesByDay",
          value: function getDataWorkoutExercisesByDay(id, day) {
            return this.ejectQuery("/json/data_days.php?id=".concat(id, "&day=").concat(day));
          }
        }]);

        return DataService;
      }();

      DataService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      DataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
      })], DataService);
      /***/
    },

    /***/
    "M9Zl":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/termsguest/termsguest.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function M9Zl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\">\n      <ion-title class=\"ion-text-capitalize\">\n        {{strings.ST82}}\n      </ion-title>\n      <ion-buttons slot=\"start\">\n          <ion-buttons slot=\"start\">\n            <ion-button color=\"dark\" mode=\"md\" (click)=\"goClosePage()\" slot=\"start\">\n              <ion-icon name=\"chevron-back-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" fixed>\n\n  <app-loading *ngIf=\"isLoading\"></app-loading>\n  \n  <div *ngIf=\"!isLoading\">\n  <div [innerHTML]=\"privacypolicy\"></div>\n  <div [innerHTML]=\"termsofservice\"></div>\n  </div>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "P3JS":
    /*!*******************************************************!*\
      !*** ./src/app/pages/termsguest/termsguest.module.ts ***!
      \*******************************************************/

    /*! exports provided: TermsguestPageModule */

    /***/
    function P3JS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TermsguestPageModule", function () {
        return TermsguestPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _termsguest_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./termsguest-routing.module */
      "kwsO");
      /* harmony import */


      var _termsguest_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./termsguest.page */
      "+dSU");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/components.module */
      "j1ZV");

      var TermsguestPageModule = /*#__PURE__*/_createClass(function TermsguestPageModule() {
        _classCallCheck(this, TermsguestPageModule);
      });

      TermsguestPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _termsguest_routing_module__WEBPACK_IMPORTED_MODULE_5__["TermsguestPageRoutingModule"]],
        declarations: [_termsguest_page__WEBPACK_IMPORTED_MODULE_6__["TermsguestPage"]]
      })], TermsguestPageModule);
      /***/
    },

    /***/
    "kwsO":
    /*!***************************************************************!*\
      !*** ./src/app/pages/termsguest/termsguest-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: TermsguestPageRoutingModule */

    /***/
    function kwsO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TermsguestPageRoutingModule", function () {
        return TermsguestPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _termsguest_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./termsguest.page */
      "+dSU");

      var routes = [{
        path: '',
        component: _termsguest_page__WEBPACK_IMPORTED_MODULE_3__["TermsguestPage"]
      }];

      var TermsguestPageRoutingModule = /*#__PURE__*/_createClass(function TermsguestPageRoutingModule() {
        _classCallCheck(this, TermsguestPageRoutingModule);
      });

      TermsguestPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TermsguestPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-termsguest-termsguest-module-es5.js.map