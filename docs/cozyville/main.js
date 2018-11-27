(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/landing/landing.component */ "./src/app/pages/landing/landing.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_1__["LandingComponent"] },
    { path: "**", redirectTo: "/home" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-alerts maxMessages=\"1\" timeout=\"15000\"></ngx-alerts>\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Cozy Ville';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/landing/landing.component */ "./src/app/pages/landing/landing.component.ts");
/* harmony import */ var _pages_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/navigation/navigation.component */ "./src/app/pages/navigation/navigation.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_service_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared-service/shared.service */ "./src/app/shared-service/shared.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/fesm5/ngx-alerts.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"],
                _pages_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_10__["CarouselModule"],
                ngx_alerts__WEBPACK_IMPORTED_MODULE_9__["AlertModule"].forRoot({ maxMessages: 5, timeout: 5000, position: 'right' }),
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_11__["AngularFontAwesomeModule"]
            ],
            providers: [
                _shared_service_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/landing/landing.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/landing/landing.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hero-section {\r\n    /* background: #ff000014 !important; */\r\n    background-color: #1010109c !important;\r\n    height: 60vh;\r\n}\r\n\r\n\r\n.bg-color {\r\n    background-image: url(/assets/img/bg-img.jpg) !important;\r\n    background-position: center;\r\n    height: 60vh;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n\r\n.bg-package-1 {\r\n    background-image: url(/assets/img/summer.png) !important;\r\n    height: 40vh;\r\n}\r\n\r\n\r\n.bg-package-2 {\r\n    background-image: url(/assets/img/other.png) !important;\r\n    height: 40vh;\r\n}\r\n\r\n\r\n.box-shadow {\r\n    box-shadow: 4px 7px 39px -3px rgba(150, 145, 150, 1);\r\n}\r\n\r\n\r\n.bg-package-1>h3 {\r\n    position: absolute;\r\n    top: 45%;\r\n    left: 21%;\r\n}\r\n\r\n\r\n.bg-package-2>h3 {\r\n    position: absolute;\r\n    top: 45%;\r\n    left: 28%;\r\n}\r\n\r\n\r\n.hero-section>h1 {\r\n    top: 25%;\r\n    left: 36%;\r\n    position: absolute;\r\n}\r\n\r\n\r\nhr {\r\n    width: 3%;\r\n    border: 2px solid #473326;\r\n}\r\n\r\n\r\n.carousel-img {\r\n    height: 60vh;\r\n}"

/***/ }),

/***/ "./src/app/pages/landing/landing.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/landing/landing.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-color\">\r\n    <div class=\"hero-section\">\r\n        <app-navigation></app-navigation>\r\n        <h1 class=\"text-white text-center\">A Holidaymaker's Dream</h1>\r\n    </div>\r\n</div>\r\n\r\n<div id=\"about\">\r\n    <h2 class=\"text-center font-weight-bold pt-5\">Who we are?</h2>\r\n\r\n    <div class=\"text-center\">\r\n        <h5 class=\"w-50 text-secondary font-weight-normal pt-4 mx-auto\">Looking for a summer sunshine or a cozy chill, we got you covered. \r\n            <p>With a wide range of holiday venues and fun events, you'd be sure to find what you need on our platform</p>\r\n            <p>Select from our packages below which have been grouped to suit your needs</p></h5>\r\n\r\n        <hr>\r\n    </div>\r\n</div>\r\n\r\n<div id=\"package\">\r\n    <h2 class=\"text-center font-weight-bold pt-5\">Our Packages</h2>\r\n\r\n    <div class=\"text-center\">\r\n        <div class=\"row my-5\">\r\n            <div class=\"col-md-6\">\r\n                <div id=\"summer\" (click)=\"onPackageSelected($event)\" class=\"card bg-package-1 box-shadow ml-auto\" style=\"width: 20rem; cursor:pointer\">\r\n                    <!-- <img src=\"assets/img/summer.png\" alt=\"\" style=\"max-height: 260px\"> -->\r\n                    <h3 class=\"text-white\">Sunny Summer</h3>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6\">\r\n                <div id=\"winter\" (click)=\"onPackageSelected($event)\" class=\"card bg-package-2 box-shadow mr-auto\" style=\"width: 20rem; cursor:pointer\">\r\n                    <!-- <img src=\"assets/img/other.png\" alt=\"\" style=\"max-height: 260px\"> -->\r\n                    <h3 class=\"text-white\">Cozy Winter</h3>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <hr>\r\n    </div>\r\n</div>\r\n\r\n<div id=\"slide\" style=\"display: none\">\r\n        <h2 class=\"text-center font-weight-bold pt-5\">{{selectedPackage}}</h2>\r\n\r\n        <div *ngIf =\"loading\" class=\"text-center\">\r\n                <fa name=\"cog\" animation=\"spin\" size=\"4x\"></fa>\r\n                <p>loading...</p>\r\n        </div>\r\n\r\n        <div *ngIf =\"!loading\" class=\"col-md-12 my-5\">\r\n                <div class=\"card box-shadow mx-auto\" style=\"max-width: 42rem\">\r\n                    <!-- carousel -->\r\n                    <carousel>\r\n                        <slide *ngFor=\"let result of results; let index=index\">\r\n                            <img class=\"carousel-img\" [src]=\"result.urls['raw']\" alt=\"result.description\" style=\"display: block; width: 100%;\">\r\n                            <div class=\"carousel-caption d-none d-md-block\">\r\n                                <h3>{{result.description}}</h3>\r\n                                <p>Photography by: {{result.user['name']}}</p>\r\n                                <button class=\"btn btn-primary\" (click)=\"purchasePackage()\">Buy Package</button>\r\n                            </div>\r\n                        </slide>\r\n                    </carousel>\r\n                </div>\r\n        </div>\r\n\r\n        <div class=\"text-center mb-5\">\r\n            <button type=\"button\" class=\"btn btn-primary mb-3\" (click)=\"backToPackages()\">\r\n                Back to Packages\r\n            </button>\r\n        </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/landing/landing.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/landing/landing.component.ts ***!
  \****************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared-service/shared.service */ "./src/app/shared-service/shared.service.ts");
