(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-miprogreso-miprogreso-module"], {
    /***/
    "0np6":
    /*!**********************************!*\
      !*** ./src/app/config/config.ts ***!
      \**********************************/

    /*! exports provided: config */

    /***/
    function np6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "config", function () {
        return config;
      });
      /* eslint-disable @typescript-eslint/naming-convention */


      var config = {
        // backend url
        Url: 'https://pruebas.innovaweb.com.co',
        // facebook page url
        Facebook: 'https://facebook.com',
        // youtube page url
        Youtube: 'https://youtube.com',
        // twitter page url
        Twitter: 'https://twitter.com',
        // twitter page url
        Instagram: 'https://instagram.com',
        // admob banner id
        BannerId: '',
        StatusBarColor: '#f39c12'
      };
      /***/
    },

    /***/
    "7jo8":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/miprogreso/miprogreso.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function jo8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-button (click)=\"backButton()\" slot=\"start\" mode=\"md\" >\n      <ion-icon [color]=\"color\" mode=\"md\" name=\"arrow-back-outline\"></ion-icon>\n    </ion-button>\n    <ion-title mode=\"ios\" class=\"ion-text-center\"\n      >Mi progreso dia {{this.day}}</ion-title\n    >\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <app-loading></app-loading>\n\n  <ion-content>\n    <ion-grid class=\"ion-no-padding\">\n      <ion-row\n        class=\"header-bg\"\n        [style.background-image]=\"'url(' + (config.Url + '/images/' + workout.workout_image) + ')'\"\n        [ngStyle]=\"{'height': innerHeight}\"\n      >\n        <div class=\"text\">\n          <p class=\"name\">{{workout.workout_title}}</p>\n          <p class=\"time\">{{workout.workout_duration}} {{strings.ST95}}</p>\n        </div>\n      </ion-row>\n      <ion-row class=\"cols\">\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <p class=\"text\">Sube aquí tu progreso</p>\n        </ion-col>\n        \n      </ion-row>\n    </ion-grid>\n\n    <div class=\"progreso_temporal\" >\n      <ion-grid class=\"ion-no-padding\">\n      <ion-row class=\"header-bg\">\n        <ion-spinner name=\"dots\" *ngIf=\"procesando\"></ion-spinner>\n        <img [src]=\"tempImg\"  [ngStyle]=\"{'height': innerHeight} \" *ngIf=\"tempImg\">\n        <img [src]=\"config.Url + '/uploads/images/' + bdImg.url_imagen\"  [ngStyle]=\"{'height': innerHeight} \" *ngIf=\"bdImg && !tempImg\">\n      </ion-row>\n      <ion-row class=\"cols\">\n        <ion-col size=\"12\" class=\"ion-text-center\" >\n          <p class=\"text\"><ion-button\n            (click)=\"presentActionSheet()\"\n            class=\"primary ion-text-uppercase ion-text-bold ios button button-block button-solid ion-activatable ion-focusable hydrated\"\n            mode=\"ios\"\n            expand=\"block\"\n          >\n            Abrir\n            <ion-icon slot=\"start\" name=\"log-in-outline\"></ion-icon>\n          </ion-button></p>\n        </ion-col>\n        <!-- <ion-col size=\"12\" class=\"ion-text-center \" *ngIf=\"tempImg || bdImg\" *ngIf=\"!tempImg && !bdImg\">\n          <p class=\"text\" ><ion-button\n            (click)=\"eliminar_foto()\"\n            class=\"primary ion-text-uppercase ion-text-bold ios button button-block button-solid ion-activatable ion-focusable hydrated\"\n            mode=\"ios\"\n            expand=\"block\"\n          >\n            Eliminar\n            <ion-icon slot=\"start\" name=\"trash-outline\"></ion-icon>\n          </ion-button></p>\n        </ion-col>-->\n        \n      </ion-row>\n    </ion-grid>\n    </div>\n  \n\n\n\n";
      /***/
    },

    /***/
    "9XBZ":
    /*!*******************************************************!*\
      !*** ./src/app/pages/miprogreso/miprogreso.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function XBZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".header-bg {\n  background-position: center;\n  background-size: cover;\n  align-items: center;\n  justify-content: center;\n}\n\n.header-bg .text {\n  color: #fff;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.6);\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 10px 30px;\n}\n\n.header-bg .name {\n  color: #ffffff;\n  text-align: center;\n  margin-bottom: 9px;\n  font-weight: bold;\n  font-size: 15px;\n  text-transform: capitalize;\n}\n\n.header-bg .time {\n  color: var(--ion-color-primary);\n  margin-top: 5px;\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.cols {\n  background-color: #f9f9f9;\n  padding: 10px 0;\n}\n\n.cols .text {\n  color: var(--ion-color-primary);\n  font-weight: bold;\n  text-transform: uppercase;\n  margin: 0;\n  padding-bottom: 5px;\n}\n\n.cols .value {\n  text-transform: uppercase;\n  margin: 0;\n  color: var(--ion-color-dark);\n  font-size: 14px;\n  opacity: 0.7;\n}\n\n.days {\n  padding: 16px;\n}\n\n.tags {\n  background-color: #f9f9f9;\n  border-left: 3px solid var(--ion-color-primary);\n  padding: 15px;\n  position: relative;\n  margin-bottom: 10px;\n}\n\n.tags h1 {\n  font-size: 13px;\n  text-transform: uppercase;\n  font-weight: bold;\n  margin: 0;\n}\n\n.tags ion-icon {\n  position: absolute;\n  right: 14px;\n  top: 11px;\n  font-size: 22px;\n}\n\n.img_progreso {\n  width: 300px;\n}\n\n.btn-eliminar {\n  background-color: red !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtaXByb2dyZXNvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FBQ0o7O0FBRUE7RUFDSSwrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSwrQ0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDQSxZQUFBO0FBQ0E7O0FBRUE7RUFDSSxnQ0FBQTtBQUNKIiwiZmlsZSI6Im1pcHJvZ3Jlc28ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1iZ3tcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXItYmcgLnRleHR7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42MCk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLWJnIC5uYW1le1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA5cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4uaGVhZGVyLWJnIC50aW1le1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmNvbHN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG59XHJcblxyXG4uY29scyAudGV4dHtcclxuICAgIGNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn0gXHJcblxyXG4uY29scyAudmFsdWV7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6dmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG59IFxyXG5cclxuLmRheXN7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG4udGFnc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4udGFncyBoMXtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbjowO1xyXG59XHJcblxyXG4udGFncyBpb24taWNvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxNHB4O1xyXG4gICAgdG9wOiAxMXB4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcblxyXG4uaW1nX3Byb2dyZXNve1xyXG53aWR0aDogMzAwcHg7O1xyXG59XHJcblxyXG4uYnRuLWVsaW1pbmFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "AVSq":
    /*!*******************************************************!*\
      !*** ./src/app/pages/miprogreso/miprogreso.module.ts ***!
      \*******************************************************/

    /*! exports provided: MiprogresoPageModule */

    /***/
    function AVSq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MiprogresoPageModule", function () {
        return MiprogresoPageModule;
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


      var _miprogreso_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./miprogreso-routing.module */
      "zX3P");
      /* harmony import */


      var _miprogreso_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./miprogreso.page */
      "EhF8");

      var MiprogresoPageModule = /*#__PURE__*/_createClass(function MiprogresoPageModule() {
        _classCallCheck(this, MiprogresoPageModule);
      });

      MiprogresoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _miprogreso_routing_module__WEBPACK_IMPORTED_MODULE_5__["MiprogresoPageRoutingModule"]],
        declarations: [_miprogreso_page__WEBPACK_IMPORTED_MODULE_6__["MiprogresoPage"]]
      })], MiprogresoPageModule);
      /***/
    },

    /***/
    "EhF8":
    /*!*****************************************************!*\
      !*** ./src/app/pages/miprogreso/miprogreso.page.ts ***!
      \*****************************************************/

    /*! exports provided: MiprogresoPage */

    /***/
    function EhF8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MiprogresoPage", function () {
        return MiprogresoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_miprogreso_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./miprogreso.page.html */
      "7jo8");
      /* harmony import */


      var _miprogreso_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./miprogreso.page.scss */
      "9XBZ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @awesome-cordova-plugins/camera/ngx */
      "vaRf");
      /* harmony import */


      var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/data.service */
      "EnSQ");
      /* harmony import */


      var _config_strings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../config/strings */
      "3kIx");
      /* harmony import */


      var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../config/config */
      "0np6");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_favorite_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../services/favorite.service */
      "kUbd");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _services_firebase_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../services/firebase.service */
      "Z2Br");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var MiprogresoPage = /*#__PURE__*/function () {
        function MiprogresoPage(camera, dataService, router, route, plt, dataFavorite, loadingController, sanitizer, firebase, authService, http, navCtrl, actionSheetController) {
          _classCallCheck(this, MiprogresoPage);

          this.camera = camera;
          this.dataService = dataService;
          this.router = router;
          this.route = route;
          this.plt = plt;
          this.dataFavorite = dataFavorite;
          this.loadingController = loadingController;
          this.sanitizer = sanitizer;
          this.firebase = firebase;
          this.authService = authService;
          this.http = http;
          this.navCtrl = navCtrl;
          this.actionSheetController = actionSheetController;
          this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_6__["strings"];
          this.isLoading = false;
          this.workout = {};
          this.icon = 'star-outline';
          this.config = _config_config__WEBPACK_IMPORTED_MODULE_7__["config"];
          this.bdImg = {};
          this.progreso = []; // Http Options

          this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpHeaders"]({
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            })
          };
        }

        _createClass(MiprogresoPage, [{
          key: "openCamera",
          value: function openCamera() {
            var _this = this;

            this.procesando = true;
            var options = {
              quality: 100,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE,
              correctOrientation: true,
              sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
            };
            this.camera.getPicture(options).then(function (imageData) {
              // imageData is either a base64 encoded string or a file URI
              // If it's base64 (DATA_URL):
              var base64Image = 'data:image/jpeg;base64,' + imageData;
              _this.tempImg = _this.sanitizer.bypassSecurityTrustResourceUrl(base64Image);

              _this.guardar_foto(base64Image); //console.log("62 -->", base64Image);


              var data = {
                image: base64Image
              }; // this.dataService.postImage(data);
            }, function (err) {// Handle error
            });
            this.procesando = false;
          }
        }, {
          key: "eliminar_foto",
          value: function eliminar_foto() {
            this.tempImg = '';
            this.bdImg = '';
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "guardar_foto",
          value: function guardar_foto(base64Image) {
            var _this2 = this;

            var data_progreso = {
              id_user: this.id_user,
              id_workout: this.id,
              day: this.day,
              imagen: base64Image
            };
            this.http.post(_config_config__WEBPACK_IMPORTED_MODULE_7__["config"].Url + '/controller/procesar_imagen.php', data_progreso, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["catchError"])(function (error) {
              console.error('Error en la solicitud:', error);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_16__["throwError"])('Algo salió mal. Por favor, inténtalo de nuevo más tarde.');
            })).subscribe(function (data) {
              if (data === 'false') {
                _this2.presentAlert(_config_strings__WEBPACK_IMPORTED_MODULE_6__["strings"].ST32);
              } else {
                _this2.presentAlert(_config_strings__WEBPACK_IMPORTED_MODULE_6__["strings"].ST118);
              }
            }, function (error) {
              console.log(error);
            });
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
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _this3 = this;

              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    this.isLoading = true;
                    this.innerHeight = this.plt.height() / 3 + 'px';
                    _context2.next = 4;
                    return this.firebase.getIdUser();

                  case 4:
                    this.id_user = _context2.sent;
                    //console.log("ID USUARIO: " + this.id_user);
                    this.route.params.subscribe(function (data) {
                      _this3.id = data.id;
                      _this3.day = data.day;

                      _this3.getDetails(); //console.log("ID: " + data.id);

                    });
                    this.dataService.getProgreso(this.id, this.day, this.id_user).subscribe(function (resp) {
                      _this3.progreso = resp;
                      _this3.bdImg = resp[0];
                      _this3.isLoading = false;
                    });

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getDetails",
          value: function getDetails() {
            var _this4 = this;

            this.dataService.getDataWorkoutById(this.id).subscribe(function (resp) {
              _this4.workout = resp[0];
              _this4.isLoading = false;
            });
          }
        }, {
          key: "backButton",
          value: function backButton() {
            this.navCtrl.back();
          }
        }, {
          key: "presentActionSheet",
          value: function presentActionSheet() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var _this5 = this;

              var actionSheet, _yield$actionSheet$on, role;

              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.actionSheetController.create({
                      header: 'Elije una opción',
                      cssClass: 'my-custom-class',
                      buttons: [{
                        text: 'Subir',
                        role: 'upload',
                        icon: 'cloud-upload-outline',
                        handler: function handler() {
                          _this5.openCamera();
                        }
                      }, {
                        text: 'Eliminar',
                        role: 'destructive',
                        icon: 'trash',
                        handler: function handler() {
                          _this5.eliminar_foto();
                        }
                      }, {
                        text: 'Cancelar',
                        icon: 'close',
                        role: 'cancel',
                        handler: function handler() {
                          console.log('Cancel clicked');
                        }
                      }]
                    });

                  case 2:
                    actionSheet = _context3.sent;
                    _context3.next = 5;
                    return actionSheet.present();

                  case 5:
                    _context3.next = 7;
                    return actionSheet.onDidDismiss();

                  case 7:
                    _yield$actionSheet$on = _context3.sent;
                    role = _yield$actionSheet$on.role;
                    console.log('onDidDismiss resolved with role', role);

                  case 10:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this);
            }));
          }
        }]);

        return MiprogresoPage;
      }();

      MiprogresoPage.ctorParameters = function () {
        return [{
          type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"]
        }, {
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"]
        }, {
          type: _services_favorite_service__WEBPACK_IMPORTED_MODULE_10__["FavoriteService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["LoadingController"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"]
        }, {
          type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_12__["FirebaseService"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ActionSheetController"]
        }];
      };

      MiprogresoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-miprogreso',
        template: _raw_loader_miprogreso_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_miprogreso_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MiprogresoPage);
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
    "kUbd":
    /*!**********************************************!*\
      !*** ./src/app/services/favorite.service.ts ***!
      \**********************************************/

    /*! exports provided: FavoriteService */

    /***/
    function kUbd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FavoriteService", function () {
        return FavoriteService;
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


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/storage */
      "fwsW");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* eslint-disable @typescript-eslint/naming-convention */

      /* eslint-disable prefer-arrow/prefer-arrow-functions */


      var FavoriteService = /*#__PURE__*/function () {
        function FavoriteService(storage, toastCtrl) {
          _classCallCheck(this, FavoriteService);

          this.storage = storage;
          this.toastCtrl = toastCtrl;
          this.posts = [];
          this.diets = [];
          this.workouts = [];
        }

        _createClass(FavoriteService, [{
          key: "presentToast",
          value: function presentToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var toast;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.toastCtrl.create({
                      message: message,
                      duration: 1500,
                      mode: 'ios',
                      color: 'dark',
                      cssClass: 'ion-toast'
                    });

                  case 2:
                    toast = _context4.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, this);
            }));
          } // ------------------------------- POSTS

        }, {
          key: "savePost",
          value: function savePost(post) {
            var exist = false;

            var _iterator = _createForOfIteratorHelper(this.posts),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var item = _step.value;

                if (item.id === post.id) {
                  exist = true;
                  break;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            if (exist) {
              this.posts = this.posts.filter(function (item) {
                return item.id !== post.id;
              });
            } else {
              this.posts.push(post);
            }

            this.storage.set('posts', this.posts);
            return !exist;
          }
        }, {
          key: "loadPosts",
          value: function loadPosts() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              var posts;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    this.storage.create();
                    _context5.next = 3;
                    return this.storage.get('posts');

                  case 3:
                    posts = _context5.sent;
                    this.posts = posts || [];
                    return _context5.abrupt("return", this.posts);

                  case 6:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "existPost",
          value: function existPost(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
              var exist;
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.loadPosts();

                  case 2:
                    exist = this.posts.find(function (post) {
                      return post.id === id;
                    });
                    return _context6.abrupt("return", exist ? true : false);

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "removePost",
          value: function removePost(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
              var ArrayFav;
              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) switch (_context7.prev = _context7.next) {
                  case 0:
                    // tslint:disable-next-line: only-arrow-functions
                    ArrayFav = this.posts.filter(function (e) {
                      return e.id !== id;
                    });
                    this.storage.set('posts', ArrayFav);

                  case 2:
                  case "end":
                    return _context7.stop();
                }
              }, _callee7, this);
            }));
          } // ------------------------------- DIETS

        }, {
          key: "saveDiet",
          value: function saveDiet(diet) {
            var exist = false;

            var _iterator2 = _createForOfIteratorHelper(this.diets),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var item = _step2.value;

                if (item.id === diet.id) {
                  exist = true;
                  break;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            if (exist) {
              this.diets = this.diets.filter(function (item) {
                return item.id !== diet.id;
              });
            } else {
              this.diets.push(diet);
            }

            this.storage.set('diets', this.diets);
            return !exist;
          }
        }, {
          key: "loadDiets",
          value: function loadDiets() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
              var diets;
              return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                while (1) switch (_context8.prev = _context8.next) {
                  case 0:
                    this.storage.create();
                    _context8.next = 3;
                    return this.storage.get('diets');

                  case 3:
                    diets = _context8.sent;
                    this.diets = diets || [];
                    return _context8.abrupt("return", this.diets);

                  case 6:
                  case "end":
                    return _context8.stop();
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "existDiet",
          value: function existDiet(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
              var exist;
              return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                while (1) switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.loadDiets();

                  case 2:
                    exist = this.diets.find(function (diet) {
                      return diet.id === id;
                    });
                    return _context9.abrupt("return", exist ? true : false);

                  case 4:
                  case "end":
                    return _context9.stop();
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "removeDiet",
          value: function removeDiet(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
              var ArrayFav;
              return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                while (1) switch (_context10.prev = _context10.next) {
                  case 0:
                    // tslint:disable-next-line: only-arrow-functions
                    ArrayFav = this.diets.filter(function (e) {
                      return e.id !== id;
                    });
                    this.storage.set('diets', ArrayFav);

                  case 2:
                  case "end":
                    return _context10.stop();
                }
              }, _callee10, this);
            }));
          } // ------------------------------- WORKOUTS

        }, {
          key: "saveWorkout",
          value: function saveWorkout(workout) {
            var exist = false;

            var _iterator3 = _createForOfIteratorHelper(this.workouts),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var item = _step3.value;

                if (item.id === workout.id) {
                  exist = true;
                  break;
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            if (exist) {
              this.workouts = this.workouts.filter(function (item) {
                return item.id !== workout.id;
              });
            } else {
              this.workouts.push(workout);
            }

            this.storage.set('workouts', this.workouts);
            return !exist;
          }
        }, {
          key: "loadWorkouts",
          value: function loadWorkouts() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
              var workouts;
              return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                while (1) switch (_context11.prev = _context11.next) {
                  case 0:
                    this.storage.create();
                    _context11.next = 3;
                    return this.storage.get('workouts');

                  case 3:
                    workouts = _context11.sent;
                    this.workouts = workouts || [];
                    return _context11.abrupt("return", this.workouts);

                  case 6:
                  case "end":
                    return _context11.stop();
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "existWorkout",
          value: function existWorkout(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
              var exist;
              return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                while (1) switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return this.loadWorkouts();

                  case 2:
                    exist = this.workouts.find(function (workout) {
                      return workout.id === id;
                    });
                    return _context12.abrupt("return", exist ? true : false);

                  case 4:
                  case "end":
                    return _context12.stop();
                }
              }, _callee12, this);
            }));
          }
        }, {
          key: "removeWorkout",
          value: function removeWorkout(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
              var ArrayFav;
              return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                while (1) switch (_context13.prev = _context13.next) {
                  case 0:
                    // tslint:disable-next-line: only-arrow-functions
                    ArrayFav = this.workouts.filter(function (e) {
                      return e.id !== id;
                    });
                    this.storage.set('workouts', ArrayFav);

                  case 2:
                  case "end":
                    return _context13.stop();
                }
              }, _callee13, this);
            }));
          }
        }]);

        return FavoriteService;
      }();

      FavoriteService.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }];
      };

      FavoriteService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], FavoriteService);
      /***/
    },

    /***/
    "zX3P":
    /*!***************************************************************!*\
      !*** ./src/app/pages/miprogreso/miprogreso-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: MiprogresoPageRoutingModule */

    /***/
    function zX3P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MiprogresoPageRoutingModule", function () {
        return MiprogresoPageRoutingModule;
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


      var _miprogreso_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./miprogreso.page */
      "EhF8");

      var routes = [{
        path: '',
        component: _miprogreso_page__WEBPACK_IMPORTED_MODULE_3__["MiprogresoPage"]
      }];

      var MiprogresoPageRoutingModule = /*#__PURE__*/_createClass(function MiprogresoPageRoutingModule() {
        _classCallCheck(this, MiprogresoPageRoutingModule);
      });

      MiprogresoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MiprogresoPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-miprogreso-miprogreso-module-es5.js.map