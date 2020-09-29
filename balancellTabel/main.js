(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<app-toolbar></app-toolbar>\n<!-- <tabel></tabel> -->\n\n\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/battery-cards/battery-cards.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/battery-cards/battery-cards.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='grad'>\n\n    <!-- <input matInput class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"searchText\" autocomplete=\"off\" placeholder=\"Enter model\"> -->\n\n<mat-card>\n    <span *ngIf=\"!CustomSearchBool\">\n    <mat-label>Battery selection for a machine type</mat-label>\n    <br>\n    <br>\n\n    <mat-form-field >\n        <mat-label>Manufacturer</mat-label>\n        <mat-select [formControl]=\"Modelss\" [(ngModel)]=\"USER_MAN\">\n\n    \n        <mat-option (onSelectionChange)=\"changeMan($event)\" *ngFor=\"let oem of OEMS; \"[value]=\"oem\" >\n          {{oem}}\n        </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n    <mat-form-field *ngIf=\"USER_MAN\" >\n        <mat-label>Equipment Category</mat-label>\n        <mat-select [formControl]=\"Models\" [(ngModel)]=\"USER_CATEGORY\">\n        <mat-option (onSelectionChange)=\"changeCat($event)\" *ngFor=\"let c of CATS\" [value]=\"c\" >\n          {{c}}\n        </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n\n      <mat-form-field *ngIf=\"USER_CATEGORY\" >\n        <mat-label>Models</mat-label>\n        <mat-select [formControl]=\"Model\"  [(ngModel)] = \"USERSEARCH\">\n            <mat-option>Model</mat-option>\n   \n\n                        \n                         <span >\n                        <mat-option *ngFor=\"let model of MODELS\"  [value]=\"model\" >\n                            {{model}}\n                          </mat-option>\n\n\n                        </span>\n\n        </mat-select>\n      </mat-form-field>\n      <span *ngIf=\"USERSEARCH\">\n      <span  *ngFor=\"let ma of MACHINES; let i = index\">\n          <!-- <span ><H1>{{i}}</H1></span> -->\n            <mat-grid-list  *ngIf=\"USERSEARCH == ma.model && USER_CATEGORY == machines[i].catergory\" cols=\"2\" rowHeight=\"20rem\"  >\n                <mat-grid-tile  *ngIf=\"machines[i].image\" style=\"text-align: center;\" [rowspan]=\"2\">\n                  <mat-grid-tile-header >\n                    <span  style=\"width: 100%; text-align: center; \">\n                 \n                      <p> {{ma.voltage}} V  {{ma.minCap}} Ah {{ma.energy}} kWh</p>\n                        \n\n                  </span>\n                  </mat-grid-tile-header>\n\n                \n                  \n                  <img  style=\"height: 100%; width: 100%;\" src='{{\"/machines/\"+this.USER_MAN+\"/\"+this.USER_CATEGORY+\"/\"+this.USERSEARCH+\"/\"+this.USER_MAN+\" \"+this.USER_CATEGORY+\" \"+this.USERSEARCH+\".png\"}}' (click)=\"openModalMachine(this.USER_MAN,this.USER_CATEGORY, this.USERSEARCH )\" alt=\"\" layout-fill>\n     \n\n                </mat-grid-tile>\n\n\n                <mat-grid-tile \n                [colspan]=\"1\"\n                [rowspan]=\"2\">\n               \n\n                <span  style=\"width: 100%; text-align: left; margin-left: 5%;\">\n                <h3  *ngIf=\"ma.voltage > 0\">Voltage: {{ma.voltage}} V</h3>\n                <br>\n                <h3 *ngIf=\"ma.minCap > 0\">Capacity: {{ma.minCap}} Ah</h3>\n                <br>\n                <h3 *ngIf=\"ma.energy > 0\">Energy: {{ma.energy}} kWh</h3>\n                <br>\n    \n                <h3 *ngIf=\"ma.width > 0\">Width: {{ma.width}} mm</h3>\n                <br>\n                <h3 *ngIf=\"ma.len > 0\">Length: {{ma.len}} mm</h3>\n                <br>\n                <h3 *ngIf=\"ma.height > 0\">Height: {{ma.height}} mm</h3>\n                <br>\n                <h3 *ngIf=\"ma.minWeight > 0\">Min Weight: {{ma.minWeight}} Kg</h3>\n                <br>\n                <h3 *ngIf=\"ma.verified\">Field Tested: Yes</h3>\n                <h3 *ngIf=\"!ma.verified\">Field Tested: Not yet</h3>\n                 <br>\n                <span *ngIf=\"ma.pdf\" >\n\n                    <a \n                    href=\"javascript:void(0)\" \n                    style=\"cursor:pointer\"\n                    (click)=\"downloadMachinePDF(ma.OEM,ma.catergory, ma.model)\">\n                    Download PDF\n                  </a>\n                </span>\n                \n            </span>\n            \n            \n            </mat-grid-tile>        \n\n                    \n              \n        </mat-grid-list>\n           \n\n       \n         \n        \n    </span>\n    </span>\n\n</span>\n<br>\n<span *ngIf=\"!CustomSearchBool\">\n <button mat-raised-button color='primary' (click) ='CustomSearchBool = !CustomSearchBool'>Custom search</button>\n</span>\n<span *ngIf=\"CustomSearchBool\">\n    <button mat-raised-button color='primary' (click) ='CustomSearchBool = !CustomSearchBool'>Battery selection for a machine type</button>\n   </span>\n\n <br>\n <br>\n<span *ngIf=\"CustomSearchBool\">\n\n<mat-form-field>\n    <mat-label>Battery Voltage</mat-label>\n    <input matInput  placeholder=\"48\" [(ngModel)]=\"customSearch.voltage\">\n</mat-form-field>\n\n<mat-form-field>\n<mat-label>Battery Capacity </mat-label>\n<input matInput  placeholder=\"530\" [(ngModel)]=\"customSearch.capacity\">\n</mat-form-field>\n\n<mat-form-field>\n<mat-label>Battery Energy (kWh)</mat-label>\n<input matInput  placeholder=\"40.8\" [(ngModel)]=\"customSearch.energy\">\n</mat-form-field>\n\n<mat-form-field>\n<mat-label>Width</mat-label>\n<input matInput  placeholder=\"530\" [(ngModel)]=\"customSearch.width\">\n</mat-form-field>\n\n<mat-form-field>\n<mat-label>Length</mat-label>\n<input matInput  placeholder=\"896\" [(ngModel)]=\"customSearch.len\">\n</mat-form-field>\n\n  \n<mat-form-field>\n<mat-label>Height</mat-label>\n<input matInput  placeholder=\"530\" [(ngModel)]=\"customSearch.height\">\n</mat-form-field>\n</span>\n\n</mat-card>\n\n</div>\n<div>\n<!-- <mat-grid-list [cols]=5 rowHeight = '30rem'> -->\n<span *ngIf=\"!CustomSearchBool\">\n<span *ngIf=\"USERSEARCH\">\n\n<span  *ngFor=\"let bat of Batteries; let i = index;\" class='batCards'>\n        <mat-accordion *ngIf=\"CheckValid(bat)\" class = 'acc'>\n            <mat-expansion-panel>\n              <mat-expansion-panel-header>\n                <mat-panel-title>\n                    {{bat.name}}\n                </mat-panel-title>\n\n              </mat-expansion-panel-header>\n              \n              <p>\n                Voltage: {{bat.voltage}} V\n            </p>\n\n                <p>\n                    Capacity: {{bat.capacity}} Ah\n                </p>\n\n\n                <p>\n                    Energy:  {{bat.energy}} kWh\n                </p>\n\n                <p>\n                    Width: {{bat.width}} mm\n                </p>\n\n                <p>\n                    Length: {{bat.len}} mm\n                </p>\n\n\n                <p>\n                    Height: {{bat.height}} mm\n                </p>\n\n                <p>\n                    Weight: {{bat.weight}} kg\n                </p>\n                    \n\n                <!-- <span *ngFor=\"let ma of MACHINES\">\n                    <span *ngIf=\"USERSEARCH == ma.model\"> -->\n                        <span *ngIf=\"(THISMACHINEWEIGHT - bat.weight)>0\">\n                        <p>\n                            Additonal Weight required: {{THISMACHINEWEIGHT - bat.weight}} kg\n                        </p>\n                    </span>\n\n\n                    <span *ngIf=\"bat.image\" style=\"height:5rem\">\n                        <img  style=\"height: 100%; width: 100%;\" src='{{\"/batteries/\"+bat.name+\"/\"+bat.name+\".png\"}}' (click)=\"openModal(bat.name);\" class=\"hover-shadow cursor\" layout-fill>\n                    \n                    \n                     </span>\n\n\n                     <span *ngIf=\"bat.pdf\" >\n                        <button mat-raised-button href=\"javascript:void(0)\" \n                        style=\"cursor:pointer\"\n                        (click)=\"downloadBatteryPDF(bat.name)\"  color = \"primary\" style=\"width: 100%;\">  Download PDF</button>\n\n                    </span>\n\n            </mat-expansion-panel>\n        </mat-accordion>\n</span>\n</span>\n</span>\n<div id=\"imgModal\" class=\"slide-modal\">\n    <span class=\"close cursor\" (click)=\"closeModal()\">&times;</span>\n    <div class=\"slide-modal-content\">\n\n        <img style=\" display: block;\n        margin: 0 auto;\"   src='{{BatteryUrl}}'  >\n\n\n    </div>\n</div>\n\n\n<div id=\"imgModal1\" class=\"slide-modal\">\n    <span class=\"close cursor\" (click)=\"closeModalMachine()\">&times;</span>\n    <div class=\"slide-modal-content\">\n<div class = 'EnlargedImage'>\n        <img style=\"display: block;\n        margin: 0 auto;\"   src='{{MachineURL}}'  >\n</div>\n\n    </div>\n\n\n\n\n</div>\n</div>\n\n\n\n<span *ngIf=\"CustomSearchBool\">\n<span *ngIf=\"checkCustomSearch()\" class =\"SpanClass\">\n\t<!-- <mat-grid-tile *ngFor=\"let bat of Batteries | filter:searchText; let i = index; \" > -->\n<span  *ngFor=\"let bat of Batteries; let i = index;\">\n\n    \n        <mat-accordion *ngIf=\"ValidateCustomSearch(bat)\"  class = 'acc'>\n            <mat-expansion-panel>\n              <mat-expansion-panel-header>\n                <mat-panel-title>\n                    {{bat.name}}\n                </mat-panel-title>\n\n              </mat-expansion-panel-header>\n             \n              <p>\n                Voltage: {{bat.voltage}} V\n            </p>\n\n                <p>\n                    Capacity: {{bat.capacity}} Ah\n                </p>\n\n\n                <p>\n                    Energy:  {{bat.energy}} kWh\n                </p>\n\n                <p>\n                    Width: {{bat.width}} mm\n                </p>\n\n                <p>\n                    Length: {{bat.len}} mm\n                </p>\n\n\n                <p>\n                    Height: {{bat.height}} mm\n                </p>\n\n                <p>\n                    Weight: {{bat.weight}} kg\n                </p>\n\n                <span *ngIf=\"bat.image\" style=\"height:5rem\">\n                    <img  style=\"height: 100%; width: 100%;\" src='{{\"/batteries/\"+bat.name+\"/\"+bat.name+\".png\"}}' (click)=\"openModal(bat.name);\" class=\"hover-shadow cursor\" layout-fill>\n                \n                \n                 </span>\n\n\n                 <span *ngIf=\"bat.pdf\" >\n                    <button mat-raised-button href=\"javascript:void(0)\" \n                    style=\"cursor:pointer\"\n                    (click)=\"downloadBatteryPDF(bat.name)\"  color = \"primary\" style=\"width: 100%;\">  Download PDF</button>\n\n                </span>\n\n\n                \n\n\n            </mat-expansion-panel>\n        </mat-accordion>\n\n</span>\n</span>\n</span>\n\n\n\n\n\n           \n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class = 'LoginCard'>\n<mat-card >\n    <mat-form-field class='LoginForm'>\n        <mat-label>Username</mat-label>\n        <input matInput [(ngModel)]=\"USERNAME\">\n      </mat-form-field>\n      \n      <mat-form-field class='LoginForm'>\n        <mat-label>Password</mat-label>\n        <input matInput type=\"password\" [(ngModel)]=\"PASSWORD\">\n      </mat-form-field>\n\n      <span class='LoginForm'>\n      <button mat-button (click)='Login()' >Login</button>\n    </span>\n</mat-card>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/machines/machines.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/machines/machines.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class = 'AddCard'>\n\n    <mat-card-title>\n      <button mat-button (click)='ShowAdd= !ShowAdd' *ngIf=\"!ShowAdd\">\n        Add New Machine\n      </button>\n  \n      <button mat-button (click)='ShowAdd= !ShowAdd' *ngIf=\"ShowAdd\">\n        Minimise\n      </button>\n    </mat-card-title>\n  \n  <span *ngIf=\"ShowAdd\">\n    <mat-form-field>\n      <mat-label>OEM</mat-label>\n      <input matInput  placeholder=\"Doosan\" [(ngModel)]=\"AddMachineData.OEM\">\n    </mat-form-field>\n\n    <mat-form-field>\n        <mat-label>Equipment catergory</mat-label>\n        <input matInput  placeholder=\"Forklift\" [(ngModel)]=\"AddMachineData.catergory\" >\n    </mat-form-field>\n\n\n\n    <mat-form-field>\n        <mat-label>Model</mat-label>\n        <input matInput  placeholder=\"B25S-5\" [(ngModel)]=\"AddMachineData.model\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-label>Battery Voltage</mat-label>\n      <input matInput  placeholder=\"48\" [(ngModel)]=\"AddMachineData.voltage\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Minimum Battery Capacity</mat-label>\n    <input matInput  placeholder=\"530\" [(ngModel)]=\"AddMachineData.minCap\">\n</mat-form-field>\n\n\n<mat-form-field>\n  <mat-label>Maximum Battery Capacity </mat-label>\n  <input matInput  placeholder=\"530\" [(ngModel)]=\"AddMachineData.maxCap\">\n</mat-form-field>\n\n<mat-form-field>\n  <mat-label>Battery Energy (kWh)</mat-label>\n  <input matInput  placeholder=\"40.8\" [(ngModel)]=\"AddMachineData.energy\">\n</mat-form-field>\n\n<mat-form-field>\n  <mat-label>Minimum Battery Weight (kg)</mat-label>\n  <input matInput  placeholder=\"530\" [(ngModel)]=\"AddMachineData.minWeight\">\n</mat-form-field>\n\n<mat-form-field>\n<mat-label>Width</mat-label>\n<input matInput  placeholder=\"530\" [(ngModel)]=\"AddMachineData.width\">\n</mat-form-field>\n\n<mat-form-field>\n<mat-label>Length</mat-label>\n<input matInput  placeholder=\"896\" [(ngModel)]=\"AddMachineData.len\">\n</mat-form-field>\n\n    \n<mat-form-field>\n<mat-label>Height</mat-label>\n<input matInput  placeholder=\"530\" [(ngModel)]=\"AddMachineData.height\">\n</mat-form-field>\n\n\n\n\n<span class='ver'>\n<mat-checkbox [(ngModel)]=\"AddMachineData.verified\">Verified</mat-checkbox>\n</span>\n<span style=\"margin-left: 1rem;\">\n<button mat-raised-button (click)=\"addBattery()\"  color=\"primary\">Add Machine</button>\n</span>\n<br>\n<span>\n<H4>Upload a pdf</H4>\n<input type=\"file\" name=\"file\" ng2FileSelect [uploader]=\"PDFuploader\" />\n<br>\n\n</span>\n<span>\n  <H4>Upload an Image</H4>\n\n  <input type=\"file\" name=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n</span>\n<br>\n<span>\n  <img [src]=\"sanitizer.bypassSecurityTrustUrl(localImageUrl)\">\n  </span>\n\n\n\n\n\n  \n  </span>\n\n\n\n\n\n  </mat-card>\n\n  <mat-card class = 'AddCard' *ngIf=\"Update\">\n\n    <mat-card-title>\n      Update\n  \n  \n  \n      <button mat-button (click)='Update= !Update' *ngIf=\"Update\">\n        Close\n      </button>\n    </mat-card-title>\n  \n  <span *ngIf=\"Update\">\n    <mat-form-field>\n      <mat-label>OEM</mat-label>\n      <input matInput  value={{UpdateData.OEM}} [(ngModel)] = \"UpdateData.OEM\">\n    </mat-form-field>\n  \n  \n    <mat-form-field>\n      <mat-label>Catergory</mat-label>\n      <input matInput  value={{UpdateData.catergory}} [(ngModel)] = \"UpdateData.catergory\">\n    </mat-form-field>\n  \n    <mat-form-field>\n      <mat-label>Model</mat-label>\n      <input matInput  value={{UpdateData.model}} [(ngModel)] = \"UpdateData.model\">\n    </mat-form-field>\n\n\n    <mat-form-field>\n      <mat-label>voltage</mat-label>\n      <input matInput  value={{UpdateData.voltage}} [(ngModel)] = \"UpdateData.voltage\">\n    </mat-form-field>\n  \n    <mat-form-field>\n      <mat-label>Minimum Battery Capacity</mat-label>\n      <input matInput  value={{UpdateData.minCap}} [(ngModel)] = \"UpdateData.minCap\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-label>Maximim Battery Capacity</mat-label>\n      <input matInput  value={{UpdateData.maxCap}} [(ngModel)] = \"UpdateData.maxCap\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-label>Energy</mat-label>\n      <input matInput  value={{UpdateData.energy}} [(ngModel)] = \"UpdateData.energy\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-label>Minimum Weight</mat-label>\n      <input matInput  value={{UpdateData.minWeight}} [(ngModel)] = \"UpdateData.minWeight\">\n    </mat-form-field>\n  \n    <mat-form-field>\n      <mat-label>Width</mat-label>\n      <input matInput  value={{UpdateData.width}} [(ngModel)] = \"UpdateData.width\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-label>Length (mm)</mat-label>\n      <input matInput  value={{UpdateData.len}} [(ngModel)] = \"UpdateData.len\">\n    </mat-form-field>\n  \n    <mat-form-field>\n      <mat-label>Height (mm)</mat-label>\n      <input matInput  value={{UpdateData.height}} [(ngModel)] = \"UpdateData.height\">\n    </mat-form-field>\n\n\n    <span class='ver'>\n      <mat-checkbox value={{UpdateData.verified}} [(ngModel)]=\"UpdateData.verified\">Verified</mat-checkbox>\n      </span>\n\n\n\n   \n  \n   \n\n    <br>\n    <span  >\n\n      <mat-grid-list cols=\"2\" rowHeight=\"10rem\" >\n        <mat-grid-tile *ngIf = \"!UpdateData.pdf\" > \n          <span *ngIf=\"!UpdatePDF\">\n            <H4>Select the PDF</H4>\n            <input type=\"file\" name=\"file\" ng2FileSelect [uploader]=\"PDFuploader\" />\n            <br>\n            </span>\n    \n        </mat-grid-tile>\n        <mat-grid-tile *ngIf = \"UpdateData.pdf\" >\n          <mat-grid-tile-header >\n            <span style=\"width: 100%; text-align: center;\">\n            PDF\n          </span>\n          </mat-grid-tile-header>\n        \n          \n          <a \n          href=\"javascript:void(0)\" \n          style=\"cursor:pointer\"\n          (click)=\"downloadPdf(UpdateData.OEM,UpdateData.catergory, UpdateData.model)\">\n          Download PDF\n        </a>\n      \n          <mat-grid-tile-footer [style.background]=\"black\">\n           \n            <button mat-raised-button color='primary' (click)=\"UpdatePDF=!UpdatePDF\" style=\"width: 50%;\"> Update PDF</button>\n            <button mat-raised-button color='warn' (click)=\"deletePDF(UpdateData.name)\" style=\"width: 50%;\"> Delete PDF</button>\n          \n          </mat-grid-tile-footer>\n        </mat-grid-tile>\n    \n    \n        <mat-grid-tile> \n          <span *ngIf=\"UpdatePDF\">\n            <H4>Select the PDF</H4>\n            <input type=\"file\" name=\"file\" ng2FileSelect [uploader]=\"PDFuploader\" />\n            <br>\n            </span>\n    \n        </mat-grid-tile>\n    \n    \n    \n    \n    </mat-grid-list>\n    </span>\n\n\n\n    \n    <span >\n\n      <br>\n\n      <mat-grid-list cols=\"2\"  >\n        <mat-grid-tile *ngIf=\"!UpdateData.image\">\n\n\n          <span >\n            <br>\n            <H4>Select an image</H4>\n            <input type=\"file\" name=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n            <br>\n          </span>\n        </mat-grid-tile>\n        <mat-grid-tile *ngIf=\"UpdateData.image\">\n          <mat-grid-tile-header >\n            <span style=\"width: 100%; text-align: center;\">\n            Orginal Image\n          </span>\n          </mat-grid-tile-header>\n        \n          \n          <img src='{{\"/machines/\"+UpdateImageUrl}}' alt=\"\" layout-fill>\n\n          <mat-grid-tile-footer [style.background]=\"black\">\n            <button mat-raised-button color='primary' (click)=\"UpdateImage=!UpdateImage\" style=\"width: 50%;\"> Update image</button>\n            <button mat-raised-button color='warn' (click)=\"DeleteImage()\" style=\"width: 50%;\"> Delete image</button>\n          </mat-grid-tile-footer>\n        </mat-grid-tile>\n        <mat-grid-tile>\n          <span *ngIf=\"UpdateImage\">\n            <H4>Select the image</H4>\n            <input type=\"file\" name=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n            <br>\n\n          </span>\n\n\n          <span *ngIf=\"!UpdateImage\">\n            <span *ngIf=\"localImageUrl!=''\">\n            <mat-grid-tile-header >\n              <span style=\"width: 100%; text-align: center;\">\n              Updated Image\n            </span>\n            </mat-grid-tile-header>\n\n\n            <img [src]=\"sanitizer.bypassSecurityTrustUrl(localImageUrl)\">\n\n            <mat-grid-tile-footer [style.background]=\"black\">\n              <button mat-raised-button color='primary' (click)=\"UpdateImage=!UpdateImage\" style=\"width: 100%;\"> Update image</button>\n             \n            </mat-grid-tile-footer>\n          </span>\n\n        </span>\n        </mat-grid-tile>\n\n      </mat-grid-list>\n     \n\n    </span>\n\n\n\n  </span>\n  <br>\n  <button style='width: 100%' mat-raised-button (click)='UpdateMachineData(UpdateData)'  color=\"primary\">Update machine</button>\n  </mat-card>\n\n\n<mat-card>\n<mat-form-field>\n  <mat-label>Filter</mat-label>\n  <input matInput (keyup)=\"applyFilter($event)\" >\n</mat-form-field>\n</mat-card>\n    <table mat-table [dataSource]=\" dataSource\" class=\"mat-elevation-z8\">\n    \n  \n      <ng-container matColumnDef=\"OEM\" >\n        <th mat-header-cell *matHeaderCellDef> OEM </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.OEM}} </td>\n      </ng-container>\n      \n      <ng-container matColumnDef=\"Catergory\">\n        <th mat-header-cell *matHeaderCellDef> Equipment catergory </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.catergory}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Model\">\n        <th mat-header-cell *matHeaderCellDef> Model</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.model}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"voltage\">\n      <th mat-header-cell *matHeaderCellDef> Voltage</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.voltage}} </td>\n  </ng-container>\n\n\n  <ng-container matColumnDef=\"minCap\">\n    <th mat-header-cell *matHeaderCellDef> Minmum Battery Capacity</th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.minCap}} </td>\n</ng-container>\n\n<ng-container matColumnDef=\"maxCap\">\n  <th mat-header-cell *matHeaderCellDef> Maximum Battery Capacity</th>\n  <td mat-cell *matCellDef=\"let element\"> {{element.maxCap}} </td>\n</ng-container>\n\n\n<ng-container matColumnDef=\"Energy\">\n  <th mat-header-cell *matHeaderCellDef> Energy (kWh) </th>\n  <td mat-cell *matCellDef=\"let element\"> {{element.energy}} </td>\n</ng-container>\n\n<ng-container matColumnDef=\"minWeight\">\n  <th mat-header-cell *matHeaderCellDef> Minimum Weight (kg) </th>\n  <td mat-cell *matCellDef=\"let element\"> {{element.minWeight}} </td>\n</ng-container>\n\n<ng-container matColumnDef=\"Width\">\n  <th mat-header-cell *matHeaderCellDef> Width(mm)</th>\n  <td mat-cell *matCellDef=\"let element\"> {{element.width}} </td>\n</ng-container>\n\n<ng-container matColumnDef=\"Height\">\n  <th mat-header-cell *matHeaderCellDef> Height (mm) </th>\n  <td mat-cell *matCellDef=\"let element\"> {{element.height}} </td>\n</ng-container>\n\n      <ng-container matColumnDef=\"Length\">\n          <th mat-header-cell *matHeaderCellDef> Length (mm) </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.len}} </td>\n      </ng-container>\n  \n\n\n      <ng-container matColumnDef=\"verified\">\n        <th mat-header-cell *matHeaderCellDef> Verified </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.verified}} </td>\n    </ng-container>\n\n    <!-- <ng-container matColumnDef=\"image\">\n      <th mat-header-cell *matHeaderCellDef> Image </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.image}} </td>\n  </ng-container>\n -->\n\n  \n      <ng-container matColumnDef=\"UpdateButtons\">\n        <th mat-header-cell *matHeaderCellDef></th>\n        <td mat-cell *matCellDef=\"let element; let i = index\">\n          <button mat-raised-button color=\"primary\" (click)= \"DisplayUpdateData(element)\"   style=\"text-align: center; padding: 0px;\">Update</button>\n        </td>\n      </ng-container>\n  \n  \n      <ng-container matColumnDef=\"DelButtons\">\n        <th mat-header-cell *matHeaderCellDef></th>\n        <td mat-cell *matCellDef=\"let element; let i = index\"><button mat-raised-button color=\"warn\" (click)= deleteData(i)  style=\"text-align: center; padding: 0px;\">Delete</button></td>\n      </ng-container>\n  \n  \n    \n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" class = 'TabelRow'></tr>\n    </table>\n\n<mat-paginator [pageSizeOptions]=\"[25, 50, 100,250]\"></mat-paginator>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabel/tabel.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabel/tabel.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class = 'AddCard'>\n\n  <mat-card-title>\n    <button mat-button (click)='ShowAdd= !ShowAdd' *ngIf=\"!ShowAdd\">\n      Add New Battery\n    </button>\n\n    <button mat-button (click)='ShowAdd= !ShowAdd' *ngIf=\"ShowAdd\">\n      Minimise\n    </button>\n  </mat-card-title>\n\n<span *ngIf=\"ShowAdd\">\n  <mat-card-title>\n<H3>Add a new battery</H3>\n  </mat-card-title>\n  <mat-form-field>\n    <mat-label>Name</mat-label>\n    <input matInput  placeholder=\"P00001\" [(ngModel)]=\"AddBatteryData.name\">\n  </mat-form-field>\n\n\n  <mat-form-field>\n    <mat-label>voltage (V)</mat-label>\n    <input matInput  placeholder=\"26\" type=\"number\" [(ngModel)]=\"AddBatteryData.voltage\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Capacity (Ah)</mat-label>\n    <input matInput  placeholder=\"144\" type=\"number\" [(ngModel)]=\"AddBatteryData.capacity\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Energy (kWh)</mat-label>\n    <input matInput  placeholder=\"3.7\" type=\"number\" [(ngModel)]=\"AddBatteryData.energy\">\n  </mat-form-field>\n\n\n  <mat-form-field>\n    <mat-label>Width (mm)</mat-label>\n    <input matInput  placeholder=\"3.7\" type=\"number\" [(ngModel)]=\"AddBatteryData.width\">\n  </mat-form-field>\n\n\n  <mat-form-field>\n    <mat-label>Length (mm)</mat-label>\n    <input matInput  placeholder=\"3.7\" type=\"number\" [(ngModel)]=\"AddBatteryData.len\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Height (mm)</mat-label>\n    <input matInput  placeholder=\"3.7\" type=\"number\" [(ngModel)]=\"AddBatteryData.height\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Weight (Kg)</mat-label>\n    <input matInput  placeholder=\"34\" type=\"number\" [(ngModel)]=\"AddBatteryData.weight\">\n  </mat-form-field>\n\n  <!-- <mat-form-field>\n    <mat-label>Cell Weight(Kg)</mat-label>\n    <input matInput  placeholder=\"30.4\" type=\"number\" [(ngModel)]=\"AddBatteryData.cellWeight\">\n  </mat-form-field> -->\n\n  <br>\n\n  <span>\n    <H4>Upload a pdf</H4>\n    <input type=\"file\" name=\"file\" ng2FileSelect [uploader]=\"PDFuploader\" />\n    <br>\n    </span>\n    <br>\n  <span>\n    <H4>Upload an Image</H4>\n  \n    <input type=\"file\" name=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n  </span>\n  <br>\n  <span>\n    <img [src]=\"sanitizer.bypassSecurityTrustUrl(localImageUrl)\">\n    </span>\n    \n\n\n<br>\n  \n  <button mat-raised-button color=\"primary\" (click)=\"addBattery()\">Add Battery</button>\n\n</span>\n</mat-card>\n\n\n\n\n\n<mat-card class = 'AddCard' *ngIf=\"Update\">\n\n  <mat-card-title>\n    Update\n\n\n\n    <button mat-button (click)='Update= !Update' *ngIf=\"Update\">\n      Close\n    </button>\n  </mat-card-title>\n\n<span *ngIf=\"Update\">\n  <mat-form-field>\n    <mat-label>Name</mat-label>\n    <input matInput  value={{UpdateData.name}} [(ngModel)] = \"UpdateData.name\">\n  </mat-form-field>\n\n\n  <mat-form-field>\n    <mat-label>Voltage (V)</mat-label>\n    <input matInput  value={{UpdateData.voltage}} [(ngModel)] = \"UpdateData.voltage\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Capacity (Ah)</mat-label>\n    <input matInput  value={{UpdateData.capacity}} [(ngModel)] = \"UpdateData.capacity\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Energy (kWh)</mat-label>\n    <input matInput  value={{UpdateData.energy}} [(ngModel)] = \"UpdateData.energy\">\n  </mat-form-field>\n\n\n  <mat-form-field>\n    <mat-label>Width (mm)</mat-label>\n    <input matInput  value={{UpdateData.width}} [(ngModel)] = \"UpdateData.width\">\n  </mat-form-field>\n\n\n  <mat-form-field>\n    <mat-label>Length (mm)</mat-label>\n    <input matInput  value={{UpdateData.len}} [(ngModel)] = \"UpdateData.len\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Height (mm)</mat-label>\n    <input matInput  value={{UpdateData.height}} [(ngModel)] = \"UpdateData.height\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Weight (Kg)</mat-label>\n    <input matInput value={{UpdateData.weight}} [(ngModel)] = \"UpdateData.weight\">\n  </mat-form-field>\n\n\n\n\n\n\n <br>\n \n\n<span  >\n\n  <mat-grid-list cols=\"2\" rowHeight=\"10rem\" >\n    <mat-grid-tile *ngIf = \"!UpdateData.pdf\" > \n      <span *ngIf=\"!UpdatePDF\">\n        <H4>Select the PDF</H4>\n        <input type=\"file\" name=\"file\" ng2FileSelect [uploader]=\"PDFuploader\" />\n        <br>\n        </span>\n\n    </mat-grid-tile>\n    <mat-grid-tile *ngIf = \"UpdateData.pdf\" >\n      <mat-grid-tile-header >\n        <span style=\"width: 100%; text-align: center;\">\n        PDF\n      </span>\n      </mat-grid-tile-header>\n    \n      \n      <a \n      href=\"javascript:void(0)\" \n      style=\"cursor:pointer\"\n      (click)=\"downloadPdf(PDFurl,UpdateData.name)\">\n      Download PDF\n    </a>\n  \n      <mat-grid-tile-footer [style.background]=\"black\">\n       \n        <button mat-raised-button color='primary' (click)=\"UpdatePDF=!UpdatePDF\" style=\"width: 50%;\"> Update PDF</button>\n        <button mat-raised-button color='warn' (click)=\"deletePDF(UpdateData.name)\" style=\"width: 50%;\"> Delete PDF</button>\n      \n      </mat-grid-tile-footer>\n    </mat-grid-tile>\n\n\n    <mat-grid-tile> \n      <span *ngIf=\"UpdatePDF\">\n        <H4>Select the PDF</H4>\n        <input type=\"file\" name=\"file\" ng2FileSelect [uploader]=\"PDFuploader\" />\n        <br>\n        </span>\n\n    </mat-grid-tile>\n\n\n\n\n</mat-grid-list>\n</span>\n<br>\n<mat-grid-list cols=\"2\"  >\n  <mat-grid-tile *ngIf=\"UpdateData.image\">\n    <mat-grid-tile-header >\n      <span style=\"width: 100%; text-align: center;\">\n      Orginal Image\n    </span>\n    </mat-grid-tile-header>\n  \n    \n    <img src='{{UpdateImageUrl}}' alt=\"\" layout-fill>\n\n    <mat-grid-tile-footer [style.background]=\"black\">\n     \n      <button mat-raised-button color='primary' (click)=\"UpdateImage=!UpdateImage\" style=\"width: 50%;\"> Update image</button>\n      <button mat-raised-button color='warn' (click)=\"deleteImage(UpdateData.name)\" style=\"width: 50%;\"> Delete image</button>\n    \n    </mat-grid-tile-footer>\n  </mat-grid-tile>\n  <mat-grid-tile>\n    <span *ngIf=\"UpdateImage\">\n      <H4>Select the image</H4>\n      <input type=\"file\" name=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n      <br>\n\n    </span>\n\n\n    <span *ngIf=\"!UpdateImage\">\n      <span *ngIf=\"!isThereImage\">\n        <H4>Upload an image</H4>\n        <input type=\"file\" name=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n        <br>\n        </span>\n      \n      <span *ngIf=\"localImageUrl!=''\">\n      <mat-grid-tile-header >\n        <span style=\"width: 100%; text-align: center;\">\n        Updated Image\n      </span>\n      </mat-grid-tile-header>\n\n\n      <img [src]=\"sanitizer.bypassSecurityTrustUrl(localImageUrl)\">\n\n      <mat-grid-tile-footer [style.background]=\"black\">\n        <button mat-raised-button color='primary' (click)=\"UpdateImage=!UpdateImage\" style=\"width: 100%;\"> Update image</button>\n       \n      </mat-grid-tile-footer>\n      \n   \n\n  </span>\n\n\n\n\n\n  </span>\n  </mat-grid-tile>\n\n</mat-grid-list>\n\n\n  </span>\n<!-- </span> -->\n\n\n\n<br>\n<button  style='width: 100%' mat-raised-button color='primary' (click)='UpdateBatData(UpdateData)'>Update Battery</button>\n\n</mat-card>\n\n\n<mat-card>\n  <table mat-table [dataSource]=\" dataSource\" class=\"mat-elevation-z8\">\n  \n\n    <ng-container matColumnDef=\"name\" >\n      <th mat-header-cell *matHeaderCellDef> Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n  \n\n    <ng-container matColumnDef=\"description\">\n      <th mat-header-cell *matHeaderCellDef> Battery Description </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.batteryDescription}} </td>\n    </ng-container>\n  \n\n    <ng-container matColumnDef=\"voltage\">\n      <th mat-header-cell *matHeaderCellDef> Voltage </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.voltage}} </td>\n    </ng-container>\n  \n\n    <ng-container matColumnDef=\"capacity\">\n      <th mat-header-cell *matHeaderCellDef> Capacity (Ah) </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.capacity}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"energy\">\n        <th mat-header-cell *matHeaderCellDef> Energy (kWh) </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.energy}} </td>\n    </ng-container>\n\n\n    <ng-container matColumnDef=\"width\">\n        <th mat-header-cell *matHeaderCellDef> Width (mm) </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.width}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"length\">\n        <th mat-header-cell *matHeaderCellDef> Length (mm) </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.len}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"height\">\n        <th mat-header-cell *matHeaderCellDef> Height (mm) </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.height}} </td>\n    </ng-container>\n\n    \n    <ng-container matColumnDef=\"weight\">\n        <th mat-header-cell *matHeaderCellDef> Weight (kg) </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n    </ng-container>\n\n    <!-- <ng-container matColumnDef=\"image\">\n      <th mat-header-cell *matHeaderCellDef> Image </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.image}} </td>\n  </ng-container>\n     -->\n    \n    <!-- <ng-container matColumnDef=\"cellWeight\">\n        <th mat-header-cell *matHeaderCellDef> Cell weight (kg) </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.cellWeight}} </td>\n    </ng-container> -->\n\n\n\n    <ng-container matColumnDef=\"UpdateButtons\">\n      <th mat-header-cell *matHeaderCellDef></th>\n      <td mat-cell *matCellDef=\"let element; let i = index\">\n       \n        \n        <button mat-raised-button color='primary' (click)= \"DisplayUpdateData(dataSource[i])\">\n          Update\n        </button></td>\n    </ng-container>\n\n\n    <ng-container matColumnDef=\"DelButtons\">\n      <th mat-header-cell *matHeaderCellDef></th>\n      <td mat-cell *matCellDef=\"let element; let i = index\"><button mat-raised-button color='warn' (click)= deleteData(i)>\n    \n        Delete\n      \n      </button></td>\n    </ng-container>\n\n\n  \n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" class = 'TabelRow'></tr>\n  </table>\n\n</mat-card>\n\n\n\n<app-machines></app-machines>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/test/test.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/test/test.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>test works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/toolbar/toolbar.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/toolbar/toolbar.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar style='width: 100%;'color='white'>\n    <mat-toolbar-row>\n      <img src=\"assets/img/logo.png\" class  = 'Logo'>\n      <span>\n        <!-- <button mat-button routerLink=\"/products\">Products</button> -->\n       \n      </span>\n      <span class='loginBtn'>\n        <!-- <button mat-button routerLink=\"/login\">Login</button> -->\n      </span>\n    </mat-toolbar-row>\n  </mat-toolbar>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'balancellTabel';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _tabel_tabel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabel/tabel.component */ "./src/app/tabel/tabel.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _battery_cards_battery_cards_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./battery-cards/battery-cards.component */ "./src/app/battery-cards/battery-cards.component.ts");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/toolbar/toolbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _machines_machines_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./machines/machines.component */ "./src/app/machines/machines.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
