/* harmony import */ var _models_picture_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/picture-request */ "./src/app/pages/landing/models/picture-request.ts");
/* harmony import */ var src_app_utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils/constants */ "./src/app/utils/constants.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/fesm5/ngx-alerts.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LandingComponent = /** @class */ (function () {
    function LandingComponent(service, alert) {
        this.service = service;
        this.alert = alert;
        this.pictureRequest = new _models_picture_request__WEBPACK_IMPORTED_MODULE_2__["PictureRequest"](src_app_utils_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].SUMMER_IMAGES, src_app_utils_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].DEFAULT_PAGE);
        this.results = [];
        this.selectedPackage = "";
        this.loading = false;
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent.prototype.getPictures = function () {
        var _this = this;
        this.loading = true;
        this.service.getPictures(this.pictureRequest).subscribe(function (response) {
            _this.loading = false;
            console.log(response);
            if (Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(response) || Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(response.body)) {
                _this.alert.danger("Sorry, no response was received.");
                _this.toggleSlide('slide', 'package');
                return;
            }
            if (response.status != src_app_utils_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].RESPONSE_STATUS_200) {
                if (response.body.errors) {
                    var err = response.body.errors;
                    var msg_1;
                    err.forEach(function (element) {
                        msg_1 = element + "\n";
                    });
                    _this.alert.danger(msg_1);
                    _this.toggleSlide('slide', 'package');
                }
                else {
                    _this.toggleSlide('slide', 'package');
                    _this.alert.danger("An error occurred in the service. Please contact admin.");
                }
                return;
            }
            _this.results = response.body.results;
        }, function (error) {
            _this.loading = false;
            _this.alert.danger("An error occurred while retrieving images, please retry");
            _this.toggleSlide('slide', 'package');
            console.log(error);
        });
    };
    // Handle package selection, set search parameter based on current selection
    LandingComponent.prototype.onPackageSelected = function (e) {
        this.results = [];
        var id = e.currentTarget.id;
        if (id == "summer") {
            this.selectedPackage = "Sunny Summer";
            this.pictureRequest.searchParam = src_app_utils_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].SUMMER_IMAGES;
        }
        else {
            this.selectedPackage = "Cozy Winter";
            this.pictureRequest.searchParam = src_app_utils_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].WINTER_IMAGES;
        }
        this.toggleSlide('package', 'slide');
        this.getPictures();
    };
    LandingComponent.prototype.toggleSlide = function (first, second) {
        var x = document.getElementById('package');
        var y = document.getElementById('slide');
        if (x.style.display === "none") {
            x.style.display = "block";
        }
        else {
            x.style.display = "none";
        }
        if (y.style.display === "none") {
            y.style.display = "block";
        }
        else {
            y.style.display = "none";
        }
    };
    LandingComponent.prototype.backToPackages = function () {
        this.toggleSlide('slide', 'package');
    };
    LandingComponent.prototype.purchasePackage = function () {
        this.toggleSlide('slide', 'package');
        this.alert.success("Successfully Purchased Package! Enjoy your Vacation");
    };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/pages/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/pages/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_shared_service_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"], ngx_alerts__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/pages/landing/models/picture-request.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/landing/models/picture-request.ts ***!
  \*********************************************************/
