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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-top-menu></app-top-menu>\n<app-article></app-article>\n<app-comments></app-comments>"

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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./article/article.component */ "./src/app/article/article.component.ts");
/* harmony import */ var _top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./top-menu/top-menu.component */ "./src/app/top-menu/top-menu.component.ts");
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comments/comments.component */ "./src/app/comments/comments.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _article_article_component__WEBPACK_IMPORTED_MODULE_4__["ArticleComponent"],
                _top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_5__["TopMenuComponent"],
                _comments_comments_component__WEBPACK_IMPORTED_MODULE_6__["CommentsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/article/article.component.css":
/*!***********************************************!*\
  !*** ./src/app/article/article.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-container{\r\n    height: auto;\r\n    background-color:white;\r\n    margin:0 auto;\r\n}\r\n\r\nbody{\r\n    width:100%;\r\n    font-family: verdana;\r\n    margin:0px;\r\n    background-color:whitesmoke!important;\r\n}\r\n\r\n.article_image{\r\n    display: inline-block;\r\n    margin-right: 20px;\r\n}\r\n\r\n.left-content{\r\n    display: inline-block;\r\n}\r\n\r\n.article{\r\n    display: flex;\r\n    padding:10px;\r\n    margin-bottom: 20px;\r\n    font-size:13px;\r\n    min-height: 500px;\r\n}\r\n\r\n.article_bottom{\r\n    font-size:10px;\r\n}\r\n\r\n.tags{\r\n    /* display: flex; */\r\n    margin-top: 50px;\r\n}\r\n\r\n.tag{\r\n    border:1px solid lightblue;\r\n    padding:2px 2px 2px 2px;\r\n    margin-left:15px;\r\n    display:inline-block;\r\n    width:auto;\r\n    height:30px;\r\n    cursor:pointer;\r\n}\r\n\r\n.tag:hover{\r\n    background-color:lightblue;\r\n}\r\n\r\n.article_body{\r\n    padding:0px;\r\n}\r\n\r\n.nav-ul{\r\n    display:flex;\r\n}\r\n\r\n.article_time{\r\n    color:#656565;\r\n    margin-left:0px;\r\n}\r\n\r\n.article_info{\r\n    font-size:10px;\r\n    color:#ffb380;\r\n    font-weight: 600;\r\n    display: inline-block;\r\n    margin-left:14px;\r\n}\r\n\r\n.article_title{\r\n    display: inline-block;\r\n    text-decoration:none;\r\n    padding:0px;\r\n    margin-bottom:10px;\r\n}\r\n\r\n.link_to_article{\r\n    text-decoration:none;\r\n    color:#4286f4;\r\n\r\n}\r\n\r\n.article_summary_text{\r\n    margin:0px;\r\n    font-weight: 200;\r\n    font-size: 16px;\r\n\r\n}\r\n\r\n.article_summary{\r\n    height: 80px;\r\n}\r\n\r\n.article_info_bottom{\r\n    font-size:10px;\r\n    font-weight: 600;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxzQ0FBc0M7Q0FDekM7O0FBR0Q7SUFDSSxzQkFBc0I7SUFDdEIsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksc0JBQXNCO0NBQ3pCOztBQUVEO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGtCQUFrQjtDQUNyQjs7QUFDRDtJQUNJLGVBQWU7Q0FDbEI7O0FBS0Q7SUFDSSxvQkFBb0I7SUFDcEIsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksMkJBQTJCO0lBQzNCLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtDQUNsQjs7QUFFRDtJQUNJLDJCQUEyQjtDQUM5Qjs7QUFFRDtJQUNJLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLGFBQWE7Q0FDaEI7O0FBS0Q7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0NBQ25COztBQUlEO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLG1CQUFtQjtDQUN0Qjs7QUFHRDtJQUNJLHFCQUFxQjtJQUNyQixjQUFjOztDQUVqQjs7QUFFRDtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZ0JBQWdCOztDQUVuQjs7QUFFRDtJQUNJLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1jb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gICAgbWFyZ2luOjAgYXV0bztcclxufVxyXG5cclxuYm9keXtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBmb250LWZhbWlseTogdmVyZGFuYTtcclxuICAgIG1hcmdpbjowcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlc21va2UhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmFydGljbGVfaW1hZ2V7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5sZWZ0LWNvbnRlbnR7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5hcnRpY2xle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6MTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBmb250LXNpemU6MTNweDtcclxuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG59XHJcbi5hcnRpY2xlX2JvdHRvbXtcclxuICAgIGZvbnQtc2l6ZToxMHB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4udGFnc3tcclxuICAgIC8qIGRpc3BsYXk6IGZsZXg7ICovXHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG4udGFne1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCBsaWdodGJsdWU7XHJcbiAgICBwYWRkaW5nOjJweCAycHggMnB4IDJweDtcclxuICAgIG1hcmdpbi1sZWZ0OjE1cHg7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOmF1dG87XHJcbiAgICBoZWlnaHQ6MzBweDtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcblxyXG4udGFnOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpsaWdodGJsdWU7XHJcbn1cclxuXHJcbi5hcnRpY2xlX2JvZHl7XHJcbiAgICBwYWRkaW5nOjBweDtcclxufVxyXG5cclxuLm5hdi11bHtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLmFydGljbGVfdGltZXtcclxuICAgIGNvbG9yOiM2NTY1NjU7XHJcbiAgICBtYXJnaW4tbGVmdDowcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLmFydGljbGVfaW5mb3tcclxuICAgIGZvbnQtc2l6ZToxMHB4O1xyXG4gICAgY29sb3I6I2ZmYjM4MDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDoxNHB4O1xyXG59XHJcblxyXG4uYXJ0aWNsZV90aXRsZXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gICAgcGFkZGluZzowcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbn1cclxuXHJcblxyXG4ubGlua190b19hcnRpY2xle1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICBjb2xvcjojNDI4NmY0O1xyXG5cclxufVxyXG5cclxuLmFydGljbGVfc3VtbWFyeV90ZXh0e1xyXG4gICAgbWFyZ2luOjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcblxyXG59XHJcblxyXG4uYXJ0aWNsZV9zdW1tYXJ5e1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG59XHJcblxyXG4uYXJ0aWNsZV9pbmZvX2JvdHRvbXtcclxuICAgIGZvbnQtc2l6ZToxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/article/article.component.html":
/*!************************************************!*\
  !*** ./src/app/article/article.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-container col-md-8 col-sm-12\">\n  <div class=\"article_content\">\n      <h3 style='padding:10px;'>\n          Mbledhja e qeverive Kosovë-Shqipëri, do të diskutohet për bashkëpunimin ndërkufitar\n      </h3>\n      <img src=\"https://telegrafi.com/wp-content/uploads/2018/08/Ditmir-Bushati-foto-ridvan-slivova-01-780x439.jpg\" alt=\"\" width=\"100%\" height=\"auto\">\n      <div class=\"article_body\">\n          <p>Në kuadër të programit të bashkëpunimit ndërkufitar Shqipëri- Kosovë, financuar nga Bashkimi Evropian, ministri për Evropën dhe Punët e Jashtme i Shqipërisë, Ditmir Bushati deklaroi se së shpejti do të zhvillohet takimi i radhës mes dy qeverive.</p>\n          <p>“Në pak javë në do të kemi takimin e radhës mes qeverisë së Kosovës dhe Shqipërisë, që do të mbahet në Pejë, ku temë e diskutimit do të jetë edhe nevoja për lehtësimin e mëtejshëm për sa i përket bashkëpunimit ndërkufitar, për të krijuar më shumë lehtësi në këtë drejtim”, u shpreh Bushati, raporton ATA.</p>\n          <p>Në përgjigje të zërave në Ballkan, të cilat ministri i cilësoi nacionaliste, ai tha se “ndërkohë që në Ballkan vijon të flitet për teza nacionaliste, ne shqiptarët është mirë që të fokusohemi në çështje sa më konkrete, të cilat ndikojnë jetën e qytetarëve”.</p>\n          <p>Sipas ministrit, përmes programeve të bashkëpunimit ndërkufitar, falë ndihmës së BE-së, krijohet një mundësi dhe ndërlidhje jo thjesht mes dy zonave të ndryshme të Shqipërisë dhe Kosovës, por mbi të gjitha mes popullatave që jetojnë në këto zona e krahina, të cilat në rastin e Shqipërisë dhe Kosovës, ka një specifikë të veçantë, sepse, sipas tij, në fund të ditës jemi një komb dhe flasim një gjuhë.</p>\n          <p>Tri programet e financuara nga BE-ja janë: pika doganore Shishtavec-Krushevë, mbrojtja mjedisore dhe menaxhimi i mbetjeve, si dhe programi i shtrirjes së vijës Dinarika, që ka të bëjë me rajonin ndërkufitar Shqipëri-Kosovë.</p>\n        \n          <div class=\"tags\">\n              <span><b> Shiko me shume lajme rreth: </b></span><br>\n              <a href=\"index.html?tag=Dimitri Bushati\"> <div class=\"tag\">Ditmir Bushati</div></a>\n              <a href=\"index.html?tag=Kosovë\"> <div class=\"tag\">Kosovë</div></a>\n              <a href=\"index.html?tag=Shqipëri\"> <div class=\"tag\">Shqipëri</div></a>\n          </div>                                       \n      </div>\n  </div>\n  \n</div>"

/***/ }),

