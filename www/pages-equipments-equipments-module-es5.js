(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-equipments-equipments-module"], {
    /***/
    "3opf":
    /*!*******************************************************!*\
      !*** ./src/app/pages/equipments/equipments.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function opf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-avatar {\n  width: 70px;\n  height: 70px;\n  --border-radius: 0;\n  padding: 8px;\n}\n\nion-item {\n  --ripple-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxlcXVpcG1lbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSwyQkFBQTtBQUNKIiwiZmlsZSI6ImVxdWlwbWVudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWF2YXRhciB7IFxuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDA7XG4gICAgcGFkZGluZzogOHB4O1xufVxuXG5pb24taXRlbSB7XG4gICAgLS1yaXBwbGUtY29sb3I6IHRyYW5zcGFyZW50O1xufSJdfQ== */";
      /***/
    },

    /***/
    "6Cfs":
    /*!***************************************************************!*\
      !*** ./src/app/pages/equipments/equipments-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: EquipmentsPageRoutingModule */

    /***/
    function Cfs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EquipmentsPageRoutingModule", function () {
        return EquipmentsPageRoutingModule;
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


      var _equipments_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./equipments.page */
      "URGy");

      var routes = [{
        path: '',
        component: _equipments_page__WEBPACK_IMPORTED_MODULE_3__["EquipmentsPage"]
      }];

      var EquipmentsPageRoutingModule = /*#__PURE__*/_createClass(function EquipmentsPageRoutingModule() {
        _classCallCheck(this, EquipmentsPageRoutingModule);
      });

      EquipmentsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EquipmentsPageRoutingModule);
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
    "G+cW":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/equipments/equipments.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function GCW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header *ngIf=\"!isLoading\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <app-backbutton color=\"light\"></app-backbutton>\n    </ion-buttons>\n    <ion-title mode=\"ios\">{{strings.ST38}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <app-loading *ngIf=\"isLoading\"></app-loading>\n\n  <ion-list>\n    <ion-item *ngFor=\"let item of equipments\" [routerLink]=\"['/singleequipment', item.equipment_id, item.equipment_title]\">\n      <ion-avatar slot=\"start\">\n        <img src=\"{{item.equipment_image | image}}\">\n      </ion-avatar>\n      <ion-label>\n        <h2>{{item.equipment_title}}</h2>\n      </ion-label>\n      <ion-button slot=\"end\" fill=\"clear\">\n        <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n      </ion-button>\n    </ion-item>\n    </ion-list>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "I8Ox":
    /*!*******************************************************!*\
      !*** ./src/app/pages/equipments/equipments.module.ts ***!
      \*******************************************************/

    /*! exports provided: EquipmentsPageModule */

    /***/
    function I8Ox(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EquipmentsPageModule", function () {
        return EquipmentsPageModule;
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


      var _equipments_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./equipments-routing.module */
      "6Cfs");
      /* harmony import */


      var _equipments_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./equipments.page */
      "URGy");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../pipes/pipes.module */
      "iTUp");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../components/components.module */
      "j1ZV");

      var EquipmentsPageModule = /*#__PURE__*/_createClass(function EquipmentsPageModule() {
        _classCallCheck(this, EquipmentsPageModule);
      });

      EquipmentsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"], _equipments_routing_module__WEBPACK_IMPORTED_MODULE_5__["EquipmentsPageRoutingModule"]],
        declarations: [_equipments_page__WEBPACK_IMPORTED_MODULE_6__["EquipmentsPage"]]
      })], EquipmentsPageModule);
      /***/
    },

    /***/
    "URGy":
    /*!*****************************************************!*\
      !*** ./src/app/pages/equipments/equipments.page.ts ***!
      \*****************************************************/

    /*! exports provided: EquipmentsPage */

    /***/
    function URGy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EquipmentsPage", function () {
        return EquipmentsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_equipments_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./equipments.page.html */
      "G+cW");
      /* harmony import */


      var _equipments_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./equipments.page.scss */
      "3opf");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _config_strings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../config/strings */
      "3kIx");
      /* harmony import */


      var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/data.service */
      "EnSQ");

      var EquipmentsPage = /*#__PURE__*/function () {
        function EquipmentsPage(dataService) {
          _classCallCheck(this, EquipmentsPage);

          this.dataService = dataService;
          this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_4__["strings"];
          this.equipments = [];
          this.isLoading = false;
        }

        _createClass(EquipmentsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.isLoading = true;
            this.dataService.getDataEquipments().subscribe(function (resp) {
              _this.equipments = resp;
              _this.isLoading = false;
            });
          }
        }]);

        return EquipmentsPage;
      }();

      EquipmentsPage.ctorParameters = function () {
        return [{
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
        }];
      };

      EquipmentsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-equipments',
        template: _raw_loader_equipments_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_equipments_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EquipmentsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-equipments-equipments-module-es5.js.map