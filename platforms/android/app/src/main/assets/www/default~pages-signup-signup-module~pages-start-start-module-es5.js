(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-signup-signup-module~pages-start-start-module"], {
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
    "UUSl":
    /*!***********************************************!*\
      !*** ./src/app/pages/signup/signup.module.ts ***!
      \***********************************************/

    /*! exports provided: SignupPageModule */

    /***/
    function UUSl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupPageModule", function () {
        return SignupPageModule;
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


      var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./signup-routing.module */
      "eOyQ");
      /* harmony import */


      var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./signup.page */
      "XHxw");
      /* harmony import */


      var _termsguest_termsguest_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../termsguest/termsguest.module */
      "P3JS");

      var SignupPageModule = /*#__PURE__*/_createClass(function SignupPageModule() {
        _classCallCheck(this, SignupPageModule);
      });

      SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"], _termsguest_termsguest_module__WEBPACK_IMPORTED_MODULE_7__["TermsguestPageModule"]],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
      })], SignupPageModule);
      /***/
    },

    /***/
    "XHxw":
    /*!*********************************************!*\
      !*** ./src/app/pages/signup/signup.page.ts ***!
      \*********************************************/

    /*! exports provided: SignupPage */

    /***/
    function XHxw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupPage", function () {
        return SignupPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./signup.page.html */
      "vfPX");
      /* harmony import */


      var _signup_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./signup.page.scss */
      "bYg9");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _config_strings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../config/strings */
      "3kIx");
      /* harmony import */


      var _config_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../config/config */
      "0np6");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! firebase/app */
      "Jgta");
      /* harmony import */


      var _termsguest_termsguest_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../termsguest/termsguest.page */
      "+dSU");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _services_firebase_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../services/firebase.service */
      "Z2Br");
      /* eslint-disable no-underscore-dangle */

      /* eslint-disable @typescript-eslint/member-ordering */


      var SignupPage = /*#__PURE__*/function () {
        function SignupPage(authService, navCtrl, formBuilder, router, menuCtrl, modalCtrl, loadingController, http, firebase) {
          _classCallCheck(this, SignupPage);

          this.authService = authService;
          this.navCtrl = navCtrl;
          this.formBuilder = formBuilder;
          this.router = router;
          this.menuCtrl = menuCtrl;
          this.modalCtrl = modalCtrl;
          this.loadingController = loadingController;
          this.http = http;
          this.firebase = firebase;
          this.data_user = {}; // Http Options

          this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            })
          }; // tslint:disable-next-line: variable-name

          this._strings = _config_strings__WEBPACK_IMPORTED_MODULE_9__["strings"];
        }

        _createClass(SignupPage, [{
          key: "strings",
          get: function get() {
            return this._strings;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.validationsform = this.formBuilder.group({
              name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]))
            });
          }
        }, {
          key: "tryRegister",
          value: function tryRegister(value) {
            var _this2 = this;

            this.authService.doRegister(value).then(function (res) {
              firebase_app__WEBPACK_IMPORTED_MODULE_11__["default"].auth().currentUser.updateProfile({
                displayName: value.name
              });

              _this2.modalCtrl.dismiss();

              console.log("Display: " + value.name);
              var data_user = {
                id_user: _this2.firebase.getIdUser(),
                display_name: value.name
              };

              _this2.http.post(_config_config__WEBPACK_IMPORTED_MODULE_10__["config"].Url + '/controller/guardar_display.php', data_user, _this2.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["catchError"])(function (error) {
                console.error('Error en la solicitud:', error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["throwError"])('Algo salió mal. Por favor, inténtalo de nuevo más tarde.');
              })).subscribe(function (data) {
                if (data === 'false') {
                  _this2.presentAlert(_config_strings__WEBPACK_IMPORTED_MODULE_9__["strings"].ST32);
                } else {
                  _this2.presentAlert(_config_strings__WEBPACK_IMPORTED_MODULE_9__["strings"].ST74);
                }
              }, function (error) {
                console.log(error);
              });

              _this2.router.navigate(['/home']);
            }, function (err) {
              if (err.code === 'auth/email-already-in-use') {
                _this2.presentAlert(_config_strings__WEBPACK_IMPORTED_MODULE_9__["strings"].ST36);
              } else {
                _this2.presentAlert(_config_strings__WEBPACK_IMPORTED_MODULE_9__["strings"].ST32);
              }
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.menuCtrl.enable(false);
          }
        }, {
          key: "presentAlert",
          value: function presentAlert(value) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var loading;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingController.create({
                      spinner: null,
                      duration: 2000,
                      message: value,
                      mode: 'ios'
                    });

                  case 2:
                    loading = _context.sent;
                    _context.next = 5;
                    return loading.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "goClosePage",
          value: function goClosePage() {
            this.modalCtrl.dismiss();
          }
        }, {
          key: "goTermsPage",
          value: function goTermsPage() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var modal;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalCtrl.create({
                      component: _termsguest_termsguest_page__WEBPACK_IMPORTED_MODULE_12__["TermsguestPage"]
                    });

                  case 2:
                    modal = _context2.sent;
                    modal.present();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this);
            }));
          }
        }]);

        return SignupPage;
      }();

      SignupPage.ctorParameters = function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["MenuController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }, {
          type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_15__["FirebaseService"]
        }];
      };

      SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-signup',
        template: _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_signup_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SignupPage);
      /***/
    },

    /***/
    "bYg9":
    /*!***********************************************!*\
      !*** ./src/app/pages/signup/signup.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function bYg9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".start-logo {\n  max-width: 140px;\n  margin-bottom: 40px;\n}\n\n.button-h {\n  height: 50px;\n  font-size: 14px;\n  font-weight: bold !important;\n  margin: 0 !important;\n  margin-top: 10px !important;\n  text-transform: uppercase !important;\n}\n\n.go-to-terms {\n  text-align: center;\n  margin-top: 20px;\n  font-size: 13px;\n  text-transform: uppercase !important;\n}\n\n.go-to-terms a {\n  color: #807e7e;\n}\n\n.line-input {\n  margin-bottom: 0 !important;\n}\n\n.line-input ion-item {\n  --border-color: transparent!important;\n  --background-activated: white;\n  --background-focused: white;\n  --background-hover: white;\n  --highlight-height: 0;\n  border: 1px solid #807e7e;\n  border-radius: 50px;\n}\n\n.line-input ion-item.item-has-focus {\n  border: 1px solid var(--ion-color-primary);\n}\n\n.line-input ion-item ion-label {\n  color: #807e7e !important;\n  font-weight: 300;\n  font-size: 14px !important;\n}\n\n.line-input ion-item ion-icon {\n  color: #807e7e !important;\n  margin-right: 8px !important;\n}\n\n.sc-ion-input-ios-h {\n  font-size: 14px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaWdudXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQ0FBQTtBQUNKOztBQUVBO0VBRUUsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtBQUFGOztBQUdBO0VBRUUsY0FBQTtBQURGOztBQUlBO0VBQ0ksMkJBQUE7QUFESjs7QUFFSTtFQUNJLHFDQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBQVI7O0FBRVE7RUFDSSwwQ0FBQTtBQUFaOztBQUdRO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FBRFo7O0FBSVE7RUFDSSx5QkFBQTtFQUNBLDRCQUFBO0FBRlo7O0FBT0E7RUFDSSwwQkFBQTtBQUpKIiwiZmlsZSI6InNpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhcnQtbG9nb3tcbiAgICBtYXgtd2lkdGg6IDE0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi5idXR0b24taHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcbn1cblxuLmdvLXRvLXRlcm1zXG57XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XG59XG5cbi5nby10by10ZXJtcyBhXG57XG4gIGNvbG9yOiAjODA3ZTdlO1xufVxuXG4ubGluZS1pbnB1dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMCFpbXBvcnRhbnQ7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xuICAgICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB3aGl0ZTtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHdoaXRlO1xuICAgICAgICAtLWJhY2tncm91bmQtaG92ZXI6IHdoaXRlO1xuICAgICAgICAtLWhpZ2hsaWdodC1oZWlnaHQ6IDA7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM4MDdlN2U7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG5cbiAgICAgICAgJi5pdGVtLWhhcy1mb2N1cyB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIH1cblxuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgY29sb3I6ICM4MDdlN2UhaW1wb3J0YW50O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweCFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgIGNvbG9yOiAjODA3ZTdlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uc2MtaW9uLWlucHV0LWlvcy1oe1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xufSJdfQ== */";
      /***/
    },

    /***/
    "eOyQ":
    /*!*******************************************************!*\
      !*** ./src/app/pages/signup/signup-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: SignupPageRoutingModule */

    /***/
    function eOyQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function () {
        return SignupPageRoutingModule;
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


      var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./signup.page */
      "XHxw");

      var routes = [{
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
      }];

      var SignupPageRoutingModule = /*#__PURE__*/_createClass(function SignupPageRoutingModule() {
        _classCallCheck(this, SignupPageRoutingModule);
      });

      SignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SignupPageRoutingModule);
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
    },

    /***/
    "vfPX":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function vfPX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar mode=\"ios\">\n      <ion-title class=\"ion-text-capitalize\">\n        {{strings.ST27}}\n      </ion-title>\n          <ion-buttons slot=\"start\">\n            <ion-button color=\"dark\" mode=\"md\" (click)=\"goClosePage()\" slot=\"start\">\n              <ion-icon name=\"chevron-back-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fixed>\n\n<ion-grid fixed style=\"height: 100%;\">\n\n    <ion-row class=\"ion-justify-content-center ion-align-items-center\" style=\"height: 100%;\">\n      <ion-col size=\"8\" class=\"ion-text-center\">\n        <img src=\"./assets/images/logo_dark.png\" class=\"start-logo\"/>\n  \n  <form class=\"form\" [formGroup]=\"validationsform\" (ngSubmit)=\"tryRegister(validationsform.value)\">\n              <ion-list class=\"line-input\" mode=\"md\"> \n                <ion-item mode=\"md\">\n                    <ion-icon name=\"person-outline\" size=\"small\" slot=\"start\"></ion-icon>\n              <ion-input class=\"ion-text-left\" placeholder=\"Nombre\" type=\"text\" formControlName=\"name\"></ion-input>\n                </ion-item> \n              </ion-list>\n\n              <ion-list class=\"line-input\" mode=\"md\"> \n                <ion-item mode=\"md\">\n                    <ion-icon name=\"mail-outline\" size=\"small\" slot=\"start\"></ion-icon>\n              <ion-input class=\"ion-text-left\" placeholder=\"Correo\" type=\"email\" formControlName=\"email\"></ion-input>\n                </ion-item> \n              </ion-list>\n\n              <ion-list class=\"line-input\" mode=\"md\"> \n                  <ion-item mode=\"md\"> \n                <ion-icon name=\"lock-closed-outline\" size=\"small\" slot=\"start\"></ion-icon>\n              <ion-input class=\"ion-text-left\" type=\"password\" placeholder=\"Contraseña\" formControlName=\"password\"></ion-input>\n                  </ion-item> \n              </ion-list>\n            <ion-button class=\"button-h\" mode=\"ios\" type=\"submit\" [disabled]=\"!validationsform.valid\" color=\"primary\" fill=\"solid\" size=\"default\" shape=\"round\" expand=\"block\">\n              {{strings.ST28}}\n            </ion-button>\n          </form>\n\n          <p class=\"go-to-terms\">\n              <a (click)=\"goTermsPage()\">{{strings.ST82}}</a>\n          </p>\n  \n      </ion-col>\n    </ion-row>\n  \n  </ion-grid>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~pages-signup-signup-module~pages-start-start-module-es5.js.map