var appRoutes = [
    { path: 'products', component: _battery_cards_battery_cards_component__WEBPACK_IMPORTED_MODULE_13__["BatteryCardsComponent"] },
    { path: 'addProducts', component: _tabel_tabel_component__WEBPACK_IMPORTED_MODULE_6__["TabelComponent"] },
    { path: 'AdminLogin', component: _login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"] },
    { path: '',
        redirectTo: '/products',
        pathMatch: 'full'
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _tabel_tabel_component__WEBPACK_IMPORTED_MODULE_6__["TabelComponent"],
                _test_test_component__WEBPACK_IMPORTED_MODULE_28__["TestComponent"],
                _battery_cards_battery_cards_component__WEBPACK_IMPORTED_MODULE_13__["BatteryCardsComponent"],
                _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_18__["ToolbarComponent"],
                _machines_machines_component__WEBPACK_IMPORTED_MODULE_22__["MachinesComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"],
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButtonModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["NoopAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_16__["Ng2SearchPipeModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_23__["CommonModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__["MatProgressBarModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__["MatCheckboxModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_27__["FileUploadModule"]
            ],
            providers: [_angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-user.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth-user.service.ts ***!
  \**************************************/
/*! exports provided: AuthUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthUserService", function() { return AuthUserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");



var AuthUserService = /** @class */ (function () {
    function AuthUserService(http) {
        this.http = http;
        this.url = '/api/auth';
    }
    AuthUserService.prototype.Login = function (username, password) {
        return this.http.post(this.url, { username: username, password: password });
    };
    AuthUserService.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
    ]; };
    AuthUserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthUserService);
    return AuthUserService;
}());



/***/ }),

/***/ "./src/app/batteries.service.ts":
/*!**************************************!*\
  !*** ./src/app/batteries.service.ts ***!
  \**************************************/
/*! exports provided: BatteriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatteriesService", function() { return BatteriesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");



var BatteriesService = /** @class */ (function () {
    function BatteriesService(http) {
        this.http = http;
        this.url = '/api/battery';
    }
    BatteriesService.prototype.getBatteries = function () {
        return this.http.get(this.url);
    };
    BatteriesService.prototype.deleteBatteryImage = function (name) {
        var URL = '/api/DeleteBatteryImage';
        console.log(name);
        return this.http.post(URL, { name: name });
    };
    BatteriesService.prototype.deleteBatteryPDF = function (name) {
        var URL = '/api/DeleteBatteryPDF';
        console.log(name);
        return this.http.post(URL, { name: name });
    };
    BatteriesService.prototype.addBattery = function (bat) {
        var cat = [];
        var models = [];
        for (var num in bat.models) {
            if (!(bat.models[num].cat in cat)) {
                cat.push(bat.models[num].cat);
            }
            for (var mo in bat.models[num].models) {
                models.push(bat.models[num].models[mo]);
            }
        }
        //console.log('Cats',cat)
        //console.log('Models',models)
        var battery = {
            name: bat.name,
            batteryDescription: bat.voltage + 'V ' + bat.capacity + 'Ah ' + bat.energy + 'kWh',
            voltage: bat.voltage,
            capacity: bat.capacity,
            energy: bat.energy,
            width: bat.width,
            len: bat.len,
            height: bat.height,
            weight: bat.weight,
            cellWeight: bat.cellWeight,
            categories: cat,
            models: models,
            image: bat.image,
            pdf: bat.pdf
        };
        //console.log(bat.voltage)
        //console.log('Adding Battery');
        //console.log('Battery Added');
        return this.http.post(this.url, { battery: battery });
    };
    BatteriesService.prototype.DelBat = function (id) {
        var deleteUrl = this.url + '/' + id;
        return this.http.delete(deleteUrl);
    };
    BatteriesService.prototype.UpdateBat = function (bat) {
        var id = bat['_id'];
        //console.log(bat)
        var cat = [];
        var models = [];
        for (var num in bat.models) {
            if (!(bat.models[num].cat in cat)) {
                cat.push(bat.models[num].cat);
            }
            for (var mo in bat.models[num].models) {
                models.push(bat.models[num].models[mo]);
            }
        }
        //console.log('Cats',cat)
        //console.log('Models',models)
        var battery = {
            name: bat.name,
            batteryDescription: bat.voltage + 'V ' + bat.capacity + 'Ah ' + bat.energy + 'kWh',
            voltage: bat.voltage,
            capacity: bat.capacity,
            energy: bat.energy,
            width: bat.width,
            len: bat.len,
            height: bat.height,
            weight: bat.weight,
            cellWeight: bat.cellWeight,
            image: bat.image,
            pdf: bat.pdf
        };
        var updateUrl = this.url + '/' + id;
        return this.http.put(updateUrl, { battery: battery });
    };
    BatteriesService.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
    ]; };
    BatteriesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
        // DeleteBatteryImage
    ], BatteriesService);
    return BatteriesService;
}());