/***/ "./src/app/article/article.component.ts":
/*!**********************************************!*\
  !*** ./src/app/article/article.component.ts ***!
  \**********************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
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

var ArticleComponent = /** @class */ (function () {
    function ArticleComponent() {
    }
    ArticleComponent.prototype.ngOnInit = function () {
    };
    ArticleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article',
            template: __webpack_require__(/*! ./article.component.html */ "./src/app/article/article.component.html"),
            styles: [__webpack_require__(/*! ./article.component.css */ "./src/app/article/article.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArticleComponent);
    return ArticleComponent;
}());



/***/ }),

/***/ "./src/app/comments/comments.component.css":
/*!*************************************************!*\
  !*** ./src/app/comments/comments.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#comments-container{\r\n    /* border:1px solid black; */\r\n    height:auto;\r\n    margin:0px auto;\r\n    font-family: verdana;\r\n    font-size:13px;\r\n    \r\n  }\r\n  :host ::ng-deep .main{\r\n    border-top:1px solid whitesmoke;\r\n    padding-top:10px;\r\n    padding-left:10px;\r\n    width:100%;\r\n    height:auto;\r\n    position: relative;\r\n    overflow: hidden;\r\n    display: inline-block;\r\n    margin-bottom:15px;\r\n    background-color: white;\r\n    box-shadow:-1px 1px 3px #d1cbcb;\r\n  }\r\n  :host ::ng-deep .child{\r\n    width:100%;\r\n    padding-left:10px;\r\n    padding-bottom:0px;\r\n    margin-bottom:0px;\r\n    /* border-left:3px solid; */\r\n    position: relative;\r\n    overflow: hidden;\r\n    display: inline-block;\r\n    margin-top:1px;\r\n      \r\n  }\r\n  .main:hover,.child:hover{\r\n    /*border-left:1px solid green;*/\r\n  }\r\n  :host ::ng-deep .parent-0{\r\n    padding:10px !important;\r\n  }\r\n  :host ::ng-deep .like_btn{\r\n    margin-left:5px;\r\n    margin-right:5px;\r\n  \r\n  }\r\n  :host ::ng-deep .buttons_below{\r\n    /* border-bottom:1px solid #d4d4d4; */\r\n    background-color: whitesmoke;\r\n    margin-left:-10px;\r\n  }\r\n  :host ::ng-deep .collapse_btn, .expand_btn{\r\n      margin-left:5px;\r\n  }\r\n  :host ::ng-deep .expand_btn{\r\n      display:none;\r\n  }\r\n  :host ::ng-deep a{\r\n    text-decoration: none;\r\n    font-size:14px;\r\n    color:black;\r\n  }\r\n  :host ::ng-deep body{\r\n    font-family: helvetica; \r\n  }\r\n  :host ::ng-deep .profile-picture{\r\n    float:left;\r\n    height:100px;\r\n    width:100px;\r\n    display: flex;\r\n    overflow:hidden;\r\n  }\r\n  :host ::ng-deep .user_name{\r\n    vertical-align: top;\r\n    padding-bottom:10px;\r\n    font-family: verdana;\r\n    font-size:12px;\r\n  }\r\n  :host ::ng-deep .comment_body{\r\n    /* margin-left:35px; */\r\n    display: block;\r\n    margin-top:9px;\r\n    padding-bottom: 10px;\r\n  }\r\n  :host ::ng-deep button{\r\n    background-color:whitesmoke;\r\n    color:#4286f4;\r\n    border:0px;\r\n    cursor: pointer;\r\n    font-family: verdana;\r\n    font-size:9px;\r\n    font-weight: 800;\r\n    padding-bottom: 3px;\r\n  }\r\n  :host ::ng-deep .buttons_container{\r\n    width:500px;\r\n    font-size: 10px;\r\n  }\r\n  :host ::ng-deep .comment-content{\r\n    padding:0px;\r\n  }\r\n  :host ::ng-deep .likes_value{\r\n    font-family: verdana;\r\n    font-size:10px;\r\n    color:#ffb380;\r\n    margin-left:10px;\r\n    font-weight: 700;\r\n  \r\n  }\r\n  :host ::ng-deep .comment_time{\r\n    font-family: verdana;\r\n    font-size:10px;\r\n    color:darkgray;\r\n    font-weight: 700;\r\n    margin-left:10px;\r\n  }\r\n  :host ::ng-deep .comments_value{\r\n    font-family: verdana;\r\n    font-size:10px;\r\n    color:#ffb380;\r\n    margin-left:15px;\r\n    font-weight: 700;\r\n  }\r\n  :host ::ng-deep #form{\r\n    margin-bottom: 30px;\r\n  }\r\n  :host ::ng-deep .submit-btn{\r\n    width:80px;\r\n    height:30px;\r\n    background-color:white;\r\n    float: right;\r\n    margin-right: 123px;\r\n  }\r\n  :host ::ng-deep .reply_textarea{\r\n    display: none;\r\n  }\r\n  :host ::ng-deep .reply_button{\r\n    width:50px;\r\n    background-color:white;\r\n    color:black;\r\n    height:20px;\r\n  }\r\n  \r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbWVudHMvY29tbWVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixlQUFlOztHQUVoQjtFQUNEO0lBQ0UsZ0NBQWdDO0lBQ2hDLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLGdDQUFnQztHQUNqQztFQUNEO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixlQUFlOztHQUVoQjtFQUNEO0lBQ0UsZ0NBQWdDO0dBQ2pDO0VBRUQ7SUFDRSx3QkFBd0I7R0FDekI7RUFFRDtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7O0dBRWxCO0VBQ0Q7SUFDRSxzQ0FBc0M7SUFDdEMsNkJBQTZCO0lBQzdCLGtCQUFrQjtHQUNuQjtFQUNEO01BQ0ksZ0JBQWdCO0dBQ25CO0VBRUQ7TUFDSSxhQUFhO0dBQ2hCO0VBQ0Q7SUFDRSxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLFlBQVk7R0FDYjtFQUNEO0lBQ0UsdUJBQXVCO0dBQ3hCO0VBQ0Q7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLFlBQVk7SUFDWixjQUFjO0lBQ2QsZ0JBQWdCO0dBQ2pCO0VBRUQ7SUFDRSxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixlQUFlO0dBQ2hCO0VBQ0Q7SUFDRSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGVBQWU7SUFDZixxQkFBcUI7R0FDdEI7RUFFRDtJQUNFLDRCQUE0QjtJQUM1QixjQUFjO0lBQ2QsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixvQkFBb0I7R0FDckI7RUFFRDtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7R0FDakI7RUFFRDtJQUNFLFlBQVk7R0FDYjtFQUdEO0lBQ0UscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGlCQUFpQjs7R0FFbEI7RUFFRDtJQUNFLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUI7R0FDbEI7RUFFRDtJQUNFLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixpQkFBaUI7R0FDbEI7RUFFRDtJQUNFLG9CQUFvQjtHQUNyQjtFQUVEO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLG9CQUFvQjtHQUNyQjtFQUVEO0lBQ0UsY0FBYztHQUNmO0VBRUQ7SUFDRSxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixZQUFZO0dBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21tZW50cy9jb21tZW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbW1lbnRzLWNvbnRhaW5lcntcclxuICAgIC8qIGJvcmRlcjoxcHggc29saWQgYmxhY2s7ICovXHJcbiAgICBoZWlnaHQ6YXV0bztcclxuICAgIG1hcmdpbjowcHggYXV0bztcclxuICAgIGZvbnQtZmFtaWx5OiB2ZXJkYW5hO1xyXG4gICAgZm9udC1zaXplOjEzcHg7XHJcbiAgICBcclxuICB9XHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5tYWlue1xyXG4gICAgYm9yZGVyLXRvcDoxcHggc29saWQgd2hpdGVzbW9rZTtcclxuICAgIHBhZGRpbmctdG9wOjEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MTBweDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6YXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOjE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6LTFweCAxcHggM3B4ICNkMWNiY2I7XHJcbiAgfVxyXG4gIDpob3N0IDo6bmctZGVlcCAuY2hpbGR7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OjEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTowcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjBweDtcclxuICAgIC8qIGJvcmRlci1sZWZ0OjNweCBzb2xpZDsgKi9cclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOjFweDtcclxuICAgICAgXHJcbiAgfVxyXG4gIC5tYWluOmhvdmVyLC5jaGlsZDpob3ZlcntcclxuICAgIC8qYm9yZGVyLWxlZnQ6MXB4IHNvbGlkIGdyZWVuOyovXHJcbiAgfVxyXG4gIFxyXG4gIDpob3N0IDo6bmctZGVlcCAucGFyZW50LTB7XHJcbiAgICBwYWRkaW5nOjEwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5saWtlX2J0bntcclxuICAgIG1hcmdpbi1sZWZ0OjVweDtcclxuICAgIG1hcmdpbi1yaWdodDo1cHg7XHJcbiAgXHJcbiAgfVxyXG4gIDpob3N0IDo6bmctZGVlcCAuYnV0dG9uc19iZWxvd3tcclxuICAgIC8qIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNkNGQ0ZDQ7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgbWFyZ2luLWxlZnQ6LTEwcHg7XHJcbiAgfVxyXG4gIDpob3N0IDo6bmctZGVlcCAuY29sbGFwc2VfYnRuLCAuZXhwYW5kX2J0bntcclxuICAgICAgbWFyZ2luLWxlZnQ6NXB4O1xyXG4gIH1cclxuICBcclxuICA6aG9zdCA6Om5nLWRlZXAgLmV4cGFuZF9idG57XHJcbiAgICAgIGRpc3BsYXk6bm9uZTtcclxuICB9XHJcbiAgOmhvc3QgOjpuZy1kZWVwIGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6MTRweDtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gIH1cclxuICA6aG9zdCA6Om5nLWRlZXAgYm9keXtcclxuICAgIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2E7IFxyXG4gIH1cclxuICA6aG9zdCA6Om5nLWRlZXAgLnByb2ZpbGUtcGljdHVyZXtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICBoZWlnaHQ6MTAwcHg7XHJcbiAgICB3aWR0aDoxMDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgfVxyXG4gIFxyXG4gIDpob3N0IDo6bmctZGVlcCAudXNlcl9uYW1le1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIHBhZGRpbmctYm90dG9tOjEwcHg7XHJcbiAgICBmb250LWZhbWlseTogdmVyZGFuYTtcclxuICAgIGZvbnQtc2l6ZToxMnB4O1xyXG4gIH1cclxuICA6aG9zdCA6Om5nLWRlZXAgLmNvbW1lbnRfYm9keXtcclxuICAgIC8qIG1hcmdpbi1sZWZ0OjM1cHg7ICovXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6OXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIDpob3N0IDo6bmctZGVlcCBidXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlc21va2U7XHJcbiAgICBjb2xvcjojNDI4NmY0O1xyXG4gICAgYm9yZGVyOjBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiB2ZXJkYW5hO1xyXG4gICAgZm9udC1zaXplOjlweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xyXG4gIH1cclxuICBcclxuICA6aG9zdCA6Om5nLWRlZXAgLmJ1dHRvbnNfY29udGFpbmVye1xyXG4gICAgd2lkdGg6NTAwcHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIDpob3N0IDo6bmctZGVlcCAuY29tbWVudC1jb250ZW50e1xyXG4gICAgcGFkZGluZzowcHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIDpob3N0IDo6bmctZGVlcCAubGlrZXNfdmFsdWV7XHJcbiAgICBmb250LWZhbWlseTogdmVyZGFuYTtcclxuICAgIGZvbnQtc2l6ZToxMHB4O1xyXG4gICAgY29sb3I6I2ZmYjM4MDtcclxuICAgIG1hcmdpbi1sZWZ0OjEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIFxyXG4gIH1cclxuICBcclxuICA6aG9zdCA6Om5nLWRlZXAgLmNvbW1lbnRfdGltZXtcclxuICAgIGZvbnQtZmFtaWx5OiB2ZXJkYW5hO1xyXG4gICAgZm9udC1zaXplOjEwcHg7XHJcbiAgICBjb2xvcjpkYXJrZ3JheTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tbGVmdDoxMHB4O1xyXG4gIH1cclxuICBcclxuICA6aG9zdCA6Om5nLWRlZXAgLmNvbW1lbnRzX3ZhbHVle1xyXG4gICAgZm9udC1mYW1pbHk6IHZlcmRhbmE7XHJcbiAgICBmb250LXNpemU6MTBweDtcclxuICAgIGNvbG9yOiNmZmIzODA7XHJcbiAgICBtYXJnaW4tbGVmdDoxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcbiAgXHJcbiAgOmhvc3QgOjpuZy1kZWVwICNmb3Jte1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICB9XHJcbiAgXHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5zdWJtaXQtYnRue1xyXG4gICAgd2lkdGg6ODBweDtcclxuICAgIGhlaWdodDozMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogMTIzcHg7XHJcbiAgfVxyXG4gIFxyXG4gIDpob3N0IDo6bmctZGVlcCAucmVwbHlfdGV4dGFyZWF7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICA6aG9zdCA6Om5nLWRlZXAgLnJlcGx5X2J1dHRvbntcclxuICAgIHdpZHRoOjUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBoZWlnaHQ6MjBweDtcclxuICB9XHJcbiAgXHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/comments/comments.component.html":
/*!**************************************************!*\
  !*** ./src/app/comments/comments.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id='comments-container' class='col-md-8 col-sm-12 mt-5'> \n  <h5>Shto nje koment te ri</h5>\n  <div id='form'>\n      <form action=\"\" method=\"POST\">\n          <textarea name=\"comment\" class='col-md-8 col-sm-12' id=\"write_comment_textarea\" cols=\"100\" rows=\"5\" resizeable='false'></textarea>\n          <br>\n          <input type=\"submit\"  value=\"Submit\" class='btn btn-primary'/>\n      </form>\n  </div>\n  <h3>Diskutimet:</h3>\n  \n</div>"

/***/ }),