/*! exports provided: PictureRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PictureRequest", function() { return PictureRequest; });
var PictureRequest = /** @class */ (function () {
    function PictureRequest(searchParam, pageNumber) {
        this.searchParam = searchParam;
        this.pageNumber = pageNumber;
    }
    return PictureRequest;
}());



/***/ }),

/***/ "./src/app/pages/navigation/navigation.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/navigation/navigation.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/navigation/navigation.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/navigation/navigation.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\r\n    navigation works!\r\n</p> -->\r\n\r\n<div class=\"container-fluid\">\r\n    <nav class=\"navbar navbar-expand-lg navbar-light\">\r\n        <img src=\"assets/img/CozyVille.png\" alt=\"CozyVille Logo\" style=\"max-width: 180px\" class=\"img-fluid\">\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n            <ul class=\"navbar-nav ml-auto\">\r\n                <li class=\"nav-item active\">\r\n                    <a href=\"#\" class=\"nav-link text-white\">About <span class=\"sr-only\">(current)</span></a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a href=\"#\" class=\"nav-link text-white\">Packages</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/navigation/navigation.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/navigation/navigation.component.ts ***!
  \**********************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/pages/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/pages/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/shared-service/shared.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared-service/shared.service.ts ***!
  \**************************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/fesm5/ngx-alerts.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/constants */ "./src/app/utils/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SharedService = /** @class */ (function () {
    function SharedService(httpClient, alert) {
        this.httpClient = httpClient;
        this.alert = alert;
    }
    /**
     * Construct a GET request which interprets the body as JSON and returns the full response.
     *
     * @return an `Observable` of the `HttpResponse` for the request, with a body type of `Object`.
     */
    SharedService.prototype.get = function (url, options) {
        console.info("Making authenticated GET call to " + url);
        return this.httpClient.get(url, {
            headers: Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(options) ? this.getHeader() : (Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(options.headers) ? this.getHeader() : options.headers),
            observe: Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(options) ? "response" : (Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(options.observe) ? "response" : options.observe),
            params: this.updateParams(options)
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.logError));
    };
    SharedService.prototype.getHeader = function (contentType) {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set("Content-Type", Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(contentType) ? "application/json" : contentType)
            .set("Accept-Version", Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(contentType) ? "v1" : contentType)
            .set("Authorization", Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(contentType) ? "Client-ID " + _utils_constants__WEBPACK_IMPORTED_MODULE_7__["Constants"].CLIENT_ID : contentType);
    };
    SharedService.prototype.updateParams = function (options) {
        var param;
        if (Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(options) || Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(options.params)) {
            param = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        }
        else {
            param = options.params;
        }
        //param = param.set("t", Date.now().toString());
        return param;
    };
    SharedService.prototype.logError = function (error) {
        var errorMessage = "";
        try {
            if (error.status === 401) {
                errorMessage = "An unauthorized request has been detected, please use the 'get inspired button' to allow this application to retrieve instagram feeds";
                console.log(errorMessage);
                setTimeout(function () {
                    var a = document.createElement("A");
                    var windowOrigin = window.location.origin;
                    a.href = windowOrigin + (windowOrigin.indexOf("localhost") > -1 ? "/home" : "/home");
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                }, 2500);
            }
            else {
                console.error(JSON.stringify(error));
                errorMessage = "There was an issue processing your request, please try again";
            }
        }
        catch (err) {
            errorMessage = err.message;
        }
        console.error(errorMessage);
        if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(this.alert)) {
            this.alert.warning(errorMessage);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(error);
    };
    SharedService.prototype.getPictures = function (pictureRequest) {
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].imageSearchBaseURL.concat("?").concat("page=").concat(pictureRequest.pageNumber)
            .concat("&").concat("query=").concat(pictureRequest.searchParam);
        return this.get(url);
    };
    SharedService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_alerts__WEBPACK_IMPORTED_MODULE_6__["AlertService"]])
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/utils/constants.ts":
/*!************************************!*\
  !*** ./src/app/utils/constants.ts ***!
  \************************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.CLIENT_ID = "d6a2906c49a5b35910aaa2a003f88720a3ec34aca75d3cb970f5fb2a4baa8927";
    Constants.SUMMER_IMAGES = "summer-holiday";
    Constants.WINTER_IMAGES = "winter-holiday";
    Constants.DEFAULT_PAGE = "1";
    Constants.RESPONSE_STATUS_200 = 200;
    return Constants;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    imageSearchBaseURL: 'https://api.unsplash.com/search/photos/'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Dev\dCodes\js\cozyville\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map