/***/ }),

/***/ "./src/app/battery-cards/battery-cards.component.css":
/*!***********************************************************!*\
  !*** ./src/app/battery-cards/battery-cards.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" .mat-card{\r\n\r\n    border: 55px solid !important;\r\n  \r\n    border: #000 !important;\r\n    width:auto;\r\n    \r\n    margin-bottom: 1rem;\r\n    z-index: 0;\r\n   }\r\n\r\n   .fkLifts{\r\n    display: inline-block;\r\n   }\r\n\r\n   .we{\r\n       margin: 0 0 0 0 ;\r\n   }\r\n\r\n   .card-title{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n   }\r\n\r\n   .TabelRow{\r\n    text-align: center;\r\n   }\r\n\r\n   .mat-cell {\r\n    text-align: center;\r\n    -webkit-box-pack:center;\r\n            justify-content:center; \r\n  }\r\n\r\n   .batCards{\r\n    display: inline-block;\r\n    margin-right: 0;\r\n    display: inline-flexbox;\r\n    position: relative;\r\n    overflow: inherit !important;\r\n    top: 0;\r\n    z-index: 0;\r\n  }\r\n\r\n   .mat-expansion-panel {\r\n    overflow: inherit !important;\r\n    margin: 1rem, 1rem, 1rem, 1rem;\r\n}\r\n\r\n   .mat-expansion-panel-body {\r\n    overflow: auto;\r\n}\r\n\r\n   .mat-expansion-panel-header.mat-expanded {\r\n    position: relative;\r\n    top: 0;\r\n    z-index: 1000;\r\n}\r\n\r\n   .mat-form-field{\r\n  margin-right: 1rem;\r\n  margin: 1rem, 1rem, 1rem,1rem;\r\n}\r\n\r\n   .SpanClass{\r\n  margin: 0,0,0,0;\r\n}\r\n\r\n   .acc{\r\n  display: inline-block;\r\n\r\n  margin: 1rem, 1rem, 1rem,1rem;\r\n\r\n  position: relative;\r\n  overflow: inherit !important;\r\n  top: 0;\r\n  z-index: 1;\r\n}\r\n\r\n   .html,body{\r\n  background-image: rgb(0,133,62);\r\n  background-size: 100% 100%;\r\n}\r\n\r\n   img {\r\n  width: auto;\r\n}\r\n\r\n   .slide-modal {\r\n  display: none;\r\n  position: fixed;\r\n  z-index: 100;\r\n\r\n  left: 0%;\r\n  top: 0%;\r\n  width: 100%;\r\n  height: 100%;\r\n  /* overflow: auto; */\r\n  background-color: #000000;\r\n\r\n  \r\n  \r\n\r\n  \r\n}\r\n\r\n   .slide-modal-content {\r\n  position: absolute;\r\n  /* margin: auto; */\r\n  padding: 0;\r\n  align-content: center;\r\n  max-height: 90%;\r\n\r\n\r\n  /* border-radius: 5px 5px 5px;\r\n  border: 10px solid red; \r\n  padding-left: 0px;  */\r\n\r\n  left: 10%;\r\n  right:10%;\r\n\r\n  display: block;\r\n  margin: 0 auto;\r\n\r\n}\r\n\r\n   .EnlargedImage {\r\n\r\n width: auto;\r\n \r\n\r\n    display: block;\r\n    margin: 0 auto;\r\n\r\n\r\n\r\n\r\n/* \r\nborder-radius: 5px 5px 5px;\r\nborder: 10px solid white;\r\npadding-left: 25px;\r\nposition:relative; */\r\n}\r\n\r\n   .slide-modal-content .image-column {\r\n  padding: 0;\r\n}\r\n\r\n   .close {\r\n  color: white;\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 25px;\r\n  font-size: 35px;\r\n  font-weight: bold;\r\n}\r\n\r\n   .close:hover,\r\n.close:focus {\r\n  color: #888888;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n\r\n   .img-slides {\r\n  display: none;\r\n}\r\n\r\n   .cursor {\r\n  cursor: pointer;\r\n}\r\n\r\n   img {\r\n  margin-bottom: -4px;\r\n}\r\n\r\n   .images {\r\n  opacity: 0.7;\r\n}\r\n\r\n   .active,\r\n.images:hover {\r\n  opacity: 1;\r\n}\r\n\r\n   img.hover-shadow {\r\n  -webkit-transition: 0.3s;\r\n  transition: 0.3s;\r\n}\r\n\r\n   .hover-shadow:hover {\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmF0dGVyeS1jYXJkcy9iYXR0ZXJ5LWNhcmRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUM7O0lBRUcsNkJBQTZCOztJQUU3Qix1QkFBdUI7SUFDdkIsVUFBVTs7SUFFVixtQkFBbUI7SUFDbkIsVUFBVTtHQUNYOztHQUVBO0lBQ0MscUJBQXFCO0dBQ3RCOztHQUdBO09BQ0ksZ0JBQWdCO0dBQ3BCOztHQUVBO0lBQ0Msb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtHQUN4Qjs7R0FHQTtJQUNDLGtCQUFrQjtHQUNuQjs7R0FHRDtJQUNFLGtCQUFrQjtJQUNsQix1QkFBc0I7WUFBdEIsc0JBQXNCO0VBQ3hCOztHQUdBO0lBQ0UscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QixNQUFNO0lBQ04sVUFBVTtFQUNaOztHQUVBO0lBQ0UsNEJBQTRCO0lBQzVCLDhCQUE4QjtBQUNsQzs7R0FFQTtJQUNJLGNBQWM7QUFDbEI7O0dBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLGFBQWE7QUFDakI7O0dBRUE7RUFDRSxrQkFBa0I7RUFDbEIsNkJBQTZCO0FBQy9COztHQUNBO0VBQ0UsZUFBZTtBQUNqQjs7R0FFQTtFQUNFLHFCQUFxQjs7RUFFckIsNkJBQTZCOztFQUU3QixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLE1BQU07RUFDTixVQUFVO0FBQ1o7O0dBRUE7RUFDRSwrQkFBK0I7RUFDL0IsMEJBQTBCO0FBQzVCOztHQUtBO0VBQ0UsV0FBVztBQUNiOztHQUNBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixZQUFZOztFQUVaLFFBQVE7RUFDUixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIseUJBQXlCOzs7Ozs7QUFNM0I7O0dBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsZUFBZTs7O0VBR2Y7O3VCQUVxQjs7RUFFckIsU0FBUztFQUNULFNBQVM7O0VBRVQsY0FBYztFQUNkLGNBQWM7O0FBRWhCOztHQUlBOztDQUVDLFdBQVc7OztJQUdSLGNBQWM7SUFDZCxjQUFjOzs7OztBQUtsQjs7OztvQkFJb0I7QUFDcEI7O0dBR0E7RUFDRSxVQUFVO0FBQ1o7O0dBQ0E7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7R0FDQTs7RUFFRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0dBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0dBQ0E7RUFDRSxlQUFlO0FBQ2pCOztHQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztHQUNBO0VBQ0UsWUFBWTtBQUNkOztHQUNBOztFQUVFLFVBQVU7QUFDWjs7R0FDQTtFQUNFLHdCQUFnQjtFQUFoQixnQkFBZ0I7QUFDbEI7O0dBQ0E7RUFDRSwyRUFBMkU7QUFDN0UiLCJmaWxlIjoic3JjL2FwcC9iYXR0ZXJ5LWNhcmRzL2JhdHRlcnktY2FyZHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAubWF0LWNhcmR7XHJcblxyXG4gICAgYm9yZGVyOiA1NXB4IHNvbGlkICFpbXBvcnRhbnQ7XHJcbiAgXHJcbiAgICBib3JkZXI6ICMwMDAgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOmF1dG87XHJcbiAgICBcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICB9XHJcblxyXG4gICAuZmtMaWZ0c3tcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgfVxyXG5cclxuXHJcbiAgIC53ZXtcclxuICAgICAgIG1hcmdpbjogMCAwIDAgMCA7XHJcbiAgIH1cclxuXHJcbiAgIC5jYXJkLXRpdGxle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICB9XHJcblxyXG5cclxuICAgLlRhYmVsUm93e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICB9XHJcblxyXG4gIFxyXG4gIC5tYXQtY2VsbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOyBcclxuICB9XHJcblxyXG5cclxuICAuYmF0Q2FyZHN7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleGJveDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1leHBhbnNpb24tcGFuZWwge1xyXG4gICAgb3ZlcmZsb3c6IGluaGVyaXQgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMXJlbSwgMXJlbSwgMXJlbSwgMXJlbTtcclxufVxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtYm9keSB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLm1hdC1leHBhbmRlZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGR7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gIG1hcmdpbjogMXJlbSwgMXJlbSwgMXJlbSwxcmVtO1xyXG59XHJcbi5TcGFuQ2xhc3N7XHJcbiAgbWFyZ2luOiAwLDAsMCwwO1xyXG59XHJcblxyXG4uYWNje1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHJcbiAgbWFyZ2luOiAxcmVtLCAxcmVtLCAxcmVtLDFyZW07XHJcblxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uaHRtbCxib2R5e1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHJnYigwLDEzMyw2Mik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmltZyB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuLnNsaWRlLW1vZGFsIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxMDA7XHJcblxyXG4gIGxlZnQ6IDAlO1xyXG4gIHRvcDogMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIC8qIG92ZXJmbG93OiBhdXRvOyAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcblxyXG4gIFxyXG4gIFxyXG5cclxuICBcclxufVxyXG4uc2xpZGUtbW9kYWwtY29udGVudCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8qIG1hcmdpbjogYXV0bzsgKi9cclxuICBwYWRkaW5nOiAwO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXgtaGVpZ2h0OiA5MCU7XHJcblxyXG5cclxuICAvKiBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweDtcclxuICBib3JkZXI6IDEwcHggc29saWQgcmVkOyBcclxuICBwYWRkaW5nLWxlZnQ6IDBweDsgICovXHJcblxyXG4gIGxlZnQ6IDEwJTtcclxuICByaWdodDoxMCU7XHJcblxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4uRW5sYXJnZWRJbWFnZSB7XHJcblxyXG4gd2lkdGg6IGF1dG87XHJcbiBcclxuXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuXHJcblxyXG5cclxuLyogXHJcbmJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4O1xyXG5ib3JkZXI6IDEwcHggc29saWQgd2hpdGU7XHJcbnBhZGRpbmctbGVmdDogMjVweDtcclxucG9zaXRpb246cmVsYXRpdmU7ICovXHJcbn1cclxuXHJcblxyXG4uc2xpZGUtbW9kYWwtY29udGVudCAuaW1hZ2UtY29sdW1uIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbi5jbG9zZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwcHg7XHJcbiAgcmlnaHQ6IDI1cHg7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5jbG9zZTpob3ZlcixcclxuLmNsb3NlOmZvY3VzIHtcclxuICBjb2xvcjogIzg4ODg4ODtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5pbWctc2xpZGVzIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5jdXJzb3Ige1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaW1nIHtcclxuICBtYXJnaW4tYm90dG9tOiAtNHB4O1xyXG59XHJcbi5pbWFnZXMge1xyXG4gIG9wYWNpdHk6IDAuNztcclxufVxyXG4uYWN0aXZlLFxyXG4uaW1hZ2VzOmhvdmVyIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbmltZy5ob3Zlci1zaGFkb3cge1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuLmhvdmVyLXNoYWRvdzpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/battery-cards/battery-cards.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/battery-cards/battery-cards.component.ts ***!
  \**********************************************************/