/***/ "./src/app/comments/comments.component.ts":
/*!************************************************!*\
  !*** ./src/app/comments/comments.component.ts ***!
  \************************************************/
/*! exports provided: CommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
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

var CommentsComponent = /** @class */ (function () {
    function CommentsComponent() {
        this.comments = [
            {
                "comment_id": 20,
                "comment_body": "First main comment",
                "parent": 0,
                "depth": 0,
                "user": "User 1",
                "likes": 30,
                "comments": 8
            },
            {
                "comment_id": 21,
                "comment_body": "I think its hilarious u kids talking shit about semphis. U wouldnt say this shit to him at LAN, hes jacked. Not only that but he wears the freshest clothes, eats at the chillest restaurants anddddddd hangs out with the hottest dudes. Yall are pathetic lol",
                "parent": 20,
                "depth": 1,
                "user": "User 2",
                "likes": 30,
                "comments": 8
            },
            {
                "comment_id": 22,
                "comment_body": "reply to comment number",
                "parent": 21,
                "depth": 2,
                "user": "User 1",
                "likes": 30,
                "comments": 8
            },
            {
                "comment_id": 23,
                "comment_body": "Another reply to comment number",
                "parent": 21,
                "depth": 2,
                "user": "User 4",
                "likes": 30,
                "comments": 8
            },
            {
                "comment_id": 24,
                "comment_body": "Reply to some comment",
                "parent": 22,
                "depth": 3,
                "user": "User 5",
                "likes": 30,
                "comments": 8
            },
            {
                "comment_id": 25,
                "comment_body": "Second main comment",
                "parent": 0,
                "depth": 0,
                "user": "User 1",
                "likes": 30,
                "comments": 8
            },
            {
                "comment_id": 26,
                "comment_body": "Reply to Second main comment",
                "parent": 25,
                "depth": 1,
                "user": "User 8",
                "likes": 30,
                "comments": 8
            },
            {
                "comment_id": 27,
                "comment_body": "Reply to Second main comment",
                "parent": 25,
                "depth": 1,
                "user": "User 8",
                "likes": 30,
                "comments": 8
            },
            {
                "comment_id": 28,
                "comment_body": "Third main comment",
                "parent": 0,
                "depth": 0,
                "user": "User 1",
                "likes": 30,
                "comments": 8
            },
            {
                "comment_id": 29,
                "comment_body": "Reply to some comment",
                "parent": 24,
                "depth": 4,
                "user": "User 6",
                "likes": 30,
                "comments": 8
            },
            {
                "comment_id": 30,
                "comment_body": "Reply to some comment",
                "parent": 29,
                "depth": 5,
                "user": "User 7",
                "likes": 30,
                "comments": 8
            }
        ];
    }
    CommentsComponent.prototype.ngAfterViewInit = function () {
        this.loadComments();
    };
    CommentsComponent.prototype.ngOnInit = function () {
    };
    CommentsComponent.prototype.loadComments = function () {
        var _this = this;
        console.log('comments container', document.getElementById('comments-container'));
        this.comments.forEach(function ($e) {
            if ($e.parent == 0) {
                document.getElementById('comments-container').insertAdjacentHTML('beforeend', _this.appendComment($e, 'main'));
            }
            else {
                document.getElementById('c-' + $e.parent).insertAdjacentHTML('beforeend', _this.appendComment($e, 'child'));
            }
        });
    };
    CommentsComponent.prototype.appendComment = function (e, type) {
        // $color=getColor(e.depth);
        var finalString = '';
        var comment_content = '<span class="comment_body">' + e.comment_body + '</span>';
        comment_content += "<div class='buttons_below'>" + this.appendButtons(e) + "</div>";
        finalString += '<div class="' + type + ' parent-' + e.parent + '"  style="border-left:1px solid #e0e0e0" id="c-' + e.comment_id + '">';
        finalString += '<span class="user_name">' + e.user + '</span>';
        finalString += '<span class="comment_time">(30 minutes ago)</span>';
        finalString += '<span class="likes_value">' + e.likes + ' Likes</span>';
        finalString += '<span class="comments_value">' + e.comments + ' Replies</span>';
        finalString += comment_content;
        finalString += '</div>';
        return finalString;
    };
    CommentsComponent.prototype.appendButtons = function (e) {
        var finalString = '';
        finalString = '<div id="buttons_' + e.comment_id + '" class="buttons_container">';
        finalString += "<button href='#' class='like_btn' onClick='likeComment(" + e.comment_id + ")'>Like</button>";
        finalString += "<button href='#' class='like_btn' onClick='unLikeComment(" + e.comment_id + ")'>Un-Like </button>";
        finalString += "<button href='#' class='comment_btn' onClick='showTextArea(" + e.comment_id + ")'>Reply</button>";
        finalString += "<button id='collapse_btn_" + e.comment_id + "' class='collapse_btn' onClick='collapseComment(" + e.comment_id + ")'>Collapse <img src='/assets/images/up-arrow.svg' width='10px' height='10px'/></button>";
        finalString += "<button id='expand_btn_" + e.comment_id + "' class='expand_btn' onClick='expandComment(" + e.comment_id + ")'>Expand <img src='/assets/images/down-arrow.svg' width='10px' height='10px'/></button>";
        finalString += '</div>';
        finalString += "<div class='reply_textarea' id='textarea-" + e.comment_id + "'>";
        finalString += "<form method='POST' action='/comment/reply'>";
        finalString += "<input type='hidden' name='comment_id' value='" + e.comment_id + "'/>";
        finalString += "<textarea placeholder='reply to comment' cols='80' name='comment_body' rows='4'></textarea>";
        finalString += "<input type='submit' class='reply_button' value='Reply'/>";
        finalString += "<button type='button' class='reply_button' onClick='cancelReply(" + e.comment_id + ")'>cancel</button>";
        finalString += "</form>";
        finalString += "</div>";
        return finalString;
    };
    CommentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comments',
            template: __webpack_require__(/*! ./comments.component.html */ "./src/app/comments/comments.component.html"),
            styles: [__webpack_require__(/*! ./comments.component.css */ "./src/app/comments/comments.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CommentsComponent);
    return CommentsComponent;
}());



/***/ }),

