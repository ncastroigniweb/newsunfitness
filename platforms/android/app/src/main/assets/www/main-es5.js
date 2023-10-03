(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\newsun-fitness-app\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "3kIx":
    /*!***********************************!*\
      !*** ./src/app/config/strings.ts ***!
      \***********************************/

    /*! exports provided: strings */

    /***/
    function kIx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "strings", function () {
        return strings;
      });
      /* eslint-disable max-len */

      /* eslint-disable @typescript-eslint/naming-convention */


      var strings = {
        ST0: 'Inicio',
        ST1: 'Entrenamientos',
        ST2: 'Ejercicios',
        ST3: 'Dietas',
        ST4: 'Blog',
        ST5: 'Citas',
        ST6: 'Perfil',
        ST7: 'Ajustes',
        ST8: 'Cerrar sesión',
        ST9: 'Cerrar sesión',
        ST10: 'Objetivos',
        ST11: 'Niveles',
        ST12: 'Entrenamientos simples para cualquier objetivo',
        ST13: 'Entrenamientos para cada nivel de habilidad',
        ST14: 'Encuentre un plan de entrenamiento',
        ST15: 'Planes de entrenamiento personalizados',
        ST16: 'Meta',
        ST17: 'Nivel',
        ST18: 'Duración',
        ST19: 'Buscar',
        ST20: 'Dias',
        ST21: 'Selecciona tu objetivo',
        ST22: 'Selecciona tu nivel',
        ST23: 'Ups!',
        ST24: '¡No se han encontrado resultados!',
        ST25: 'Busca de nuevo',
        ST26: 'Acceso',
        ST27: 'Registrarme',
        ST28: 'Ingresar',
        ST29: '¿Has olvidado tu contraseña?',
        ST30: '¡Contraseña incorrecta!',
        ST31: 'Usuario no encontrado',
        ST32: '¡Error!',
        ST33: 'Intentar otra vez',
        ST34: 'Correo electrónico de recuperación de contraseña enviado',
        ST35: 'Atrás para iniciar sesión',
        ST36: 'El Correo ya existe',
        ST37: 'Partes del cuerpo',
        ST38: 'Equipos',
        ST39: 'Equipos para el hogar y el gimnasio',
        ST40: 'Ejercicios para cada parte del cuerpo',
        ST41: 'Categorías',
        ST42: 'Dietas destacadas',
        ST43: 'Porciones:',
        ST44: 'Hora de cocinar:',
        ST45: 'Calorías',
        ST46: 'Resumen',
        ST47: 'Ingredientes',
        ST48: 'Direcciones',
        ST49: 'Calorías',
        ST50: 'Proteína',
        ST51: 'Grasa',
        ST52: 'Carbohidratos',
        ST53: 'Guardar',
        ST54: 'Mensajes recientes',
        ST55: 'Etiquetas',
        ST56: 'Favoritos',
        ST57: 'Agregar a favoritos',
        ST58: 'Compartir',
        ST59: 'Eliminar',
        ST60: 'Rutinas y programas de entrenamiento',
        ST61: 'Guías en vídeo de ejercicios',
        ST62: 'Planes de dieta personalizados',
        ST63: 'Publicaciones informativas y noticias',
        ST64: 'Las mejores frases motivacionales de gimnasio',
        ST65: 'Atleta desde',
        ST66: 'Ups!',
        ST67: 'Tu lista de favoritos está vacía',
        ST68: 'Sin conexión a Internet',
        ST69: 'Comprueba tu conexión',
        ST70: 'Intentar otra vez',
        ST71: 'Día de descanso',
        ST72: 'Es parte del programa',
        ST73: 'Contacto',
        ST74: 'Mensaje enviado con éxito',
        ST75: 'Contacto',
        ST76: '¿Cómo te podemos ayudar?',
        ST77: '¿Tiene alguna pregunta, comentario, sugerencia o simplemente quiere ponerse en contacto? Nos encantaría saber de usted. Complete el siguiente formulario y alguien se comunicará con usted lo antes posible.',
        ST78: 'Nombre completo',
        ST79: 'Dirección de correo electrónico',
        ST80: '¿Cómo podemos saludarte?',
        ST81: 'Enviar',
        ST82: 'Privacidad y términos',
        ST83: 'Publicar comentario',
        ST84: 'Comentarios',
        ST85: 'Escribe tu comentario...',
        ST86: 'No se encontraron comentarios',
        ST87: 'Día ',
        ST94: 'Detalles',
        ST95: 'Días/Semana',
        ST96: 'Ejercicio',
        ST97: 'Sets',
        ST98: 'Repeticiones',
        ST99: 'Descansar',
        ST100: 'Equipos',
        ST101: 'Músculos involucrados',
        ST102: 'Reproducir',
        ST103: 'Pausa',
        ST104: 'Correo electrónico',
        ST105: 'Contraseña',
        ST106: 'Nombre',
        ST107: 'Nombre del ejercicio',
        ST108: 'Entregar',
        ST111: 'Nombre del ejercicio',
        ST112: 'Información',
        ST113: 'Instrucciones',
        ST114: 'Consejos',
        ST115: 'Detalles del ejercicio',
        ST116: 'El correo no existe',
        ST117: 'Mi progreso',
        ST118: 'Imagen guardada con éxito'
      };
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "BCuj":
    /*!************************************!*\
      !*** ./src/app/config/firebase.ts ***!
      \************************************/

    /*! exports provided: firebaseconfig */

    /***/
    function BCuj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "firebaseconfig", function () {
        return firebaseconfig;
      });

      var firebaseconfig = {
        firebase: {
          apiKey: "AIzaSyAS9sqPid6vlUTxThqIA1yFFxqiv6sjsAM",
          authDomain: "gofit-ionic.firebaseapp.com",
          databaseURL: "https://gofit-ionic-default-rtdb.firebaseio.com",
          projectId: "gofit-ionic",
          storageBucket: 'gofit-ionic.appspot.com',
          messagingSenderId: '345039487329',
          appId: "1:345039487329:web:01ead9a5fd9b845ef60520"
        }
      };
      /***/
    },

    /***/
    "IBCP":
    /*!*******************************************!*\
      !*** ./src/app/services/admob.service.ts ***!
      \*******************************************/

    /*! exports provided: AdmobService */

    /***/
    function IBCP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdmobService", function () {
        return AdmobService;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/admob-free/ngx */
      "ZL19");
      /* eslint-disable @typescript-eslint/naming-convention */


      var AdmobService = /*#__PURE__*/function () {
        function AdmobService(admobFree, platform) {
          _classCallCheck(this, AdmobService);

          this.admobFree = admobFree;
          this.platform = platform;
        }

        _createClass(AdmobService, [{
          key: "BannerAd",
          value: function BannerAd() {
            this.admobFree.banner.hide(); // const bannerConfig: AdMobFreeBannerConfig = {
            //   isTesting: true,
            //   autoShow: true,
            //   id: config.BannerId
            // };
            // this.admobFree.banner.config(bannerConfig);
            // this.admobFree.banner.prepare();
          }
        }, {
          key: "HideBannerAd",
          value: function HideBannerAd() {
            this.admobFree.banner.hide();
          }
        }]);

        return AdmobService;
      }();

      AdmobService.ctorParameters = function () {
        return [{
          type: _ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_3__["AdMobFree"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }];
      };

      AdmobService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AdmobService);
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./services/auth.service */
      "lGQG");
      /* harmony import */


      var _services_admob_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./services/admob.service */
      "IBCP");
      /* harmony import */


      var _config_strings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./config/strings */
      "3kIx");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, navCtrl, splashScreen, statusBar, router, afAuth, authService, admob) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.navCtrl = navCtrl;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.router = router;
          this.afAuth = afAuth;
          this.authService = authService;
          this.admob = admob;
          this.signout = _config_strings__WEBPACK_IMPORTED_MODULE_10__["strings"].ST8;
          this.appPages = [{
            title: _config_strings__WEBPACK_IMPORTED_MODULE_10__["strings"].ST1,
            url: '/workouts'
          }, {
            title: _config_strings__WEBPACK_IMPORTED_MODULE_10__["strings"].ST2,
            url: '/exercises'
          }, {
            title: _config_strings__WEBPACK_IMPORTED_MODULE_10__["strings"].ST3,
            url: '/diets'
          }, {
            title: _config_strings__WEBPACK_IMPORTED_MODULE_10__["strings"].ST4,
            url: '/posts'
          }, {
            title: _config_strings__WEBPACK_IMPORTED_MODULE_10__["strings"].ST5,
            url: '/quotes'
          }, {
            title: _config_strings__WEBPACK_IMPORTED_MODULE_10__["strings"].ST6,
            url: '/profile'
          }, {
            title: _config_strings__WEBPACK_IMPORTED_MODULE_10__["strings"].ST7,
            url: '/settings'
          }];
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                var _this2 = this;

                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.afAuth.user.subscribe(function (user) {
                        if (user) {
                          _this2.router.navigate(['/home']);

                          _this2.admob.BannerAd();
                        } else {
                          _this2.router.navigate(['/start']);
                        }
                      }, function (err) {
                        _this2.router.navigate(['/loader']);
                      }, function () {
                        _this2.splashScreen.hide();
                      });

                    case 2:
                      this.statusBar.styleLightContent();
                      this.splashScreen.hide();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }, _callee, this);
              }));
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this3 = this;

            this.authService.doLogout().then(function (res) {
              _this3.navCtrl.pop();
            }, function (err) {
              console.log(err);
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
        }, {
          type: _services_admob_service__WEBPACK_IMPORTED_MODULE_9__["AdmobService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" menuId=\"customMenu\" type=\"overlay\">\n      <ion-header class=\"ion-text-center\" no-border>\n        <img src=\"./assets/images/logo_dark.png\" class=\"side-menu-logo\">\n      </ion-header>\n      <ion-content>\n        <ion-list lines=\"none\">\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages\">\n            <ion-item [routerDirection]=\"'root'\" [routerLink]=\"[p.url]\">\n              <ion-label>\n                {{p.title}}\n              </ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n      </ion-content>\n      <ion-footer (click)=\"logout()\" class=\"ion-text-uppercase\">\n        {{signout}}\n      </ion-footer>\n    </ion-menu>\n    <ion-router-outlet [swipeGesture]=\"false\" mode=\"md\" id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n";
      /***/
    },

    /***/
    "Z2Br":
    /*!**********************************************!*\
      !*** ./src/app/services/firebase.service.ts ***!
      \**********************************************/

    /*! exports provided: FirebaseService */

    /***/
    function Z2Br(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FirebaseService", function () {
        return FirebaseService;
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


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! firebase/app */
      "Jgta");
      /* harmony import */


      var firebase_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! firebase/storage */
      "WI49");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");

      var FirebaseService = /*#__PURE__*/function () {
        function FirebaseService(afs, afAuth) {
          _classCallCheck(this, FirebaseService);

          this.afs = afs;
          this.afAuth = afAuth;
        }

        _createClass(FirebaseService, [{
          key: "unsubscribeOnLogOut",
          value: function unsubscribeOnLogOut() {
            // remember to unsubscribe from the snapshotChanges
            this.snapshotChangesSubscription.unsubscribe();
          }
        }, {
          key: "getDisplayName",
          value: function getDisplayName() {
            var user = firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].auth().currentUser;

            if (user != null) {
              return user.displayName;
            }
          }
        }, {
          key: "getDataUser",
          value: function getDataUser() {
            var user = firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].auth().currentUser;

            if (user != null) {
              return user;
            }
          }
        }, {
          key: "getIdUser",
          value: function getIdUser() {
            var user = firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].auth().currentUser;

            if (user != null) {
              return user.uid;
            }
          }
        }, {
          key: "getCreationTime",
          value: function getCreationTime() {
            var user = firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].auth().currentUser;

            if (user != null) {
              return user.metadata.creationTime;
            }
          }
        }]);

        return FirebaseService;
      }();

      FirebaseService.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]
        }];
      };

      FirebaseService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], FirebaseService);
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/fire */
      "spgP");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/fire/storage */
      "Vaw3");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _config_firebase__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./config/firebase */
      "BCuj");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ionic/storage-angular */
      "jSNZ");
      /* harmony import */


      var _ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ionic-native/admob-free/ngx */
      "ZL19");
      /* harmony import */


      var _services_admob_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./services/admob.service */
      "IBCP");
      /* harmony import */


      var _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @ionic-native/streaming-media/ngx */
      "RU0F");
      /* harmony import */


      var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @ionic-native/screen-orientation/ngx */
      "0QAI");
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      "m/P+");
      /* harmony import */


      var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @awesome-cordova-plugins/camera/ngx */
      "vaRf");

      var AppModule = /*#__PURE__*/_createClass(function AppModule() {
        _classCallCheck(this, AppModule);
      });

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_17__["IonicStorageModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(_config_firebase__WEBPACK_IMPORTED_MODULE_13__["firebaseconfig"].firebase), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestoreModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__["AngularFireAuthModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__["AngularFireStorageModule"]],
        providers: [_awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_23__["Camera"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _services_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"], _ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_18__["AdMobFree"], _services_admob_service__WEBPACK_IMPORTED_MODULE_19__["AdmobService"], _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_20__["StreamingMedia"], _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_21__["ScreenOrientation"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_22__["InAppBrowser"], {
          provide: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["SETTINGS"],
          useValue: {}
        }, {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "kLfG":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["dUtr", "common", 0],
        "./ion-alert.entry.js": ["Q8AI", "common", 1],
        "./ion-app_8.entry.js": ["hgI1", "common", 2],
        "./ion-avatar_3.entry.js": ["CfoV", "common", 3],
        "./ion-back-button.entry.js": ["Nt02", "common", 4],
        "./ion-backdrop.entry.js": ["Q2Bp", 5],
        "./ion-button_2.entry.js": ["0Pbj", "common", 6],
        "./ion-card_5.entry.js": ["ydQj", "common", 7],
        "./ion-checkbox.entry.js": ["4fMi", "common", 8],
        "./ion-chip.entry.js": ["czK9", "common", 9],
        "./ion-col_3.entry.js": ["/CAe", 10],
        "./ion-datetime_3.entry.js": ["WgF3", "common", 11],
        "./ion-fab_3.entry.js": ["uQcF", "common", 12],
        "./ion-img.entry.js": ["wHD8", 13],
        "./ion-infinite-scroll_2.entry.js": ["2lz6", 14],
        "./ion-input.entry.js": ["ercB", "common", 15],
        "./ion-item-option_3.entry.js": ["MGMP", "common", 16],
        "./ion-item_8.entry.js": ["9bur", "common", 17],
        "./ion-loading.entry.js": ["cABk", "common", 18],
        "./ion-menu_3.entry.js": ["kyFE", "common", 19],
        "./ion-modal.entry.js": ["TvZU", "common", 20],
        "./ion-nav_2.entry.js": ["vnES", "common", 21],
        "./ion-popover.entry.js": ["qCuA", "common", 22],
        "./ion-progress-bar.entry.js": ["0tOe", "common", 23],
        "./ion-radio_2.entry.js": ["h11V", "common", 24],
        "./ion-range.entry.js": ["XGij", "common", 25],
        "./ion-refresher_2.entry.js": ["nYbb", "common", 26],
        "./ion-reorder_2.entry.js": ["smMY", "common", 27],
        "./ion-ripple-effect.entry.js": ["STjf", 28],
        "./ion-route_4.entry.js": ["k5eQ", "common", 29],
        "./ion-searchbar.entry.js": ["OR5t", "common", 30],
        "./ion-segment_2.entry.js": ["fSgp", "common", 31],
        "./ion-select_3.entry.js": ["lfGF", "common", 32],
        "./ion-slide_2.entry.js": ["5xYT", 33],
        "./ion-spinner.entry.js": ["nI0H", "common", 34],
        "./ion-split-pane.entry.js": ["NAQR", 35],
        "./ion-tab-bar_2.entry.js": ["knkW", "common", 36],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 37],
        "./ion-text.entry.js": ["ISmu", "common", 38],
        "./ion-textarea.entry.js": ["U7LX", "common", 39],
        "./ion-toast.entry.js": ["L3sA", "common", 40],
        "./ion-toggle.entry.js": ["IUOf", "common", 41],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "lGQG":
    /*!******************************************!*\
      !*** ./src/app/services/auth.service.ts ***!
      \******************************************/

    /*! exports provided: AuthService */

    /***/
    function lGQG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! firebase/app */
      "Jgta");
      /* harmony import */


      var _firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./firebase.service */
      "Z2Br");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(firebaseService, afAuth, platform) {
          _classCallCheck(this, AuthService);

          this.firebaseService = firebaseService;
          this.afAuth = afAuth;
          this.platform = platform;
        }

        _createClass(AuthService, [{
          key: "doRegister",
          value: function doRegister(value) {
            return new Promise(function (resolve, reject) {
              firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].auth().createUserWithEmailAndPassword(value.email, value.password).then(function (res) {
                return resolve(res);
              }, function (err) {
                return reject(err);
              });
            });
          }
        }, {
          key: "doLogin",
          value: function doLogin(value) {
            return new Promise(function (resolve, reject) {
              firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].auth().signInWithEmailAndPassword(value.email, value.password).then(function (res) {
                return resolve(res);
              }, function (err) {
                return reject(err);
              });
            });
          }
        }, {
          key: "doRestPass",
          value: function doRestPass(value) {
            return new Promise(function (resolve, reject) {
              firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].auth().sendPasswordResetEmail(value.email).then(function (res) {
                return resolve(res);
              }, function (err) {
                return reject(err);
              });
            });
          }
        }, {
          key: "doLogout",
          value: function doLogout() {
            var _this4 = this;

            return new Promise(function (resolve, reject) {
              _this4.afAuth.signOut().then(function () {
                _this4.firebaseService.unsubscribeOnLogOut();

                resolve();
              })["catch"](function (error) {
                console.log(error);
                reject();
              });
            });
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: _firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthService);
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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

      var routes = [{
        path: '',
        redirectTo: 'loader',
        pathMatch: 'full'
      }, {
        path: 'home',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-home-home-module */
          [__webpack_require__.e("default~pages-aboutus-aboutus-module~pages-bodyparts-bodyparts-module~pages-categories-categories-mo~14667049"), __webpack_require__.e("pages-home-home-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/home/home.module */
          "99Un")).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }, {
        path: 'start',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-start-start-module */
          [__webpack_require__.e("default~pages-aboutus-aboutus-module~pages-bodyparts-bodyparts-module~pages-categories-categories-mo~14667049"), __webpack_require__.e("default~pages-signup-signup-module~pages-start-start-module"), __webpack_require__.e("default~pages-login-login-module~pages-start-start-module"), __webpack_require__.e("pages-start-start-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/start/start.module */
          "ulMc")).then(function (m) {
            return m.StartPageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-login-login-module */
          "default~pages-login-login-module~pages-start-start-module").then(__webpack_require__.bind(null,
          /*! ./pages/login/login.module */
          "F4UR")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'signup',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-signup-signup-module */
          [__webpack_require__.e("default~pages-aboutus-aboutus-module~pages-bodyparts-bodyparts-module~pages-categories-categories-mo~14667049"), __webpack_require__.e("default~pages-signup-signup-module~pages-start-start-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/signup/signup.module */
          "UUSl")).then(function (m) {
            return m.SignupPageModule;
          });
        }
      }, {
        path: 'forgotpass',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-forgotpass-forgotpass-module */
          "pages-forgotpass-forgotpass-module").then(__webpack_require__.bind(null,
          /*! ./pages/forgotpass/forgotpass.module */
          "G09Y")).then(function (m) {
            return m.ForgotpassPageModule;
          });
        }
      }, {
        path: 'termsguest',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-termsguest-termsguest-module */
          [__webpack_require__.e("default~pages-aboutus-aboutus-module~pages-bodyparts-bodyparts-module~pages-categories-categories-mo~14667049"), __webpack_require__.e("pages-termsguest-termsguest-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/termsguest/termsguest.module */
          "P3JS")).then(function (m) {
            return m.TermsguestPageModule;
          });
        }
      }, {
        path: 'posts',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-posts-posts-module */
          [__webpack_require__.e("default~pages-aboutus-aboutus-module~pages-bodyparts-bodyparts-module~pages-categories-categories-mo~14667049"), __webpack_require__.e("pages-posts-posts-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/posts/posts.module */
          "XxUk")).then(function (m) {
            return m.PostsPageModule;
          });
        }
      }, {
        path: 'singlepost/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-singlepost-singlepost-module */
          [__webpack_require__.e("default~pages-aboutus-aboutus-module~pages-bodyparts-bodyparts-module~pages-categories-categories-mo~14667049"), __webpack_require__.e("pages-singlepost-singlepost-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/singlepost/singlepost.module */
          "UND7")).then(function (m) {
            return m.SinglepostPageModule;
          });
        }
      }, {
        path: 'tags',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-tags-tags-module */
          [__webpack_require__.e("default~pages-aboutus-aboutus-module~pages-bodyparts-bodyparts-module~pages-categories-categories-mo~14667049"), __webpack_require__.e("pages-tags-tags-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/tags/tags.module */
          "R3Jx")).then(function (m) {
            return m.TagsPageModule;
          });
        }
      }, {
        path: 'profile',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-profile-profile-module */
          [__webpack_require__.e("default~pages-aboutus-aboutus-module~pages-bodyparts-bodyparts-module~pages-categories-categories-mo~14667049"), __webpack_require__.e("pages-profile-profile-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/profile/profile.module */
          "723k")).then(function (m) {
            return m.ProfilePageModule;
          });
        }
      }, {
        path: 'settings',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-settings-settings-module */
          [__webpack_require__.e("default~pages-aboutus-aboutus-module~pages-bodyparts-bodyparts-module~pages-categories-categories-mo~14667049"), __webpack_require__.e("pages-settings-settings-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/settings/settings.module */
          "yPrK")).then(function (m) {
            return m.SettingsPageModule;
          });
        }
      }, {
        path: 'aboutus',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-aboutus-aboutus-module */
          [__webpack_require__.e("default~pages-aboutus-aboutus-module~pages-bodyparts-bodyparts-module~pages-categories-categories-mo~14667049"), __webpack_require__.e("pages-aboutus-aboutus-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/aboutus/aboutus.module */
          "1mJM")).then(function (m) {
            return m.AboutusPageModule;
          });
        }
      }, {
        path: 'terms',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-terms-terms-module */
          [__webpack_require__.e("default~pages-aboutus-aboutus-module~pages-bodyparts-bodyparts-module~pages-categories-categories-mo~14667049"), __webpack_require__.e("pages-terms-terms-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/terms/terms.module */
          "91Gy")).then(function (m) {
            return m.TermsPageModule;
          });
        }
      }, {
        path: 'contact',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-contact-contact-module */
          [__webpack_require__.e("default~pages-aboutus-aboutus-module~pages-bodyparts-bodyparts-module~pages-categories-categories-mo~14667049"), __webpack_require__.e("pages-contact-contact-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/contact/contact.module */
          "14/Y")).then(function (m) {
            return m.ContactPageModule;
          });
        }
      }, {
        path: 'loader',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-loader-loader-module */
          [__webpack_require__.e("default~pages-aboutus-aboutus-module~pages-bodyparts-bodyparts-module~pages-categories-categories-mo~14667049"), __webpack_require__.e("pages-loader-loader-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/loader/loader.module */
          "yjI8")).then(function (m) {
            return m.LoaderPageModule;
          });
        }
      }, {
        path: 'singletag/:id/:title',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-singletag-singletag-module */
          [__webpack_require__.e("default~pages-aboutus-aboutus-module~pages-bodyparts-bodyparts-module~pages-categories-categories-mo~14667049"), __webpack_require__.e("pages-singletag-singletag-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/singletag/singletag.module */
          "Pp8j")).then(function (m) {
            return m.SingletagPageModule;
          });
        }
      }, {
        path: 'diets',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-diets-diets-module */
          [__webpack_require__.e("default~pages-aboutus-aboutus-module~pages-bodyparts-bodyparts-module~pages-categories-categories-mo~14667049"), __webpack_require__.e("pages-diets-diets-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/diets/diets.module */
          "R2DJ")).then(function (m) {
            return m.DietsPageModule;
          });
        }
      }, {
        path: 'categories',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-categories-categories-module */
          [__webpack_require__.e("default~pages-aboutus-aboutus-module~pages-bodyparts-bodyparts-module~pages-categories-categories-mo~14667049"), __webpack_require__.e("pages-categories-categories-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/categories/categories.module */
          "U5Jw")).then(function (m) {
            return m.CategoriesPageModule;
          });
        }
      }, {
        path: 'singlecategory/:id/:title',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-singlecategory-singlecategory-module */
          [__webpack_require__.e("default~pages-aboutus-aboutus-module~pages-bodyparts-bodyparts-module~pages-categories-categories-mo~14667049"), __webpack_require__.e("pages-singlecategory-singlecategory-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/singlecategory/singlecategory.module */
          "IATJ")).then(function (m) {
            return m.SinglecategoryPageModule;
          });
        }
      }, {
        path: 'singlediet/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-singlediet-singlediet-module */
          [__webpack_require__.e("default~pages-aboutus-aboutus-module~pages-bodyparts-bodyparts-module~pages-categories-categories-mo~14667049"), __webpack_require__.e("pages-singlediet-singlediet-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/singlediet/singlediet.module */
          "SsZM")).then(function (m) {
            return m.SingledietPageModule;
          });
        }
      }, {
        path: 'workouts',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-workouts-workouts-module */
          [__webpack_require__.e("default~pages-aboutus-aboutus-module~pages-bodyparts-bodyparts-module~pages-categories-categories-mo~14667049"), __webpack_require__.e("pages-workouts-workouts-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/workouts/workouts.module */
          "nNrW")).then(function (m) {
            return m.WorkoutsPageModule;
          });
        }
      }, {
        path: 'exercises',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-exercises-exercises-module */
          [__webpack_require__.e("default~pages-aboutus-aboutus-module~pages-bodyparts-bodyparts-module~pages-categories-categories-mo~14667049"), __webpack_require__.e("pages-exercises-exercises-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/exercises/exercises.module */
          "y56J")).then(function (m) {
            return m.ExercisesPageModule;
          });
        }
      }, {
        path: 'goals',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-goals-goals-module */
          [__webpack_require__.e("default~pages-aboutus-aboutus-module~pages-bodyparts-bodyparts-module~pages-categories-categories-mo~14667049"), __webpack_require__.e("pages-goals-goals-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/goals/goals.module */
          "pznE")).then(function (m) {
            return m.GoalsPageModule;
          });
        }
      }, {
        path: 'levels',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-levels-levels-module */
          [__webpack_require__.e("default~pages-aboutus-aboutus-module~pages-bodyparts-bodyparts-module~pages-categories-categories-mo~14667049"), __webpack_require__.e("pages-levels-levels-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/levels/levels.module */
          "TtBa")).then(function (m) {
            return m.LevelsPageModule;
          });
        }
      }, {
        path: 'equipments',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-equipments-equipments-module */
          [__webpack_require__.e("default~pages-aboutus-aboutus-module~pages-bodyparts-bodyparts-module~pages-categories-categories-mo~14667049"), __webpack_require__.e("pages-equipments-equipments-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/equipments/equipments.module */
          "I8Ox")).then(function (m) {
            return m.EquipmentsPageModule;
          });
        }
      }, {
        path: 'bodyparts',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-bodyparts-bodyparts-module */
          [__webpack_require__.e("default~pages-aboutus-aboutus-module~pages-bodyparts-bodyparts-module~pages-categories-categories-mo~14667049"), __webpack_require__.e("pages-bodyparts-bodyparts-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/bodyparts/bodyparts.module */
          "odIO")).then(function (m) {
            return m.BodypartsPageModule;
          });
        }
      }, {
        path: 'singlegoal/:id/:title',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-singlegoal-singlegoal-module */
          [__webpack_require__.e("default~pages-aboutus-aboutus-module~pages-bodyparts-bodyparts-module~pages-categories-categories-mo~14667049"), __webpack_require__.e("pages-singlegoal-singlegoal-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/singlegoal/singlegoal.module */
          "shyB")).then(function (m) {
            return m.SinglegoalPageModule;
          });
        }
      }, {
        path: 'singlelevel/:id/:title',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-singlelevel-singlelevel-module */
          [__webpack_require__.e("default~pages-aboutus-aboutus-module~pages-bodyparts-bodyparts-module~pages-categories-categories-mo~14667049"), __webpack_require__.e("pages-singlelevel-singlelevel-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/singlelevel/singlelevel.module */
          "fqjV")).then(function (m) {
            return m.SinglelevelPageModule;
          });
        }
      }, {
        path: 'singlebody/:id/:title',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-singlebody-singlebody-module */
          [__webpack_require__.e("default~pages-aboutus-aboutus-module~pages-bodyparts-bodyparts-module~pages-categories-categories-mo~14667049"), __webpack_require__.e("pages-singlebody-singlebody-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/singlebody/singlebody.module */
          "Kq34")).then(function (m) {
            return m.SinglebodyPageModule;
          });
        }
      }, {
        path: 'singleequipment/:id/:title',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-singleequipment-singleequipment-module */
          [__webpack_require__.e("default~pages-aboutus-aboutus-module~pages-bodyparts-bodyparts-module~pages-categories-categories-mo~14667049"), __webpack_require__.e("pages-singleequipment-singleequipment-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/singleequipment/singleequipment.module */
          "IcxL")).then(function (m) {
            return m.SingleequipmentPageModule;
          });
        }
      }, {
        path: 'singleexercise/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-singleexercise-singleexercise-module */
          [__webpack_require__.e("default~pages-aboutus-aboutus-module~pages-bodyparts-bodyparts-module~pages-categories-categories-mo~14667049"), __webpack_require__.e("pages-singleexercise-singleexercise-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/singleexercise/singleexercise.module */
          "vnTM")).then(function (m) {
            return m.SingleexercisePageModule;
          });
        }
      }, {
        path: 'singleworkout/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-singleworkout-singleworkout-module */
          [__webpack_require__.e("default~pages-aboutus-aboutus-module~pages-bodyparts-bodyparts-module~pages-categories-categories-mo~14667049"), __webpack_require__.e("pages-singleworkout-singleworkout-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/singleworkout/singleworkout.module */
          "EkK8")).then(function (m) {
            return m.SingleworkoutPageModule;
          });
        }
      }, {
        path: 'singleday/:id/:day',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-singleday-singleday-module */
          [__webpack_require__.e("default~pages-aboutus-aboutus-module~pages-bodyparts-bodyparts-module~pages-categories-categories-mo~14667049"), __webpack_require__.e("pages-singleday-singleday-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/singleday/singleday.module */
          "Y/Rt")).then(function (m) {
            return m.SingledayPageModule;
          });
        }
      }, {
        path: 'quotes',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-quotes-quotes-module */
          [__webpack_require__.e("default~pages-aboutus-aboutus-module~pages-bodyparts-bodyparts-module~pages-categories-categories-mo~14667049"), __webpack_require__.e("pages-quotes-quotes-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/quotes/quotes.module */
          "Fhd7")).then(function (m) {
            return m.QuotesPageModule;
          });
        }
      }, {
        path: 'miprogreso',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-miprogreso-miprogreso-module */
          "pages-miprogreso-miprogreso-module").then(__webpack_require__.bind(null,
          /*! ./pages/miprogreso/miprogreso.module */
          "AVSq")).then(function (m) {
            return m.MiprogresoPageModule;
          });
        }
      }, {
        path: 'miprogreso/:id/:day',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-miprogreso-miprogreso-module */
          "pages-miprogreso-miprogreso-module").then(__webpack_require__.bind(null,
          /*! ./pages/miprogreso/miprogreso.module */
          "AVSq")).then(function (m) {
            return m.MiprogresoPageModule;
          });
        }
      }];

      var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      });

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".side-menu-logo {\n  max-width: 130px;\n  margin-bottom: 20px;\n}\n\nion-header {\n  padding: 24px 10px;\n}\n\nion-item {\n  padding: 0 20px;\n}\n\nion-icon {\n  color: #333;\n}\n\nion-label {\n  font-size: 18px !important;\n}\n\nion-footer {\n  text-align: center;\n  padding: 20px;\n  color: #fff;\n  background: var(--ion-color-primary);\n  font-size: 14px !important;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLDBCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FBQ0oiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGUtbWVudS1sb2dve1xuICAgIG1heC13aWR0aDogMTMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLWhlYWRlcntcbiAgICBwYWRkaW5nOiAyNHB4IDEwcHg7XG59XG5cbmlvbi1pdGVte1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbn1cblxuaW9uLWljb257XG4gICAgY29sb3I6ICMzMzM7XG59XG5cbmlvbi1sYWJlbHtcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbn1cblxuaW9uLWZvb3RlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn0iXX0= */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map