/*! exports provided: BatteryCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatteryCardsComponent", function() { return BatteryCardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _batteries_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../batteries.service */ "./src/app/batteries.service.ts");
/* harmony import */ var _machines_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../machines.service */ "./src/app/machines.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var FileSaver = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
var BatteryCardsComponent = /** @class */ (function () {
    function BatteryCardsComponent(BS, MS, dialog) {
        var _this = this;
        this.BS = BS;
        this.MS = MS;
        this.dialog = dialog;
        this.CustomSearchBool = false;
        this.customSearch = [];
        this.Machines = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.Models = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.Modelss = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.Model = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.Batteries = [];
        this.B = false;
        this.Catergory = [];
        this.CatModels = [];
        this.MA = [];
        this.ManU = [];
        this.OEMS = [];
        this.MACHINES = [];
        this.MACHINE = {
            man: String,
            cat: [],
            model: []
        };
        this.machines = [];
        this.CATS = [];
        this.MODELS = [];
        this.BatteryUrl = '';
        this.MachineURL = '';
        this.SearchTest = false;
        this.Bool = [];
        this.test = this.BS.getBatteries().subscribe(function (data) {
            var bats = JSON.parse(data['_body']);
            var Batteries = bats['batteries'];
            for (var bat in Batteries) {
                var battery = {
                    name: Batteries[bat]['name'],
                    batteryDescription: Batteries[bat]['batteryDescription'],
                    voltage: Batteries[bat]['voltage'],
                    capacity: Batteries[bat]['capacity'],
                    energy: Batteries[bat]['energy'],
                    width: Batteries[bat]['width'],
                    len: Batteries[bat]['len'],
                    height: Batteries[bat]['height'],
                    weight: Batteries[bat]['weight'],
                    cellWeight: Batteries[bat]['cellWeight'],
                    image: Batteries[bat]['image'],
                    pdf: Batteries[bat]['pdf'],
                };
                _this.Bool.push(_this.B);
                _this.Batteries.push(battery);
            }
        });
        this.getMachines();
    }
    BatteryCardsComponent.prototype.downloadBatteryPDF = function (pdfName) {
        var PDFurl = "/batteries/" + pdfName + '/' + pdfName + '.pdf';
        FileSaver.saveAs(PDFurl, pdfName);
    };
    BatteryCardsComponent.prototype.downloadMachinePDF = function (oem, cat, model) {
        var pdfUrl = '/machines/' + oem + '/' + cat + '/' + model + '/' + oem + ' ' + cat + ' ' + model + '.pdf';
        var pdfName = oem + ' ' + cat + ' ' + model;
        FileSaver.saveAs(pdfUrl, pdfName);
        // FileSaver.saveAs(pdfUrl, pdfName);
    };
    BatteryCardsComponent.prototype.openModal = function (name) {
        this.BatteryUrl = "/batteries/" + name + "/" + name + ".png";
        document.getElementById('imgModal').style.display = "block";
    };
    BatteryCardsComponent.prototype.closeModal = function () {
        document.getElementById('imgModal').style.display = "none";
    };
    BatteryCardsComponent.prototype.openModalMachine = function (man, cat, model) {
        this.MachineURL = "/machines/" + man + "/" + cat + "/" + model + "/" + man + " " + cat + " " + model + ".png";
        document.getElementById('imgModal1').style.display = "block";
    };
    BatteryCardsComponent.prototype.closeModalMachine = function () {
        document.getElementById('imgModal1').style.display = "none";
    };
    BatteryCardsComponent.prototype.changeMan = function (event) {
        if (event.isUserInput) {
            this.CATS = [];
            for (var ma in this.machines) {
                // if (this.machines[ma].verified)
                // {
                if (event.source.value == this.machines[ma].OEM) {
                    this.USER_MAN = event.source.value;
                    if (!this.CATS.includes(this.machines[ma].catergory)) {
                        this.CATS.push(this.machines[ma].catergory);
                    }
                }
                // }
            }
            this.USER_CATEGORY = '';
            this.USERSEARCH = '';
        }
    };
    BatteryCardsComponent.prototype.changeCat = function (event) {
        this.USERSEARCH = '';
        if (event.isUserInput) {
            this.MODELS = [];
            for (var ma in this.machines) {
                if (this.USER_MAN == this.machines[ma].OEM) {
                    if (event.source.value == this.machines[ma].catergory) {
                        if (this.MODELS.includes(this.machines[ma].model)) {
                            //console.log(this.MODELS)
                        }
                        else {
                            this.MODELS.push(this.machines[ma].model);
                            // this.MachineURL = "/machines/"+this.USER_MAN+"/"+this.USER_CATEGORY+"/"+this.USERSEARCH+"/"+".png"+"?" + new Date().getTime();
                        }
                    }
                }
            }
        }
    };
    BatteryCardsComponent.prototype.Show = function () {
        //console.log(this.customSearch);
        //console.log(Object.keys(this.customSearch) );
        var keys = Object.keys(this.customSearch);
        //console.log(this.customSearch[keys[0]])
    };
    BatteryCardsComponent.prototype.checkCustomSearch = function () {
        if (Object.keys(this.customSearch).length > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    BatteryCardsComponent.prototype.ValidateCustomSearch = function (bat) {
        var correctCount = 0;
        var totalCount = 0;
        var batKeys = Object.keys(bat);
        var keys = Object.keys(this.customSearch);
        for (var keyNo in keys) {
            var SearchKey = keys[keyNo];
            if (this.customSearch[SearchKey] != '') {
                totalCount += 1;
                if (SearchKey == 'voltage') {
                    if (Math.abs(this.customSearch[SearchKey] - bat[SearchKey]) < 5) {
                        correctCount += 1;
                    }
                }
                if (SearchKey == 'capacity') {
                    if (this.customSearch[SearchKey] <= bat[SearchKey]) {
                        correctCount += 1;
                    }
                }
                if (SearchKey == 'energy') {
                    if (this.customSearch[SearchKey] <= bat[SearchKey]) {
                        correctCount += 1;
                    }
                }
                if (SearchKey == 'height') {
                    if (this.customSearch[SearchKey] >= bat[SearchKey]) {
                        correctCount += 1;
                    }
                }
                if (SearchKey == 'len') {
                    if (this.customSearch[SearchKey] >= bat[SearchKey]) {
                        correctCount += 1;
                    }
                    if (this.customSearch[SearchKey] < bat[SearchKey]) {
                        if (this.customSearch['width'] > bat['len'] && this.customSearch['len'] > bat['width']) {
                            correctCount += 1;
                        }
                    }
                }
                if (SearchKey == 'width') {
                    if (this.customSearch[SearchKey] >= bat[SearchKey]) {
                        correctCount += 1;
                    }
                    if (this.customSearch[SearchKey] < bat[SearchKey]) {
                        if (this.customSearch['width'] > bat['len'] && this.customSearch['len'] > bat['width']) {
                            correctCount += 1;
                        }
                    }
                }
            }
        }
        if (correctCount == totalCount) {
            return true;
        }
        else {
            return false;
        }
    };
    BatteryCardsComponent.prototype.SortMachines = function (machines) {
        var test = [];
        // //console.log(machines)
        for (var ma in machines) {
            // //console.log(machines[ma].OEM)
            var oem = machines[ma].OEM;
            var category = machines[ma].catergory;
            var model = machines[ma].model;
            if (this.OEMS.indexOf(oem) == -1) {
                this.OEMS.push(oem);
            }
            // //console.log(this.OEMS)
        }
    };
    BatteryCardsComponent.prototype.getMachines = function () {
        var _this = this;
        var a;
        this.MS.getMachines().subscribe(function (data) {
            var machineData = JSON.parse(data['_body']);
            a = machineData['machines'];
            for (var ma in a) {
                //if (a[ma].verified){
                _this.machines.push(a[ma]);
                //}
                _this.MACHINES.push(a[ma]);
            }
            _this.SortMachines(_this.machines);
        });
    };
    BatteryCardsComponent.prototype.CheckValid = function (Bat) {
        var MachineURL = '';
        var FractionOfCapacity = 1 / 3;
        // console.log(Bat)
        var counter = 0;
        // //console.log(this.MACHINES)
        for (var ma in this.MACHINES) {
            var totalCount = 0;
            if (this.machines[ma].model == this.USERSEARCH) {
                this.THISMACHINEWEIGHT = this.machines[ma].minWeight;
                // this.UpdateData['OEM']+'/'+this.UpdateData['catergory']+'/'+this.UpdateData['model']+'/'+this.UpdateData['OEM']+' '+this.UpdateData['catergory']+' '+this.UpdateData['model']+'.png'+"?" + new Date().getTime();
                MachineURL = "/machines/" + this.USER_MAN + "/" + this.USER_CATEGORY + "/" + this.USERSEARCH + "/" + this.USER_MAN + " " + this.USER_CATEGORY + " " + this.USERSEARCH + ".png";
                if (Math.abs(this.machines[ma].voltage - Bat.voltage) < 5) {
                    totalCount += 1;
                    // //console.log('Voltage meets requirments')
                }
                if (Number(this.machines[ma].height) > Number(Bat.height)) {
                    totalCount += 1;
                    // //console.log('Height meets requirments')
                }
                if (Number(this.machines[ma].width) > Number(Bat.width)) {
                    // //console.log('Width meets requirments')
                    totalCount += 1;
                }
                if (Number(this.machines[ma].width) < Number(Bat.width)) {
                    if (this.machines[ma].width > Bat.len && this.MACHINES[ma].len > Bat.width) {
                        totalCount += 1;
                    }
                }
                if (Number(this.machines[ma].len) > Number(Bat.len)) {
                    totalCount += 1;
                }
                if (Number(this.machines[ma].len) < Number(Bat.len)) {
                    if (this.machines[ma].width > Bat.len && this.MACHINES[ma].len > Bat.width) {
                        totalCount += 1;
                    }
                }
                if (this.machines[ma].minCap * FractionOfCapacity < Bat.capacity) {
                    totalCount += 1;
                }
                if (totalCount == 5) {
                    return true;
                }
                if (totalCount != 5) {
                    return false;
                }
            }
        }
    };
    BatteryCardsComponent.ctorParameters = function () { return [
        { type: _batteries_service__WEBPACK_IMPORTED_MODULE_2__["BatteriesService"] },
        { type: _machines_service__WEBPACK_IMPORTED_MODULE_3__["MachinesService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
    ]; };
    BatteryCardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-battery-cards',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./battery-cards.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/battery-cards/battery-cards.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./battery-cards.component.css */ "./src/app/battery-cards/battery-cards.component.css")).default]
        })
    ], BatteryCardsComponent);
    return BatteryCardsComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".LoginForm{\r\n    display:-webkit-box;\r\n    display:flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.LoginCard{\r\n    \r\n    display: -webkit-box;\r\n    \r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFZO0lBQVosWUFBWTtJQUNaLHdCQUF1QjtZQUF2Qix1QkFBdUI7QUFDM0I7O0FBRUE7O0lBRUksb0JBQWE7O0lBQWIsYUFBYTtJQUNiLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIseUJBQW1CO1lBQW5CLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuTG9naW5Gb3Jte1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5Mb2dpbkNhcmR7XHJcbiAgICBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth-user.service */ "./src/app/auth-user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.Login = function () {
        var _this = this;
        this.auth.Login(this.USERNAME, this.PASSWORD).subscribe(function (data) {
            var ans = JSON.parse(data['_body']);
            if (ans['message'] == 'Successful') {
                _this.router.navigate(['/addProducts']);
            }
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _auth_user_service__WEBPACK_IMPORTED_MODULE_2__["AuthUserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/machines.service.ts":
/*!*************************************!*\
  !*** ./src/app/machines.service.ts ***!
  \*************************************/
/*! exports provided: MachinesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachinesService", function() { return MachinesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");



var MachinesService = /** @class */ (function () {
    function MachinesService(http) {
        this.http = http;
        this.url = '/api/machines';
        //DeleteMachineImage
        this.deleteImageUrl = '/api/DeleteMachineImage';
    }
    MachinesService.prototype.getMachines = function () {
        return this.http.get(this.url);
    };
    MachinesService.prototype.deleteImage = function (url) {
        console.log(url);
        return this.http.post(this.deleteImageUrl, { url: url });
    };
    MachinesService.prototype.addMachine = function (Machine) {
        var machine = {
            OEM: Machine.OEM,
            catergory: Machine.catergory,
            model: Machine.model,
            voltage: Machine.voltage,
            minCap: Machine.minCap,
            maxCap: Machine.maxCap,
            energy: Machine.energy,
            minWeight: Machine.minWeight,
            width: Machine.width,
            len: Machine.len,
            height: Machine.height,
            verified: Machine.verified,
            image: Machine.image,
            pdf: Machine.pdf
        };
        console.log(Image);
        //console.log('Adding Battery');
        //console.log('Battery Added');
        return this.http.post(this.url, { machine: machine });
    };
    MachinesService.prototype.DelMachine = function (id) {
        var test = { id: id };
        var deleteUrl = this.url + '/' + id;
        return this.http.delete(deleteUrl);
    };
    MachinesService.prototype.UpdateMachine = function (machine) {
        var id = machine['_id'];
        //console.log(machine)
        var updateUrl = this.url + '/' + id;
        return this.http.put(updateUrl, { machine: machine });
    };
    MachinesService.prototype.deleteBatteryPDF = function (name) {
        var URL = '/api/DeleteMachinePDF';
        console.log(name);
        return this.http.post(URL, { name: name });
    };
    MachinesService.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
    ]; };
    MachinesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], MachinesService);
    return MachinesService;
}());



/***/ }),