/***/ "./src/app/top-menu/top-menu.component.css":
/*!*************************************************!*\
  !*** ./src/app/top-menu/top-menu.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.nav{\r\n    height:40px;\r\n    background-color:white;\r\n    margin:0px auto;\r\n    font-family:Tahoma;\r\n}\r\n\r\n.navbar_besi{\r\n    background-color:lightblue;\r\n}\r\n\r\n.nav-item-besi{\r\n    height: 50px;\r\n    padding-top:-70px !important;\r\n}\r\n\r\n.nav-item-besi:hover{\r\n    background-color:white;\r\n}\r\n\r\n.nav-ul{\r\n    display:flex;\r\n}\r\n\r\n.nav-item{\r\n    padding-right: 20px;\r\n    padding-top:12px;\r\n    padding-bottom:12px;\r\n    padding:12px 20px 12px 20px;\r\n    list-style-type:none;\r\n    \r\n}\r\n\r\n.nav-item:hover{\r\n    background-color:lightblue;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wLW1lbnUvdG9wLW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSwyQkFBMkI7Q0FDOUI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0NBQ2hDOztBQUNEO0lBQ0ksdUJBQXVCO0NBQzFCOztBQUVEO0lBQ0ksYUFBYTtDQUNoQjs7QUFFRDtJQUNJLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLDRCQUE0QjtJQUM1QixxQkFBcUI7O0NBRXhCOztBQUNEO0lBQ0ksMkJBQTJCO0NBQzlCIiwiZmlsZSI6InNyYy9hcHAvdG9wLW1lbnUvdG9wLW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubmF2e1xyXG4gICAgaGVpZ2h0OjQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gICAgbWFyZ2luOjBweCBhdXRvO1xyXG4gICAgZm9udC1mYW1pbHk6VGFob21hO1xyXG59XHJcblxyXG4ubmF2YmFyX2Jlc2l7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0Ymx1ZTtcclxufVxyXG5cclxuLm5hdi1pdGVtLWJlc2l7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDotNzBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5uYXYtaXRlbS1iZXNpOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuLm5hdi11bHtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxufVxyXG5cclxuLm5hdi1pdGVte1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIHBhZGRpbmctdG9wOjEycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbToxMnB4O1xyXG4gICAgcGFkZGluZzoxMnB4IDIwcHggMTJweCAyMHB4O1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOm5vbmU7XHJcbiAgICBcclxufVxyXG4ubmF2LWl0ZW06aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0Ymx1ZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/top-menu/top-menu.component.html":
/*!**************************************************!*\
  !*** ./src/app/top-menu/top-menu.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"col-12 navbar sticky-top navbar-expand-lg navbar-light navbar_besi\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item active nav-item-besi\">\n              <a class=\"nav-link\" href=\"#\">Top Lajmet<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item nav-item-besi\">\n              <a class=\"nav-link\" href=\"#\">Te rejat<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item nav-item-besi\">\n              <a class=\"nav-link\" href=\"#\">Sport<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item nav-item-besi\">\n              <a class=\"nav-link\" href=\"#\">Interesante<span class=\"sr-only\">(current)</span></a>\n          </li>\n      </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/top-menu/top-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/top-menu/top-menu.component.ts ***!
  \************************************************/
/*! exports provided: TopMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopMenuComponent", function() { return TopMenuComponent; });
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

var TopMenuComponent = /** @class */ (function () {
    function TopMenuComponent() {
    }
    TopMenuComponent.prototype.ngOnInit = function () {
    };
    TopMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-top-menu',
            template: __webpack_require__(/*! ./top-menu.component.html */ "./src/app/top-menu/top-menu.component.html"),
            styles: [__webpack_require__(/*! ./top-menu.component.css */ "./src/app/top-menu/top-menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TopMenuComponent);
    return TopMenuComponent;
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Besi\Desktop\Gazeta\gazeta-front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map