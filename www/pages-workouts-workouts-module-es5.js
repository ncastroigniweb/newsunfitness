(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-workouts-workouts-module"], {
    /***/
    "B1JJ":
    /*!*************************************************!*\
      !*** ./src/app/pages/workouts/workouts.page.ts ***!
      \*************************************************/

    /*! exports provided: WorkoutsPage */

    /***/
    function B1JJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WorkoutsPage", function () {
        return WorkoutsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_workouts_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./workouts.page.html */
      "lYL3");
      /* harmony import */


      var _workouts_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./workouts.page.scss */
      "XiM8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _config_strings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../config/strings */
      "3kIx");

      var WorkoutsPage = /*#__PURE__*/function () {
        function WorkoutsPage() {
          _classCallCheck(this, WorkoutsPage);

          this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_4__["strings"];
        }

        _createClass(WorkoutsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return WorkoutsPage;
      }();

      WorkoutsPage.ctorParameters = function () {
        return [];
      };

      WorkoutsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-workouts',
        template: _raw_loader_workouts_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_workouts_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], WorkoutsPage);
      /***/
    },

    /***/
    "WpVW":
    /*!***********************************************************!*\
      !*** ./src/app/pages/workouts/workouts-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: WorkoutsPageRoutingModule */

    /***/
    function WpVW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WorkoutsPageRoutingModule", function () {
        return WorkoutsPageRoutingModule;
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


      var _workouts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./workouts.page */
      "B1JJ");

      var routes = [{
        path: '',
        component: _workouts_page__WEBPACK_IMPORTED_MODULE_3__["WorkoutsPage"]
      }];

      var WorkoutsPageRoutingModule = /*#__PURE__*/_createClass(function WorkoutsPageRoutingModule() {
        _classCallCheck(this, WorkoutsPageRoutingModule);
      });

      WorkoutsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], WorkoutsPageRoutingModule);
      /***/
    },

    /***/
    "XiM8":
    /*!***************************************************!*\
      !*** ./src/app/pages/workouts/workouts.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function XiM8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-grid {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\nion-grid ion-row {\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx3b3Jrb3V0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0o7QUFDSTtFQUNJLFlBQUE7QUFDUiIsImZpbGUiOiJ3b3Jrb3V0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZ3JpZCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgXG4gICAgaW9uLXJvdyB7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICB9XG4gIH0iXX0= */";
      /***/
    },

    /***/
    "lYL3":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/workouts/workouts.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function lYL3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n      <ion-title class=\"ion-text-capitalize\" mode=\"ios\">\n        {{strings.ST1}}\n      </ion-title>\n            <ion-buttons slot=\"start\">\n              <app-backbutton color=\"light\"></app-backbutton>\n            </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fixed>\n\n    <ion-grid>\n      \n        <ion-row>\n          <ion-col [routerLink]=\"['/goals']\">\n            <div class=\"card-center-image\" style=\"background-image: url('./assets/images/goals.jpg');\">\n              <div class=\"card-center-bg\">\n                <div class=\"card-center-text\">\n                <p class=\"title\">{{strings.ST10}}</p>\n                <p class=\"subtitle\">{{strings.ST12}}</p>\n              </div>\n              </div>\n            </div>\n            \n          </ion-col>\n        </ion-row>\n      \n        <ion-row>\n            <ion-col [routerLink]=\"['/levels']\">\n                <div class=\"card-center-image\" style=\"background-image: url('./assets/images/levels.jpg');\">\n                    <div class=\"card-center-bg\">\n                      <div class=\"card-center-text\">\n                          <p class=\"title\">{{strings.ST11}}</p>\n                          <p class=\"subtitle\">{{strings.ST13}}</p>\n                    </div>\n                    </div>\n                  </div>\n            </ion-col>\n          </ion-row>\n\n      </ion-grid>\n\n</ion-content>";
      /***/
    },

    /***/
    "nNrW":
    /*!***************************************************!*\
      !*** ./src/app/pages/workouts/workouts.module.ts ***!
      \***************************************************/

    /*! exports provided: WorkoutsPageModule */

    /***/
    function nNrW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WorkoutsPageModule", function () {
        return WorkoutsPageModule;
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


      var _workouts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./workouts-routing.module */
      "WpVW");
      /* harmony import */


      var _workouts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./workouts.page */
      "B1JJ");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../pipes/pipes.module */
      "iTUp");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../components/components.module */
      "j1ZV");

      var WorkoutsPageModule = /*#__PURE__*/_createClass(function WorkoutsPageModule() {
        _classCallCheck(this, WorkoutsPageModule);
      });

      WorkoutsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"], _workouts_routing_module__WEBPACK_IMPORTED_MODULE_5__["WorkoutsPageRoutingModule"]],
        declarations: [_workouts_page__WEBPACK_IMPORTED_MODULE_6__["WorkoutsPage"]]
      })], WorkoutsPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-workouts-workouts-module-es5.js.map