/***/ "./src/app/machines/machines.component.css":
/*!*************************************************!*\
  !*** ./src/app/machines/machines.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Structure */\r\ntable {\r\n    width: 100%;\r\n  }\r\n.mat-form-field {\r\n    font-size: 14px;\r\n    width: 14%;\r\n    margin: 0 1% 0 0;\r\n  }\r\n.mat-raised-button{\r\n    width: 10%;\r\n  }\r\n.mat-card{\r\n    margin-bottom: 1%;\r\n\r\n  }\r\n.ver{\r\n    margin-right: 1rem;\r\n  }\r\n.ng-container{\r\n    text-align: center;\r\n    -webkit-box-pack:center;\r\n            justify-content:center;\r\n    padding: 2rem 2rem 2rem 2rem;\r\n    width: 30rem;\r\n  }\r\n.mat-header-cell {\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column; \r\n   text-align: center;\r\n   -webkit-box-pack: center;\r\n           justify-content: center;\r\n   padding-right: 2rem;\r\n   width: 30rem;\r\n }\r\n.mat-cell {\r\n   text-align: center;\r\n   -webkit-box-pack:center;\r\n           justify-content:center;\r\n   padding-right: 2rem;\r\n   width: 30rem;\r\n }\r\ntd , th {\r\n   text-align: center;\r\n   -webkit-box-pack:center;\r\n           justify-content:center;\r\n   white-space: normal;\r\n   word-wrap: break-word;\r\n   max-width: 200px;\r\n}\r\n.mat-card{\r\n  width: auto;\r\n}\r\n.mat-grid-tile .mat-grid-tile-header>*, .mat-grid-tile .mat-grid-tile-footer>* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-weight: normal;\r\n  font-size: inherit;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFjaGluZXMvbWFjaGluZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjO0FBQ2Q7SUFDSSxXQUFXO0VBQ2I7QUFFQTtJQUNFLGVBQWU7SUFDZixVQUFVO0lBQ1YsZ0JBQWdCO0VBQ2xCO0FBRUE7SUFDRSxVQUFVO0VBQ1o7QUFFQTtJQUNFLGlCQUFpQjs7RUFFbkI7QUFFQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHVCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLFlBQVk7RUFDZDtBQUVBO0lBQ0UsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7R0FDdkIsa0JBQWtCO0dBQ2xCLHdCQUF1QjtXQUF2Qix1QkFBdUI7R0FDdkIsbUJBQW1CO0dBQ25CLFlBQVk7Q0FDZDtBQUVBO0dBQ0Usa0JBQWtCO0dBQ2xCLHVCQUFzQjtXQUF0QixzQkFBc0I7R0FDdEIsbUJBQW1CO0dBQ25CLFlBQVk7Q0FDZDtBQUVBO0dBQ0Usa0JBQWtCO0dBQ2xCLHVCQUFzQjtXQUF0QixzQkFBc0I7R0FDdEIsbUJBQW1CO0dBQ25CLHFCQUFxQjtHQUNyQixnQkFBZ0I7QUFDbkI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbWFjaGluZXMvbWFjaGluZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFN0cnVjdHVyZSAqL1xyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHdpZHRoOiAxNCU7XHJcbiAgICBtYXJnaW46IDAgMSUgMCAwO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1yYWlzZWQtYnV0dG9ue1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICB9XHJcblxyXG4gIC5tYXQtY2FyZHtcclxuICAgIG1hcmdpbi1ib3R0b206IDElO1xyXG5cclxuICB9XHJcblxyXG4gIC52ZXJ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgfVxyXG5cclxuICAubmctY29udGFpbmVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDJyZW0gMnJlbSAycmVtIDJyZW07XHJcbiAgICB3aWR0aDogMzByZW07XHJcbiAgfVxyXG5cclxuICAubWF0LWhlYWRlci1jZWxsIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xyXG4gICB3aWR0aDogMzByZW07XHJcbiB9XHJcbiBcclxuIC5tYXQtY2VsbCB7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgcGFkZGluZy1yaWdodDogMnJlbTtcclxuICAgd2lkdGg6IDMwcmVtO1xyXG4gfVxyXG5cclxuIHRkICwgdGgge1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgbWF4LXdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLm1hdC1jYXJke1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4ubWF0LWdyaWQtdGlsZSAubWF0LWdyaWQtdGlsZS1oZWFkZXI+KiwgLm1hdC1ncmlkLXRpbGUgLm1hdC1ncmlkLXRpbGUtZm9vdGVyPioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/machines/machines.component.ts":
/*!************************************************!*\
  !*** ./src/app/machines/machines.component.ts ***!
  \************************************************/
/*! exports provided: MachinesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachinesComponent", function() { return MachinesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _batteries_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../batteries.service */ "./src/app/batteries.service.ts");
/* harmony import */ var _machines_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../machines.service */ "./src/app/machines.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");











var uploadAPI = '/api/MachineUpload';
// const UpdateUploadAPI = '/api/UpdateImageUpload';
var uploadPDFAPI = '/api/MachinePDFUpload';
var FileSaver = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
var MachinesComponent = /** @class */ (function () {
    function MachinesComponent(http, BS, MS, sanitizer) {
        this.http = http;
        this.BS = BS;
        this.MS = MS;
        this.sanitizer = sanitizer;
        this.Batteries = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]();
        this.BatteryNames = [];
        this.data = null;
        this.localImageUrl = '';
        this.localUpdateImageUrl = '';
        this.selectedImage = null;
        this.isThereImage = false;
        this.UpdateImageUrl = '';
        this.ShowAdd = false;
        this.Update = false;
        this.UpdateImage = false;
        this.UpdateData = [];
        this.UpdatePDF = false;
        this.AddMachineData = [];
        this.PDFtoUpload = false;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_10__["FileUploader"]({ url: uploadAPI, itemAlias: 'file' });
        // public UpdateUploader: FileUploader = new FileUploader({ url: UpdateUploadAPI, itemAlias: 'UpdateFile' });
        this.PDFuploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_10__["FileUploader"]({ allowedFileType: ['pdf'], url: uploadPDFAPI, itemAlias: 'file' });
        this.displayedColumns = ['OEM', 'Catergory', 'Model', 'voltage', 'minCap', 'maxCap', 'Energy', 'minWeight', 'Width', 'Length', 'Height', 'verified', 'UpdateButtons', 'DelButtons'];
        this.getTableData();
        this.getBats();
    }
    MachinesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getTableData();
        this.uploader.onAfterAddingFile = function (file) {
            _this.isThereImage = true;
            _this.AddMachineData['image'] = true;
            _this.UpdateData['image'] = true;
            file.withCredentials = false;
            var url = (window.URL) ? window.URL.createObjectURL(file._file) : window.webkitURL.createObjectURL(file._file);
            _this.localImageUrl = url;
            console.log(_this.localImageUrl);
            _this.UpdateImage = false;
        };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            console.log('FileUpload:uploaded successfully:', item, status, response);
            _this.localImageUrl = '';
            alert('Your file has been uploaded successfully');
        };
        this.PDFuploader.onAfterAddingFile = function (file) {
            _this.PDFtoUpload = true;
            file.withCredentials = false;
            _this.AddMachineData['pdf'] = true;
            _this.UpdateData['pdf'] = true;
            console.log('PDF file waiting');
        };
        this.PDFuploader.onCompleteItem = function (item, response, status, headers) {
            console.log('FileUpload:uploaded successfully:', item, status, response);
            _this.PDFtoUpload = false;
            alert('Your PDF has been uploaded successfully');
            console.log('PDF UPLOADED');
        };
    };
    MachinesComponent.prototype.applyFilter = function (event) {
        var test = event.target.value;
        var filterValue = test.toString();
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    MachinesComponent.prototype.downloadPdf = function (oem, cat, model) {
        var pdfUrl = '/machines/' + oem + '/' + cat + '/' + model + '/' + oem + ' ' + cat + ' ' + model + '.pdf';
        var pdfName = oem + ' ' + cat + ' ' + model;
        FileSaver.saveAs(pdfUrl, pdfName);
    };
    MachinesComponent.prototype.DeleteImage = function () {
        var _this = this;
        this.UpdateData['image'] = false;
        this.UpdateData['DelImage'] = true;
        this.Update = false;
        console.log(this.UpdateData);
        this.localImageUrl = '';
        var url = this.UpdateData['OEM'] + '/' + this.UpdateData['catergory'] + '/' + this.UpdateData['model'] + '/' + this.UpdateData['OEM'] + ' ' + this.UpdateData['catergory'] + ' ' + this.UpdateData['model'] + '.png';
        console.log(url);
        this.MS.deleteImage(url).subscribe(function (data) {
            console.log(data);
            console.log(_this.UpdateData);
            _this.MS.UpdateMachine(_this.UpdateData).subscribe(function (data) { console.log(data); });
        });
    };
    MachinesComponent.prototype.preview = function (files) {
        var _this = this;
        if (files.length === 0)
            return;
        var mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            this.message = "Only images are supported.";
            return;
        }
        this.selectedImage = files[0];
        var reader = new FileReader();
        this.imagePath = files;
        reader.readAsDataURL(files[0]);
        reader.onload = function (_event) {
            _this.imgURL = reader.result;
        };
    };
    MachinesComponent.prototype.onFileSelected = function (event) {
        this.selectedImage = event.target.files[0];
        console.log(this.AddMachineData);
        console.log(this.selectedImage);
    };
    MachinesComponent.prototype.addBattery = function () {
        //console.log(this.AddMachineData);
        var _this = this;
        this.MS.addMachine(this.AddMachineData).subscribe(function (data) {
            var res = JSON.parse(data['_body']);
            console.log(res['message']);
            if (res['message'] == 'Successful') {
                if (_this.isThereImage) {
                    _this.uploader.uploadAll();
                    _this.localImageUrl = '';
                }
                if (_this.PDFtoUpload) {
                    _this.PDFuploader.uploadAll();
                    console.log('Uploading PDF... ');
                }
            }
            _this.getTableData();
            for (var x in _this.AddMachineData) {
                //console.log( this.AddMachineData[x],x)
                _this.AddMachineData[x] = null;
            }
            _this.ShowAdd = !_this.ShowAdd;
        });
    };
    MachinesComponent.prototype.DisplayUpdateData = function (element) {
        this.Update = !this.Update;
        //console.log(element)
        this.UpdateData = element;
        if (this.UpdateData['image']) {
            this.UpdateImageUrl = this.UpdateData['OEM'] + '/' + this.UpdateData['catergory'] + '/' + this.UpdateData['model'] + '/' + this.UpdateData['OEM'] + ' ' + this.UpdateData['catergory'] + ' ' + this.UpdateData['model'] + '.png' + "?" + new Date().getTime();
        }
    };
    MachinesComponent.prototype.deletePDF = function (oem, cat, model) {
        var _this = this;
        var name = oem + '/' + cat + '/' + model + '/' + oem + ' ' + cat + ' ' + model;
        this.UpdateData['pdf'] = false;
        this.MS.deleteBatteryPDF(name).subscribe(function (data) {
            console.log(data);
            _this.UpdateMachineData(_this.UpdateData);
        });
    };
    MachinesComponent.prototype.UpdateImageURL = function () {
        this.UpdateImageUrl = this.UpdateImageUrl + "?" + new Date().getTime();
    };
    MachinesComponent.prototype.deleteData = function (i) {
        var _this = this;
        console.log(i);
        console.log(this.dataSource);
        console.log(this.dataSource['filteredData'][i]['_id']);
        var DelPicName = '';
        var machineId = this.dataSource['filteredData'][i]['_id'];
        if (this.dataSource['filteredData'][i]['image']) {
            DelPicName = this.dataSource['filteredData'][i]['OEM'] + " " + this.dataSource['filteredData'][i]['catergory'] + ' ' + this.dataSource['filteredData'][i]['model'];
            console.log('This is the pic name: ' + DelPicName);
        }
        else {
            DelPicName = 'There is no image';
            console.log('There is no image');
        }
        // //console.log(this.dataSource[i]['_id'])
        this.MS.DelMachine(machineId).subscribe(function (data) {
            // //console.log(data);
            _this.getTableData();
        });
    };
    MachinesComponent.prototype.UpdateMachineData = function (updateData) {
        //console.log(updateData);
        var _this = this;
        this.MS.UpdateMachine(updateData).subscribe(function (data) {
            //console.log(data)
            for (var x in _this.UpdateMachineData) {
                //console.log( this.UpdateMachineData[x],x)
                _this.UpdateMachineData[x] = null;
            }
            _this.Update = !_this.Update;
            var res = JSON.parse(data['_body']);
            console.log(res['message']);
            if (res['message'] == 'Machine Info Updated') {
                if (_this.isThereImage) {
                    _this.uploader.uploadAll();
                }
                if (_this.PDFtoUpload) {
                    _this.PDFuploader.uploadAll();
                    console.log('Uploading PDF... ');
                }
            }
        });
    };
    MachinesComponent.prototype.getTableData = function () {
        var _this = this;
        this.MS.getMachines().subscribe(function (data) {
            var machineData = JSON.parse(data['_body']);
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](machineData['machines']);
            _this.dataSource.paginator = _this.paginator;
        });
    };
    MachinesComponent.prototype.getBats = function () {
        var _this = this;
        this.BS.getBatteries().subscribe(function (data) {
            var batteries = JSON.parse(data['_body']);
            var bats = batteries['batteries'];
            for (var bat in bats) {
                _this.BatteryNames.push(bats[bat].name);
                // //console.log(bats[bat].name)
            }
            // //console.log(bats);
        });
    };
    MachinesComponent.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_6__["Http"] },
        { type: _batteries_service__WEBPACK_IMPORTED_MODULE_7__["BatteriesService"] },
        { type: _machines_service__WEBPACK_IMPORTED_MODULE_8__["MachinesService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
    ], MachinesComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true })
    ], MachinesComponent.prototype, "sort", void 0);
    MachinesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-machines',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./machines.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/machines/machines.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./machines.component.css */ "./src/app/machines/machines.component.css")).default]
        })
    ], MachinesComponent);
    return MachinesComponent;
}());



/***/ }),

/***/ "./src/app/tabel/tabel.component.css":
/*!*******************************************!*\
  !*** ./src/app/tabel/tabel.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Structure */\r\ntable {\r\n    width: 100%;\r\n  }\r\n.mat-form-field {\r\n    font-size: 14px;\r\n    width: 15%;\r\n    margin: 0 1% 0 0;\r\n  }\r\n.mat-grid-tile .mat-grid-tile-header>*, .mat-grid-tile .mat-grid-tile-footer>* {\r\n    margin: 0;\r\n    padding: 0;\r\n    font-weight: normal;\r\n    font-size: inherit;\r\n  }\r\n.mat-card{\r\n    margin-bottom: 1%;\r\n\r\n  }\r\n.mat-raised-button{\r\n   \r\n    text-align: center;\r\n    -webkit-box-pack:center;\r\n            justify-content:center;\r\n    white-space: normal;\r\n    word-wrap: break-word;\r\n    \r\n  }\r\n.ver{\r\n    margin-right: 1rem;\r\n  }\r\n.ng-container{\r\n    text-align: center;\r\n    -webkit-box-pack:center;\r\n            justify-content:center;\r\n    padding: 2rem 2rem 2rem 2rem;\r\n    width: 30rem;\r\n  }\r\n.mat-header-cell {\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column; \r\n   text-align: center;\r\n   -webkit-box-pack: center;\r\n           justify-content: center;\r\n   padding-right: 2rem;\r\n   width: 30rem;\r\n }\r\n.mat-cell {\r\n   text-align: center;\r\n   -webkit-box-pack:center;\r\n           justify-content:center;\r\n   padding-right: 2rem;\r\n   width: 30rem;\r\n }\r\ntd , th {\r\n   text-align: center;\r\n   -webkit-box-pack:center;\r\n           justify-content:center;\r\n   white-space: normal;\r\n   word-wrap: break-word;\r\n   max-width: 200px;\r\n}\r\n.mat-card{\r\n  width: auto;\r\n}\r\n.mat-grid-tile .mat-grid-tile-header>*, .mat-grid-tile .mat-grid-tile-footer>* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-weight: normal;\r\n  font-size: inherit;\r\n}\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiZWwvdGFiZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjO0FBQ2Q7SUFDSSxXQUFXO0VBQ2I7QUFFQTtJQUNFLGVBQWU7SUFDZixVQUFVO0lBQ1YsZ0JBQWdCO0VBQ2xCO0FBSUE7SUFDRSxTQUFTO0lBQ1QsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixrQkFBa0I7RUFDcEI7QUFFQTtJQUNFLGlCQUFpQjs7RUFFbkI7QUFHQTs7SUFFRSxrQkFBa0I7SUFDbEIsdUJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIscUJBQXFCOztFQUV2QjtBQUtBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsdUJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsWUFBWTtFQUNkO0FBRUE7SUFDRSw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtHQUN2QixrQkFBa0I7R0FDbEIsd0JBQXVCO1dBQXZCLHVCQUF1QjtHQUN2QixtQkFBbUI7R0FDbkIsWUFBWTtDQUNkO0FBRUE7R0FDRSxrQkFBa0I7R0FDbEIsdUJBQXNCO1dBQXRCLHNCQUFzQjtHQUN0QixtQkFBbUI7R0FDbkIsWUFBWTtDQUNkO0FBRUE7R0FDRSxrQkFBa0I7R0FDbEIsdUJBQXNCO1dBQXRCLHNCQUFzQjtHQUN0QixtQkFBbUI7R0FDbkIscUJBQXFCO0dBQ3JCLGdCQUFnQjtBQUNuQjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC90YWJlbC90YWJlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU3RydWN0dXJlICovXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIG1hcmdpbjogMCAxJSAwIDA7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIC5tYXQtZ3JpZC10aWxlIC5tYXQtZ3JpZC10aWxlLWhlYWRlcj4qLCAubWF0LWdyaWQtdGlsZSAubWF0LWdyaWQtdGlsZS1mb290ZXI+KiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICB9XHJcblxyXG4gIC5tYXQtY2FyZHtcclxuICAgIG1hcmdpbi1ib3R0b206IDElO1xyXG5cclxuICB9XHJcblxyXG5cclxuICAubWF0LXJhaXNlZC1idXR0b257XHJcbiAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICBcclxuICB9XHJcblxyXG4gXHJcbiAgXHJcblxyXG4gIC52ZXJ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgfVxyXG5cclxuICAubmctY29udGFpbmVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDJyZW0gMnJlbSAycmVtIDJyZW07XHJcbiAgICB3aWR0aDogMzByZW07XHJcbiAgfVxyXG5cclxuICAubWF0LWhlYWRlci1jZWxsIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xyXG4gICB3aWR0aDogMzByZW07XHJcbiB9XHJcbiBcclxuIC5tYXQtY2VsbCB7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgcGFkZGluZy1yaWdodDogMnJlbTtcclxuICAgd2lkdGg6IDMwcmVtO1xyXG4gfVxyXG5cclxuIHRkICwgdGgge1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgbWF4LXdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLm1hdC1jYXJke1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4ubWF0LWdyaWQtdGlsZSAubWF0LWdyaWQtdGlsZS1oZWFkZXI+KiwgLm1hdC1ncmlkLXRpbGUgLm1hdC1ncmlkLXRpbGUtZm9vdGVyPioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG59XHJcbiAgIl19 */");

/***/ }),

/***/ "./src/app/tabel/tabel.component.ts":
/*!******************************************!*\
  !*** ./src/app/tabel/tabel.component.ts ***!
  \******************************************/
/*! exports provided: TabelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabelComponent", function() { return TabelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _batteries_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../batteries.service */ "./src/app/batteries.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _machines_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../machines.service */ "./src/app/machines.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");








// const ELEMENT_DATA: Battery[] =[];
var uploadAPI = '/api/BatteryUpload';
var uploadPDFAPI = '/api/BatteryPDFUpload';
var FileSaver = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/**
 * @title Table with filtering
 */
var TabelComponent = /** @class */ (function () {
    function TabelComponent(http, BS, MS, sanitizer) {
        var _this = this;
        this.http = http;
        this.BS = BS;
        this.MS = MS;
        this.sanitizer = sanitizer;
        this.disableSelect = true;
        this.Machines = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.Models = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.data = null;
        this.dataSource = [];
        this.ShowAdd = false;
        this.Update = false;
        this.UpdateData = [];
        this.Catergory = [];
        this.CatModels = [];
        this.localImageUrl = '';
        this.PDFurl = '';
        this.SomethingToUpload = false;
        this.PDFtoUpload = false;
        this.DeleteImage = false;
        this.UpdatePDF = false;
        this.isThereImage = false;
        this.AddBatteryData = [];
        this.UpdateImageUrl = '';
        this.UpdateImage = false;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploader"]({ url: uploadAPI, itemAlias: 'file' });
        this.PDFuploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploader"]({ allowedFileType: ['pdf'], url: uploadPDFAPI, itemAlias: 'file' });
        this.displayedColumns = ['name', 'description', 'voltage', 'capacity', 'energy', 'width', 'length', 'height', 'weight', 'UpdateButtons', 'DelButtons'];
        this.getTableData();
        this.getMachines();
        this.uploader.onAfterAddingFile = function (file) {
            _this.SomethingToUpload = true;
            _this.isThereImage = true;
            _this.AddBatteryData['image'] = true;
            _this.UpdateData['image'] = true;
            _this.UpdateImage = false;
            // this.UpdateData['image'] = true
            file.withCredentials = false;
            var url = (window.URL) ? window.URL.createObjectURL(file._file) : window.webkitURL.createObjectURL(file._file);
            _this.localImageUrl = url;
            console.log(_this.localImageUrl);
        };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            console.log('FileUpload:uploaded successfully:', item, status, response);
            _this.SomethingToUpload = false;
            _this.localImageUrl = '';
            alert('Your file has been uploaded successfully');
        };
        this.PDFuploader.onAfterAddingFile = function (file) {
            _this.PDFtoUpload = true;
            file.withCredentials = false;
            _this.AddBatteryData['pdf'] = true;
            _this.UpdateData['pdf'] = true;
            console.log('PDF file waiting');
        };
        this.PDFuploader.onCompleteItem = function (item, response, status, headers) {
            console.log('FileUpload:uploaded successfully:', item, status, response);
            _this.PDFtoUpload = false;
            alert('Your PDF has been uploaded successfully');
            console.log('PDF UPLOADED');
        };
    }
    TabelComponent.prototype.downloadPdf = function (pdfUrl, pdfName) {
        FileSaver.saveAs(pdfUrl, pdfName);
    };
    TabelComponent.prototype.addBattery = function () {
        var _this = this;
        //console.log(this.AddBatteryData);
        this.BS.addBattery(this.AddBatteryData).subscribe(function (data) {
            //console.log(data);
            _this.getTableData();
            for (var x in _this.AddBatteryData) {
                //console.log( this.AddBatteryData[x],x)
                _this.AddBatteryData[x] = null;
            }
            var res = JSON.parse(data['_body']);
            if (res['message'] == 'Successful') {
                if (_this.isThereImage) {
                    _this.uploader.uploadAll();
                    _this.localImageUrl = '';
                }
                if (_this.PDFtoUpload) {
                    _this.PDFuploader.uploadAll();
                    console.log('Uploading PDF... ');
                }
                _this.ShowAdd = !_this.ShowAdd;
            }
        });
    };
    TabelComponent.prototype.DisplayUpdateData = function (Bat) {
        this.Update = !this.Update;
        this.UpdateData = Bat;
        if (Bat.image) {
            // this.UpdateImage = Bat.image;
            this.UpdateImageUrl = "/batteries/" + Bat.name + '/' + Bat.name + '.png' + "?" + new Date().getTime();
        }
        if (Bat.pdf) {
            this.PDFurl = "/batteries/" + Bat.name + '/' + Bat.name + '.pdf';
        }
    };
    TabelComponent.prototype.deleteImage = function (name) {
        var _this = this;
        this.DeleteImage = true;
        this.UpdateImageUrl = '';
        this.UpdateImage = true;
        this.UpdateData['image'] = false;
        this.BS.deleteBatteryImage(name).subscribe(function (data) {
            console.log(data);
            _this.UpdateBatData(_this.UpdateData);
        });
    };
    TabelComponent.prototype.deletePDF = function (name) {
        var _this = this;
        this.UpdateData['pdf'] = false;
        this.BS.deleteBatteryPDF(name).subscribe(function (data) {
            console.log(data);
            _this.UpdateBatData(_this.UpdateData);
        });
    };
    TabelComponent.prototype.deleteData = function (i) {
        var _this = this;
        //console.log(i);
        var batId = this.dataSource[i]['_id'];
        //console.log(this.dataSource[i]['_id'])
        this.BS.DelBat(batId).subscribe(function (data) {
            //console.log(data);
            _this.getTableData();
        });
    };
    TabelComponent.prototype.UpdateBatData = function (updateData) {
        //console.log(updateData);
        var _this = this;
        this.BS.UpdateBat(updateData).subscribe(function (data) {
            console.log(data);
            for (var x in _this.UpdateBatData) {
                //console.log( this.UpdateBatData[x],x)
                _this.UpdateBatData[x] = null;
            }
            _this.Update = !_this.Update;
            var res = JSON.parse(data['_body']);
            console.log(res['message']);
            if (res['message'] == 'Battery Info Updated') {
                if (_this.SomethingToUpload) {
                    console.log('Uploading Image');
                    _this.uploader.uploadAll();
                }
                if (_this.PDFtoUpload) {
                    _this.PDFuploader.uploadAll();
                }
            }
            _this.getTableData();
        });
    };
    TabelComponent.prototype.getTableData = function () {
        var _this = this;
        this.BS.getBatteries().subscribe(function (data) {
            var batteryData = JSON.parse(data['_body']);
            _this.dataSource = batteryData['batteries'];
            console.log(_this.dataSource);
        });
    };
    TabelComponent.prototype.getMachines = function () {
        var _this = this;
        var a = [];
        this.MS.getMachines().subscribe(function (data) {
            var machineData = JSON.parse(data['_body']);
            var machines = machineData['machines'];
            for (var ma in machines) {
                if (_this.Catergory.indexOf(machines[ma].catergory) == -1) {
                    _this.Catergory.push(machines[ma].catergory);
                }
            }
            // //console.log(this.Catergory)
            for (var cat in _this.Catergory) {
                // //console.log(cat)
                var temp = [];
                for (var ma in machines) {
                    if (_this.Catergory[cat] == machines[ma].catergory) {
                        temp.push(machines[ma].model);
                    }
                    // //console.log(temp)
                }
                var test = {
                    cat: _this.Catergory[cat],
                    models: temp
                };
                _this.CatModels.push(test);
            }
            // //console.log(this.CatModels)
        });
    };
    TabelComponent.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] },
        { type: _batteries_service__WEBPACK_IMPORTED_MODULE_3__["BatteriesService"] },
        { type: _machines_service__WEBPACK_IMPORTED_MODULE_5__["MachinesService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] }
    ]; };
    TabelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tabel',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tabel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabel/tabel.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tabel.component.css */ "./src/app/tabel/tabel.component.css")).default]
        })
    ], TabelComponent);
    return TabelComponent;
}());



/***/ }),

/***/ "./src/app/test/test.component.css":
/*!*****************************************!*\
  !*** ./src/app/test/test.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QvdGVzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/test/test.component.ts":
/*!****************************************!*\
  !*** ./src/app/test/test.component.ts ***!
  \****************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestComponent = /** @class */ (function () {
    function TestComponent() {
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    TestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./test.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/test/test.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./test.component.css */ "./src/app/test/test.component.css")).default]
        })
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "./src/app/toolbar/toolbar.component.css":
/*!***********************************************!*\
  !*** ./src/app/toolbar/toolbar.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".Logo{\r\n    height: 50px;\r\n    width: auto;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.loginBtn{\r\n    position: absolute;\r\n    right: 2%;\r\n    margin: 0;\r\n  \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsU0FBUzs7QUFFYiIsImZpbGUiOiJzcmMvYXBwL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkxvZ297XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5sb2dpbkJ0bntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAyJTtcclxuICAgIG1hcmdpbjogMDtcclxuICBcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/toolbar/toolbar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/toolbar/toolbar.component.ts ***!
  \**********************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent() {
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toolbar',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./toolbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/toolbar/toolbar.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./toolbar.component.css */ "./src/app/toolbar/toolbar.component.css")).default]
        })
    ], ToolbarComponent);
    return ToolbarComponent;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Documents\Balancell\balancellTabel\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map