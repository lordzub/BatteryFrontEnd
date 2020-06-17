function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<app-toolbar></app-toolbar>\n<!-- <tabel></tabel> -->\n\n\n<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/battery-cards/battery-cards.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/battery-cards/battery-cards.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBatteryCardsBatteryCardsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class='grad'>\n\n    <!-- <input matInput class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"searchText\" autocomplete=\"off\" placeholder=\"Enter model\"> -->\n\n<mat-card>\n    <span *ngIf=\"!CustomSearchBool\">\n    <mat-label>Machine Search</mat-label>\n    <br>\n    <br>\n\n    <mat-form-field >\n        <mat-label>Manufacturer</mat-label>\n        <mat-select [formControl]=\"Modelss\" [(ngModel)]=\"USER_MAN\">\n\n    \n        <mat-option (onSelectionChange)=\"changeMan($event)\" *ngFor=\"let oem of OEMS; \"[value]=\"oem\" >\n          {{oem}}\n        </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n    <mat-form-field *ngIf=\"USER_MAN\" >\n        <mat-label>Equipment Category</mat-label>\n        <mat-select [formControl]=\"Models\" [(ngModel)]=\"USER_CATEGORY\">\n\n    <!-- <span *ngFor=\"let cat of CatModels; \">\n        <span *ngIf=\"cat.oem == USER_MAN\"> -->\n        <mat-option (onSelectionChange)=\"changeCat($event)\" *ngFor=\"let c of CATS\" [value]=\"c\" >\n          {{c}}\n        </mat-option>\n    <!-- </span>\n    </span> -->\n\n        </mat-select>\n      </mat-form-field>\n\n\n      <mat-form-field *ngIf=\"USER_CATEGORY\" >\n        <mat-label>Models</mat-label>\n        <mat-select [formControl]=\"Model\"  [(ngModel)] = \"USERSEARCH\">\n            <mat-option>Model</mat-option>\n            <!-- <span *ngFor=\"let cat of CatModels; \">\n                <span *ngIf=\"cat.oem == USER_MAN \">\n\n                    <span *ngFor=\"let c of cat.cat\">\n                        \n                     <span *ngIf=\"c == USER_CATEGORY\"> -->\n\n\n                        \n                         <span >\n                        <mat-option *ngFor=\"let model of MODELS\"  [value]=\"model\" >\n                            {{model}}\n                          </mat-option>\n\n\n                        </span>\n                    <!-- </span>\n                </span>\n\n            </span>\n            </span> -->\n        </mat-select>\n      </mat-form-field>\n      <span *ngFor=\"let ma of MACHINES\">\n          <span *ngIf=\"USERSEARCH == ma.model\">\n            <p>Voltage: {{ma.voltage}} V</p>\n            <p>Capacity: {{ma.minCap}} Ah</p>\n            <p>Energy: {{ma.energy}} kWh</p>\n\n            <p *ngIf=\"ma.width > 0\">Width: {{ma.width}} mm</p>\n            <p *ngIf=\"ma.len > 0\">Length: {{ma.len}} mm</p>\n            <p *ngIf=\"ma.height > 0\">Height: {{ma.height}} mm</p>\n          </span>\n        \n\n    </span>\n</span>\n<br>\n<span *ngIf=\"!CustomSearchBool\">\n <button mat-button (click) ='CustomSearchBool = !CustomSearchBool'>Custom search</button>\n</span>\n<span *ngIf=\"CustomSearchBool\">\n    <button mat-button (click) ='CustomSearchBool = !CustomSearchBool'>Machine search</button>\n   </span>\n\n <br>\n <br>\n<span *ngIf=\"CustomSearchBool\">\n\n<mat-form-field>\n    <mat-label>Battery Voltage</mat-label>\n    <input matInput  placeholder=\"48\" [(ngModel)]=\"customSearch.voltage\">\n</mat-form-field>\n\n<mat-form-field>\n<mat-label>Battery Capacity </mat-label>\n<input matInput  placeholder=\"530\" [(ngModel)]=\"customSearch.capacity\">\n</mat-form-field>\n\n<mat-form-field>\n<mat-label>Battery Energy (kWh)</mat-label>\n<input matInput  placeholder=\"40.8\" [(ngModel)]=\"customSearch.energy\">\n</mat-form-field>\n\n<mat-form-field>\n<mat-label>Width</mat-label>\n<input matInput  placeholder=\"530\" [(ngModel)]=\"customSearch.width\">\n</mat-form-field>\n\n<mat-form-field>\n<mat-label>Length</mat-label>\n<input matInput  placeholder=\"896\" [(ngModel)]=\"customSearch.len\">\n</mat-form-field>\n\n  \n<mat-form-field>\n<mat-label>Height</mat-label>\n<input matInput  placeholder=\"530\" [(ngModel)]=\"customSearch.height\">\n</mat-form-field>\n</span>\n\n</mat-card>\n\n</div>\n<div>\n<!-- <mat-grid-list [cols]=5 rowHeight = '30rem'> -->\n<span *ngIf=\"!CustomSearchBool\">\n<span *ngIf=\"USERSEARCH\">\n\n<span  *ngFor=\"let bat of Batteries; let i = index;\" class='batCards'>\n        <mat-accordion *ngIf=\"CheckValid(bat)\" class = 'acc'>\n            <mat-expansion-panel>\n              <mat-expansion-panel-header>\n                <mat-panel-title>\n                    {{bat.name}}\n                </mat-panel-title>\n\n              </mat-expansion-panel-header>\n\n              <p>\n                Voltage: {{bat.voltage}} V\n            </p>\n\n                <p>\n                    Capacity: {{bat.capacity}} Ah\n                </p>\n\n\n                <p>\n                    Energy:  {{bat.energy}} kWh\n                </p>\n\n                <p>\n                    Width: {{bat.width}} mm\n                </p>\n\n                <p>\n                    Length: {{bat.len}} mm\n                </p>\n\n\n                <p>\n                    Height: {{bat.height}} mm\n                </p>\n\n                <p>\n                    Weight: {{bat.weight}} kg\n                </p>\n                    \n\n                <!-- <span *ngFor=\"let ma of MACHINES\">\n                    <span *ngIf=\"USERSEARCH == ma.model\"> -->\n                        <span *ngIf=\"(THISMACHINEWEIGHT - bat.weight)>0\">\n                        <p>\n                            Additonal Weight required: {{THISMACHINEWEIGHT - bat.weight}} kg\n                        </p>\n                    </span>\n                    <!-- </span> -->\n                <!-- </span> -->\n            </mat-expansion-panel>\n        </mat-accordion>\n</span>\n</span>\n</span>\n\n</div>\n\n<span *ngIf=\"CustomSearchBool\">\n<span *ngIf=\"checkCustomSearch()\" class =\"SpanClass\">\n\t<!-- <mat-grid-tile *ngFor=\"let bat of Batteries | filter:searchText; let i = index; \" > -->\n<span  *ngFor=\"let bat of Batteries; let i = index;\">\n        <mat-accordion *ngIf=\"ValidateCustomSearch(bat)\"  class = 'acc'>\n            <mat-expansion-panel>\n              <mat-expansion-panel-header>\n                <mat-panel-title>\n                    {{bat.name}}\n                </mat-panel-title>\n\n              </mat-expansion-panel-header>\n\n              <p>\n                Voltage: {{bat.voltage}} V\n            </p>\n\n                <p>\n                    Capacity: {{bat.capacity}} Ah\n                </p>\n\n\n                <p>\n                    Energy:  {{bat.energy}} kWh\n                </p>\n\n                <p>\n                    Width: {{bat.width}} mm\n                </p>\n\n                <p>\n                    Length: {{bat.len}} mm\n                </p>\n\n\n                <p>\n                    Height: {{bat.height}} mm\n                </p>\n\n                <p>\n                    Weight: {{bat.weight}} kg\n                </p>\n\n\n            </mat-expansion-panel>\n        </mat-accordion>\n\n</span>\n</span>\n</span>\n           \n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class = 'LoginCard'>\n<mat-card >\n    <mat-form-field class='LoginForm'>\n        <mat-label>Username</mat-label>\n        <input matInput [(ngModel)]=\"USERNAME\">\n      </mat-form-field>\n      \n      <mat-form-field class='LoginForm'>\n        <mat-label>Password</mat-label>\n        <input matInput type=\"password\" [(ngModel)]=\"PASSWORD\">\n      </mat-form-field>\n\n      <span class='LoginForm'>\n      <button mat-button (click)='Login()' >Login</button>\n    </span>\n</mat-card>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/machines/machines.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/machines/machines.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMachinesMachinesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card class = 'AddCard'>\n\n    <mat-card-title>\n      <button mat-button (click)='ShowAdd= !ShowAdd' *ngIf=\"!ShowAdd\">\n        Add New Machine\n      </button>\n  \n      <button mat-button (click)='ShowAdd= !ShowAdd' *ngIf=\"ShowAdd\">\n        Minimise\n      </button>\n    </mat-card-title>\n  \n  <span *ngIf=\"ShowAdd\">\n    <mat-form-field>\n      <mat-label>OEM</mat-label>\n      <input matInput  placeholder=\"Doosan\" [(ngModel)]=\"AddMachineData.OEM\">\n    </mat-form-field>\n\n    <mat-form-field>\n        <mat-label>Equipment catergory</mat-label>\n        <input matInput  placeholder=\"Forklift\" [(ngModel)]=\"AddMachineData.catergory\" >\n    </mat-form-field>\n\n\n\n    <mat-form-field>\n        <mat-label>Model</mat-label>\n        <input matInput  placeholder=\"B25S-5\" [(ngModel)]=\"AddMachineData.model\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-label>Battery Voltage</mat-label>\n      <input matInput  placeholder=\"48\" [(ngModel)]=\"AddMachineData.voltage\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Minimum Battery Capacity</mat-label>\n    <input matInput  placeholder=\"530\" [(ngModel)]=\"AddMachineData.minCap\">\n</mat-form-field>\n\n\n<mat-form-field>\n  <mat-label>Maximum Battery Capacity </mat-label>\n  <input matInput  placeholder=\"530\" [(ngModel)]=\"AddMachineData.maxCap\">\n</mat-form-field>\n\n<mat-form-field>\n  <mat-label>Battery Energy (kWh)</mat-label>\n  <input matInput  placeholder=\"40.8\" [(ngModel)]=\"AddMachineData.energy\">\n</mat-form-field>\n\n<mat-form-field>\n  <mat-label>Minimum Battery Weight (kg)</mat-label>\n  <input matInput  placeholder=\"530\" [(ngModel)]=\"AddMachineData.minWeight\">\n</mat-form-field>\n\n<mat-form-field>\n<mat-label>Width</mat-label>\n<input matInput  placeholder=\"530\" [(ngModel)]=\"AddMachineData.width\">\n</mat-form-field>\n\n<mat-form-field>\n<mat-label>Length</mat-label>\n<input matInput  placeholder=\"896\" [(ngModel)]=\"AddMachineData.len\">\n</mat-form-field>\n\n    \n<mat-form-field>\n<mat-label>Height</mat-label>\n<input matInput  placeholder=\"530\" [(ngModel)]=\"AddMachineData.height\">\n</mat-form-field>\n\n<span class='ver'>\n<mat-checkbox [(ngModel)]=\"AddMachineData.verified\">Verified</mat-checkbox>\n</span>\n\n    <button class=\"mat-raised-button\" (click)=\"addBattery()\">Add Machine</button>\n  </span>\n  </mat-card>\n\n  <mat-card class = 'AddCard' *ngIf=\"Update\">\n\n    <mat-card-title>\n      Update\n  \n  \n  \n      <button mat-button (click)='Update= !Update' *ngIf=\"Update\">\n        Close\n      </button>\n    </mat-card-title>\n  \n  <span *ngIf=\"Update\">\n    <mat-form-field>\n      <mat-label>OEM</mat-label>\n      <input matInput  value={{UpdateData.OEM}} [(ngModel)] = \"UpdateData.OEM\">\n    </mat-form-field>\n  \n  \n    <mat-form-field>\n      <mat-label>Catergory</mat-label>\n      <input matInput  value={{UpdateData.catergory}} [(ngModel)] = \"UpdateData.catergory\">\n    </mat-form-field>\n  \n    <mat-form-field>\n      <mat-label>Model</mat-label>\n      <input matInput  value={{UpdateData.model}} [(ngModel)] = \"UpdateData.model\">\n    </mat-form-field>\n\n\n    <mat-form-field>\n      <mat-label>voltage</mat-label>\n      <input matInput  value={{UpdateData.voltage}} [(ngModel)] = \"UpdateData.voltage\">\n    </mat-form-field>\n  \n    <mat-form-field>\n      <mat-label>Minimum Battery Capacity</mat-label>\n      <input matInput  value={{UpdateData.minCap}} [(ngModel)] = \"UpdateData.minCap\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-label>Maximim Battery Capacity</mat-label>\n      <input matInput  value={{UpdateData.maxCap}} [(ngModel)] = \"UpdateData.maxCap\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-label>Energy</mat-label>\n      <input matInput  value={{UpdateData.energy}} [(ngModel)] = \"UpdateData.energy\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-label>Minimum Weight</mat-label>\n      <input matInput  value={{UpdateData.minWeight}} [(ngModel)] = \"UpdateData.minWeight\">\n    </mat-form-field>\n  \n    <mat-form-field>\n      <mat-label>Width</mat-label>\n      <input matInput  value={{UpdateData.width}} [(ngModel)] = \"UpdateData.width\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-label>Length (mm)</mat-label>\n      <input matInput  value={{UpdateData.len}} [(ngModel)] = \"UpdateData.len\">\n    </mat-form-field>\n  \n    <mat-form-field>\n      <mat-label>Height (mm)</mat-label>\n      <input matInput  value={{UpdateData.height}} [(ngModel)] = \"UpdateData.height\">\n    </mat-form-field>\n\n\n    <span class='ver'>\n      <mat-checkbox value={{UpdateData.verified}} [(ngModel)]=\"UpdateData.verified\">Verified</mat-checkbox>\n      </span>\n\n  \n\n\n  \n    <button class=\"mat-raised-button\" (click)='UpdateMachineData(UpdateData)'>Update</button>\n  </span>\n  </mat-card>\n\n\n<mat-card>\n<mat-form-field>\n  <mat-label>Filter</mat-label>\n  <input matInput (keyup)=\"applyFilter($event)\" >\n</mat-form-field>\n</mat-card>\n    <table mat-table [dataSource]=\" dataSource\" class=\"mat-elevation-z8\">\n    \n  \n      <ng-container matColumnDef=\"OEM\" >\n        <th mat-header-cell *matHeaderCellDef> OEM </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.OEM}} </td>\n      </ng-container>\n      \n      <ng-container matColumnDef=\"Catergory\">\n        <th mat-header-cell *matHeaderCellDef> Equipment catergory </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.catergory}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Model\">\n        <th mat-header-cell *matHeaderCellDef> Model</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.model}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"voltage\">\n      <th mat-header-cell *matHeaderCellDef> Voltage</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.voltage}} </td>\n  </ng-container>\n\n\n  <ng-container matColumnDef=\"minCap\">\n    <th mat-header-cell *matHeaderCellDef> Minmum Battery Capacity</th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.minCap}} </td>\n</ng-container>\n\n<ng-container matColumnDef=\"maxCap\">\n  <th mat-header-cell *matHeaderCellDef> Maximum Battery Capacity</th>\n  <td mat-cell *matCellDef=\"let element\"> {{element.maxCap}} </td>\n</ng-container>\n\n\n<ng-container matColumnDef=\"Energy\">\n  <th mat-header-cell *matHeaderCellDef> Energy (kWh) </th>\n  <td mat-cell *matCellDef=\"let element\"> {{element.energy}} </td>\n</ng-container>\n\n<ng-container matColumnDef=\"minWeight\">\n  <th mat-header-cell *matHeaderCellDef> Minimum Weight (kg) </th>\n  <td mat-cell *matCellDef=\"let element\"> {{element.minWeight}} </td>\n</ng-container>\n\n<ng-container matColumnDef=\"Width\">\n  <th mat-header-cell *matHeaderCellDef> Width(mm)</th>\n  <td mat-cell *matCellDef=\"let element\"> {{element.width}} </td>\n</ng-container>\n\n<ng-container matColumnDef=\"Height\">\n  <th mat-header-cell *matHeaderCellDef> Height (mm) </th>\n  <td mat-cell *matCellDef=\"let element\"> {{element.height}} </td>\n</ng-container>\n\n      <ng-container matColumnDef=\"Length\">\n          <th mat-header-cell *matHeaderCellDef> Length (mm) </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.len}} </td>\n      </ng-container>\n  \n\n\n      <ng-container matColumnDef=\"verified\">\n        <th mat-header-cell *matHeaderCellDef> Verified </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.verified}} </td>\n    </ng-container>\n\n\n  \n      <ng-container matColumnDef=\"UpdateButtons\">\n        <th mat-header-cell *matHeaderCellDef></th>\n        <td mat-cell *matCellDef=\"let element; let i = index\"><button mat-button (click)= \"DisplayUpdateData(element)\">Update</button></td>\n      </ng-container>\n  \n  \n      <ng-container matColumnDef=\"DelButtons\">\n        <th mat-header-cell *matHeaderCellDef></th>\n        <td mat-cell *matCellDef=\"let element; let i = index\"><button mat-button (click)= deleteData(i)>Delete</button></td>\n      </ng-container>\n  \n  \n    \n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" class = 'TabelRow'></tr>\n    </table>\n\n<mat-paginator [pageSizeOptions]=\"[25, 50, 100]\"></mat-paginator>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabel/tabel.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabel/tabel.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabelTabelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card class = 'AddCard'>\n\n  <mat-card-title>\n    <button mat-button (click)='ShowAdd= !ShowAdd' *ngIf=\"!ShowAdd\">\n      Add New Battery\n    </button>\n\n    <button mat-button (click)='ShowAdd= !ShowAdd' *ngIf=\"ShowAdd\">\n      Minimise\n    </button>\n  </mat-card-title>\n\n<span *ngIf=\"ShowAdd\">\n  <mat-form-field>\n    <mat-label>Name</mat-label>\n    <input matInput  placeholder=\"P00001\" [(ngModel)]=\"AddBatteryData.name\">\n  </mat-form-field>\n\n\n  <mat-form-field>\n    <mat-label>voltage (V)</mat-label>\n    <input matInput  placeholder=\"26\" type=\"number\" [(ngModel)]=\"AddBatteryData.voltage\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Capacity (Ah)</mat-label>\n    <input matInput  placeholder=\"144\" type=\"number\" [(ngModel)]=\"AddBatteryData.capacity\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Energy (kWh)</mat-label>\n    <input matInput  placeholder=\"3.7\" type=\"number\" [(ngModel)]=\"AddBatteryData.energy\">\n  </mat-form-field>\n\n\n  <mat-form-field>\n    <mat-label>Width (mm)</mat-label>\n    <input matInput  placeholder=\"3.7\" type=\"number\" [(ngModel)]=\"AddBatteryData.width\">\n  </mat-form-field>\n\n\n  <mat-form-field>\n    <mat-label>Length (mm)</mat-label>\n    <input matInput  placeholder=\"3.7\" type=\"number\" [(ngModel)]=\"AddBatteryData.len\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Height (mm)</mat-label>\n    <input matInput  placeholder=\"3.7\" type=\"number\" [(ngModel)]=\"AddBatteryData.height\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Weight (Kg)</mat-label>\n    <input matInput  placeholder=\"34\" type=\"number\" [(ngModel)]=\"AddBatteryData.weight\">\n  </mat-form-field>\n\n  <!-- <mat-form-field>\n    <mat-label>Cell Weight(Kg)</mat-label>\n    <input matInput  placeholder=\"30.4\" type=\"number\" [(ngModel)]=\"AddBatteryData.cellWeight\">\n  </mat-form-field> -->\n\n\n  \n  <button class=\"mat-raised-button\" (click)=\"addBattery()\">Add</button>\n\n</span>\n</mat-card>\n\n\n\n\n\n<mat-card class = 'AddCard' *ngIf=\"Update\">\n\n  <mat-card-title>\n    Update\n\n\n\n    <button mat-button (click)='Update= !Update' *ngIf=\"Update\">\n      Close\n    </button>\n  </mat-card-title>\n\n<span *ngIf=\"Update\">\n  <mat-form-field>\n    <mat-label>Name</mat-label>\n    <input matInput  value={{UpdateData.name}} [(ngModel)] = \"UpdateData.name\">\n  </mat-form-field>\n\n\n  <mat-form-field>\n    <mat-label>Voltage (V)</mat-label>\n    <input matInput  value={{UpdateData.voltage}} [(ngModel)] = \"UpdateData.voltage\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Capacity (Ah)</mat-label>\n    <input matInput  value={{UpdateData.capacity}} [(ngModel)] = \"UpdateData.capacity\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Energy (kWh)</mat-label>\n    <input matInput  value={{UpdateData.energy}} [(ngModel)] = \"UpdateData.energy\">\n  </mat-form-field>\n\n\n  <mat-form-field>\n    <mat-label>Width (mm)</mat-label>\n    <input matInput  value={{UpdateData.width}} [(ngModel)] = \"UpdateData.width\">\n  </mat-form-field>\n\n\n  <mat-form-field>\n    <mat-label>Length (mm)</mat-label>\n    <input matInput  value={{UpdateData.len}} [(ngModel)] = \"UpdateData.len\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Height (mm)</mat-label>\n    <input matInput  value={{UpdateData.height}} [(ngModel)] = \"UpdateData.height\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Weight (Kg)</mat-label>\n    <input matInput value={{UpdateData.weight}} [(ngModel)] = \"UpdateData.weight\">\n  </mat-form-field>\n\n  <!-- <mat-form-field>\n    <mat-label>Cell Weight(Kg)</mat-label>\n    <input matInput  value={{UpdateData.cellWeight}} [(ngModel)] = \"UpdateData.cellWeight\">\n  </mat-form-field> -->\n\n\n\n\n\n  <button class=\"mat-raised-button\" (click)='UpdateBatData(UpdateData)'>Update</button>\n</span>\n</mat-card>\n\n\n<mat-card>\n  <table mat-table [dataSource]=\" dataSource\" class=\"mat-elevation-z8\">\n  \n\n    <ng-container matColumnDef=\"name\" >\n      <th mat-header-cell *matHeaderCellDef> Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n  \n\n    <ng-container matColumnDef=\"description\">\n      <th mat-header-cell *matHeaderCellDef> Battery Description </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.batteryDescription}} </td>\n    </ng-container>\n  \n\n    <ng-container matColumnDef=\"voltage\">\n      <th mat-header-cell *matHeaderCellDef> Voltage </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.voltage}} </td>\n    </ng-container>\n  \n\n    <ng-container matColumnDef=\"capacity\">\n      <th mat-header-cell *matHeaderCellDef> Capacity (Ah) </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.capacity}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"energy\">\n        <th mat-header-cell *matHeaderCellDef> Energy (kWh) </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.energy}} </td>\n    </ng-container>\n\n\n    <ng-container matColumnDef=\"width\">\n        <th mat-header-cell *matHeaderCellDef> Width (mm) </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.width}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"length\">\n        <th mat-header-cell *matHeaderCellDef> Length (mm) </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.len}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"height\">\n        <th mat-header-cell *matHeaderCellDef> Height (mm) </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.height}} </td>\n    </ng-container>\n\n    \n    <ng-container matColumnDef=\"weight\">\n        <th mat-header-cell *matHeaderCellDef> Weight (kg) </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n    </ng-container>\n\n\n\n    \n    <!-- <ng-container matColumnDef=\"cellWeight\">\n        <th mat-header-cell *matHeaderCellDef> Cell weight (kg) </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.cellWeight}} </td>\n    </ng-container> -->\n\n\n\n    <ng-container matColumnDef=\"UpdateButtons\">\n      <th mat-header-cell *matHeaderCellDef></th>\n      <td mat-cell *matCellDef=\"let element; let i = index\"><button mat-button (click)= \"DisplayUpdateData(dataSource[i])\">Update</button></td>\n    </ng-container>\n\n\n    <ng-container matColumnDef=\"DelButtons\">\n      <th mat-header-cell *matHeaderCellDef></th>\n      <td mat-cell *matCellDef=\"let element; let i = index\"><button mat-button (click)= deleteData(i)>Delete</button></td>\n    </ng-container>\n\n\n  \n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" class = 'TabelRow'></tr>\n  </table>\n\n</mat-card>\n\n\n\n<app-machines></app-machines>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/toolbar/toolbar.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/toolbar/toolbar.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppToolbarToolbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar color='white'>\n    <mat-toolbar-row>\n      <img src=\"assets/img/logo.png\" class  = 'Logo'>\n      <span>\n        <!-- <button mat-button routerLink=\"/products\">Products</button> -->\n       \n      </span>\n      <span class='loginBtn'>\n        <!-- <button mat-button routerLink=\"/login\">Login</button> -->\n      </span>\n    </mat-toolbar-row>\n  </mat-toolbar>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
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
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'balancellTabel';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _tabel_tabel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tabel/tabel.component */
    "./src/app/tabel/tabel.component.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _battery_cards_battery_cards_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./battery-cards/battery-cards.component */
    "./src/app/battery-cards/battery-cards.component.ts");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/esm2015/grid-list.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ng2_search_filter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ng2-search-filter */
    "./node_modules/ng2-search-filter/ng2-search-filter.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./toolbar/toolbar.component */
    "./src/app/toolbar/toolbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _machines_machines_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./machines/machines.component */
    "./src/app/machines/machines.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/esm2015/progress-bar.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");

    var appRoutes = [{
      path: 'products',
      component: _battery_cards_battery_cards_component__WEBPACK_IMPORTED_MODULE_13__["BatteryCardsComponent"]
    }, {
      path: 'addProducts',
      component: _tabel_tabel_component__WEBPACK_IMPORTED_MODULE_6__["TabelComponent"]
    }, {
      path: 'AdminLogin',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"]
    }, {
      path: '',
      redirectTo: '/products',
      pathMatch: 'full'
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _tabel_tabel_component__WEBPACK_IMPORTED_MODULE_6__["TabelComponent"], _battery_cards_battery_cards_component__WEBPACK_IMPORTED_MODULE_13__["BatteryCardsComponent"], _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_18__["ToolbarComponent"], _machines_machines_component__WEBPACK_IMPORTED_MODULE_22__["MachinesComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"]],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"].forRoot(appRoutes), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButtonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["NoopAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_16__["Ng2SearchPipeModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["CommonModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__["MatProgressBarModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__["MatCheckboxModule"]],
      providers: [_angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth-user.service.ts":
  /*!**************************************!*\
    !*** ./src/app/auth-user.service.ts ***!
    \**************************************/

  /*! exports provided: AuthUserService */

  /***/
  function srcAppAuthUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthUserService", function () {
      return AuthUserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/fesm2015/http.js");

    var AuthUserService = /*#__PURE__*/function () {
      function AuthUserService(http) {
        _classCallCheck(this, AuthUserService);

        this.http = http;
        this.url = '//127.0.0.1:8080/api/auth';
      }

      _createClass(AuthUserService, [{
        key: "Login",
        value: function Login(username, password) {
          return this.http.post(this.url, {
            username: username,
            password: password
          });
        }
      }]);

      return AuthUserService;
    }();

    AuthUserService.ctorParameters = function () {
      return [{
        type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]
      }];
    };

    AuthUserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthUserService);
    /***/
  },

  /***/
  "./src/app/batteries.service.ts":
  /*!**************************************!*\
    !*** ./src/app/batteries.service.ts ***!
    \**************************************/

  /*! exports provided: BatteriesService */

  /***/
  function srcAppBatteriesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BatteriesService", function () {
      return BatteriesService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/fesm2015/http.js");

    var BatteriesService = /*#__PURE__*/function () {
      function BatteriesService(http) {
        _classCallCheck(this, BatteriesService);

        this.http = http;
        this.url = '//127.0.0.1:8080/api/battery';
      }

      _createClass(BatteriesService, [{
        key: "getBatteries",
        value: function getBatteries() {
          return this.http.get(this.url);
        }
      }, {
        key: "addBattery",
        value: function addBattery(bat) {
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

          console.log('Cats', cat);
          console.log('Models', models);
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
            models: models
          };
          console.log(bat.voltage);
          console.log('Adding Battery');
          console.log('Battery Added');
          return this.http.post(this.url, {
            battery: battery
          });
        }
      }, {
        key: "DelBat",
        value: function DelBat(id) {
          var deleteUrl = this.url + '/' + id;
          return this.http.delete(deleteUrl);
        }
      }, {
        key: "UpdateBat",
        value: function UpdateBat(bat) {
          var id = bat['_id'];
          console.log(bat);
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

          console.log('Cats', cat);
          console.log('Models', models);
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
            cellWeight: bat.cellWeight
          };
          var updateUrl = this.url + '/' + id;
          return this.http.put(updateUrl, {
            battery: battery
          });
        }
      }]);

      return BatteriesService;
    }();

    BatteriesService.ctorParameters = function () {
      return [{
        type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]
      }];
    };

    BatteriesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], BatteriesService);
    /***/
  },

  /***/
  "./src/app/battery-cards/battery-cards.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/battery-cards/battery-cards.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBatteryCardsBatteryCardsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " .mat-card{\r\n\r\n    border: 55px solid !important;\r\n  \r\n    border: #000 !important;\r\n    width:100%;\r\n    margin-bottom: 1rem;\r\n   }\r\n\r\n   .fkLifts{\r\n    display: inline-block;\r\n   }\r\n\r\n   .we{\r\n       margin: 0 0 0 0 ;\r\n   }\r\n\r\n   .card-title{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n   }\r\n\r\n   .TabelRow{\r\n    text-align: center;\r\n   }\r\n\r\n   .mat-cell {\r\n    text-align: center;\r\n    -webkit-box-pack:center;\r\n            justify-content:center; \r\n  }\r\n\r\n   .batCards{\r\n    display: inline-block;\r\n    margin-right: 0;\r\n    display: inline-flexbox;\r\n    position: relative;\r\n    overflow: inherit !important;\r\n    top: 0;\r\n    z-index: 1000;\r\n  }\r\n\r\n   .mat-expansion-panel {\r\n    overflow: inherit !important;\r\n    margin: 1rem, 1rem, 1rem, 1rem;\r\n}\r\n\r\n   .mat-expansion-panel-body {\r\n    overflow: auto;\r\n}\r\n\r\n   .mat-expansion-panel-header.mat-expanded {\r\n    position: relative;\r\n    top: 0;\r\n    z-index: 1000;\r\n}\r\n\r\n   .mat-form-field{\r\n  margin-right: 1rem;\r\n  margin: 1rem, 1rem, 1rem,1rem;\r\n}\r\n\r\n   .SpanClass{\r\n  margin: 0,0,0,0;\r\n}\r\n\r\n   .acc{\r\n  display: inline-block;\r\n\r\n  margin: 1rem, 1rem, 1rem,1rem;\r\n\r\n  position: relative;\r\n  overflow: inherit !important;\r\n  top: 0;\r\n  z-index: 1000;\r\n}\r\n\r\n   .html,body{\r\n  background-image: rgb(0,133,62);\r\n  background-size: 100% 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmF0dGVyeS1jYXJkcy9iYXR0ZXJ5LWNhcmRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUM7O0lBRUcsNkJBQTZCOztJQUU3Qix1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLG1CQUFtQjtHQUNwQjs7R0FFQTtJQUNDLHFCQUFxQjtHQUN0Qjs7R0FHQTtPQUNJLGdCQUFnQjtHQUNwQjs7R0FFQTtJQUNDLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHdCQUF1QjtZQUF2Qix1QkFBdUI7R0FDeEI7O0dBR0E7SUFDQyxrQkFBa0I7R0FDbkI7O0dBR0Q7SUFDRSxrQkFBa0I7SUFDbEIsdUJBQXNCO1lBQXRCLHNCQUFzQjtFQUN4Qjs7R0FHQTtJQUNFLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsTUFBTTtJQUNOLGFBQWE7RUFDZjs7R0FFQTtJQUNFLDRCQUE0QjtJQUM1Qiw4QkFBOEI7QUFDbEM7O0dBRUE7SUFDSSxjQUFjO0FBQ2xCOztHQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixhQUFhO0FBQ2pCOztHQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDZCQUE2QjtBQUMvQjs7R0FDQTtFQUNFLGVBQWU7QUFDakI7O0dBRUE7RUFDRSxxQkFBcUI7O0VBRXJCLDZCQUE2Qjs7RUFFN0Isa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QixNQUFNO0VBQ04sYUFBYTtBQUNmOztHQUVBO0VBQ0UsK0JBQStCO0VBQy9CLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL2JhdHRlcnktY2FyZHMvYmF0dGVyeS1jYXJkcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC5tYXQtY2FyZHtcclxuXHJcbiAgICBib3JkZXI6IDU1cHggc29saWQgIWltcG9ydGFudDtcclxuICBcclxuICAgIGJvcmRlcjogIzAwMCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgIH1cclxuXHJcbiAgIC5ma0xpZnRze1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICB9XHJcblxyXG5cclxuICAgLndle1xyXG4gICAgICAgbWFyZ2luOiAwIDAgMCAwIDtcclxuICAgfVxyXG5cclxuICAgLmNhcmQtdGl0bGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgIH1cclxuXHJcblxyXG4gICAuVGFiZWxSb3d7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIH1cclxuXHJcbiAgXHJcbiAgLm1hdC1jZWxsIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7IFxyXG4gIH1cclxuXHJcblxyXG4gIC5iYXRDYXJkc3tcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4Ym94O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGluaGVyaXQgIWltcG9ydGFudDtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgfVxyXG5cclxuICAubWF0LWV4cGFuc2lvbi1wYW5lbCB7XHJcbiAgICBvdmVyZmxvdzogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAxcmVtLCAxcmVtLCAxcmVtLCAxcmVtO1xyXG59XHJcblxyXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1ib2R5IHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIubWF0LWV4cGFuZGVkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZHtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgbWFyZ2luOiAxcmVtLCAxcmVtLCAxcmVtLDFyZW07XHJcbn1cclxuLlNwYW5DbGFzc3tcclxuICBtYXJnaW46IDAsMCwwLDA7XHJcbn1cclxuXHJcbi5hY2N7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICBtYXJnaW46IDFyZW0sIDFyZW0sIDFyZW0sMXJlbTtcclxuXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbn1cclxuXHJcbi5odG1sLGJvZHl7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogcmdiKDAsMTMzLDYyKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/battery-cards/battery-cards.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/battery-cards/battery-cards.component.ts ***!
    \**********************************************************/

  /*! exports provided: BatteryCardsComponent */

  /***/
  function srcAppBatteryCardsBatteryCardsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BatteryCardsComponent", function () {
      return BatteryCardsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _batteries_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../batteries.service */
    "./src/app/batteries.service.ts");
    /* harmony import */


    var _machines_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../machines.service */
    "./src/app/machines.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var BatteryCardsComponent = /*#__PURE__*/function () {
      function BatteryCardsComponent(BS, MS) {
        var _this = this;

        _classCallCheck(this, BatteryCardsComponent);

        this.BS = BS;
        this.MS = MS;
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
              cat: Batteries[bat]['categories'],
              models: Batteries[bat]['models']
            };

            _this.Bool.push(_this.B);

            _this.Batteries.push(battery);
          }
        });
        this.getMachines();
      }

      _createClass(BatteryCardsComponent, [{
        key: "changeMan",
        value: function changeMan(event) {
          if (event.isUserInput) {
            this.CATS = [];

            for (var ma in this.machines) {
              if (event.source.value == this.machines[ma].OEM) {
                this.USER_MAN = event.source.value;

                if (this.CATS.includes(this.machines[ma].catergory)) {
                  console.log(this.CATS);
                } else {
                  this.CATS.push(this.machines[ma].catergory);
                }
              }
            }

            this.USER_CATEGORY = '';
            this.USERSEARCH = '';
          }
        }
      }, {
        key: "changeCat",
        value: function changeCat(event) {
          this.USERSEARCH = '';

          if (event.isUserInput) {
            this.MODELS = [];

            for (var ma in this.machines) {
              if (this.USER_MAN == this.machines[ma].OEM) {
                if (event.source.value == this.machines[ma].catergory) {
                  if (this.MODELS.includes(this.machines[ma].model)) {
                    console.log(this.MODELS);
                  } else {
                    this.MODELS.push(this.machines[ma].model);
                  }
                }
              }
            }
          }
        }
      }, {
        key: "Show",
        value: function Show() {
          console.log(this.customSearch);
          console.log(Object.keys(this.customSearch));
          var keys = Object.keys(this.customSearch);
          console.log(this.customSearch[keys[0]]);
        }
      }, {
        key: "checkCustomSearch",
        value: function checkCustomSearch() {
          if (Object.keys(this.customSearch).length > 0) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "ValidateCustomSearch",
        value: function ValidateCustomSearch(bat) {
          var correctCount = 0;
          var totalCount = 0;
          var batKeys = Object.keys(bat);
          var keys = Object.keys(this.customSearch);

          for (var keyNo in keys) {
            console.log(this.customSearch['voltage']);
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
          } else {
            return false;
          }
        }
      }, {
        key: "SortMachines",
        value: function SortMachines(machines) {
          var test = []; // console.log(machines)

          for (var ma in machines) {
            // console.log(machines[ma].OEM)
            var oem = machines[ma].OEM;
            var category = machines[ma].catergory;
            var model = machines[ma].model;

            if (this.OEMS.indexOf(oem) == -1) {
              this.OEMS.push(oem);
            } // console.log(this.OEMS)

          }
        }
      }, {
        key: "getMachines",
        value: function getMachines() {
          var _this2 = this;

          var a;
          this.MS.getMachines().subscribe(function (data) {
            var machineData = JSON.parse(data['_body']);
            a = machineData['machines'];

            for (var ma in a) {
              _this2.machines.push(a[ma]);

              _this2.MACHINES.push(a[ma]);
            }

            _this2.SortMachines(_this2.machines);
          });
        }
      }, {
        key: "CheckValid",
        value: function CheckValid(Bat) {
          var FractionOfCapacity = 1 / 3;
          var counter = 0; // console.log(this.MACHINES)

          for (var ma in this.MACHINES) {
            var totalCount = 0; // counter +=1;
            // console.log(counter)

            if (this.machines[ma].model == this.USERSEARCH) {
              this.THISMACHINEWEIGHT = this.machines[ma].minWeight;

              if (Math.abs(this.machines[ma].voltage - Bat.voltage) < 5) {
                totalCount += 1; // console.log('Voltage meets requirments')
              } // console.log(' ');
              // console.log('Comapring height: ', this.MACHINES[ma].height , Bat.height );


              if (Number(this.machines[ma].height) > Number(Bat.height)) {
                totalCount += 1; // console.log('Height meets requirments')
              } // console.log(' ');
              // console.log('Comapring Width: ', this.MACHINES[ma].width , Bat.width );


              if (Number(this.machines[ma].width) > Number(Bat.width)) {
                // console.log('Width meets requirments')
                totalCount += 1;
              }

              if (this.machines[ma].width < Bat.width) {
                if (this.machines[ma].width > Bat.len && this.MACHINES[ma].len > Bat.width) {
                  totalCount += 1;
                }
              } // console.log(' ');
              // console.log('Comapring Length: ', this.MACHINES[ma].len , Bat.len );


              if (Number(this.machines[ma].len) > Number(Bat.len)) {
                totalCount += 1; // console.log('Length meets requirments')
              }

              if (this.machines[ma].minCap * FractionOfCapacity < Bat.capacity) {
                totalCount += 1;
              }

              if (totalCount == 4) {
                return true;
              }

              if (totalCount != 4) {
                return false;
              }
            }
          }
        }
      }]);

      return BatteryCardsComponent;
    }();

    BatteryCardsComponent.ctorParameters = function () {
      return [{
        type: _batteries_service__WEBPACK_IMPORTED_MODULE_2__["BatteriesService"]
      }, {
        type: _machines_service__WEBPACK_IMPORTED_MODULE_3__["MachinesService"]
      }];
    };

    BatteryCardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-battery-cards',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./battery-cards.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/battery-cards/battery-cards.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./battery-cards.component.css */
      "./src/app/battery-cards/battery-cards.component.css")).default]
    })], BatteryCardsComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".LoginForm{\r\n    display:-webkit-box;\r\n    display:flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.LoginCard{\r\n    \r\n    display: -webkit-box;\r\n    \r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFZO0lBQVosWUFBWTtJQUNaLHdCQUF1QjtZQUF2Qix1QkFBdUI7QUFDM0I7O0FBRUE7O0lBRUksb0JBQWE7O0lBQWIsYUFBYTtJQUNiLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIseUJBQW1CO1lBQW5CLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuTG9naW5Gb3Jte1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5Mb2dpbkNhcmR7XHJcbiAgICBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth-user.service */
    "./src/app/auth-user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(auth, router) {
        _classCallCheck(this, LoginComponent);

        this.auth = auth;
        this.router = router;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "Login",
        value: function Login() {
          var _this3 = this;

          this.auth.Login(this.USERNAME, this.PASSWORD).subscribe(function (data) {
            var ans = JSON.parse(data['_body']);

            if (ans['message'] == 'Successful') {
              _this3.router.navigate(['/addProducts']);
            }
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _auth_user_service__WEBPACK_IMPORTED_MODULE_2__["AuthUserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/machines.service.ts":
  /*!*************************************!*\
    !*** ./src/app/machines.service.ts ***!
    \*************************************/

  /*! exports provided: MachinesService */

  /***/
  function srcAppMachinesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MachinesService", function () {
      return MachinesService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/fesm2015/http.js");

    var MachinesService = /*#__PURE__*/function () {
      function MachinesService(http) {
        _classCallCheck(this, MachinesService);

        this.http = http;
        this.url = '//127.0.0.1:8080/api/machines';
      }

      _createClass(MachinesService, [{
        key: "getMachines",
        value: function getMachines() {
          return this.http.get(this.url);
        }
      }, {
        key: "addMachine",
        value: function addMachine(Machine) {
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
            verified: Machine.verified
          };
          console.log('Adding Battery');
          console.log('Battery Added');
          return this.http.post(this.url, {
            machine: machine
          });
        }
      }, {
        key: "DelMachine",
        value: function DelMachine(id) {
          var deleteUrl = this.url + '/' + id;
          return this.http.delete(deleteUrl);
        }
      }, {
        key: "UpdateMachine",
        value: function UpdateMachine(machine) {
          var id = machine['_id'];
          console.log(machine);
          var updateUrl = this.url + '/' + id;
          return this.http.put(updateUrl, {
            machine: machine
          });
        }
      }]);

      return MachinesService;
    }();

    MachinesService.ctorParameters = function () {
      return [{
        type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]
      }];
    };

    MachinesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MachinesService);
    /***/
  },

  /***/
  "./src/app/machines/machines.component.css":
  /*!*************************************************!*\
    !*** ./src/app/machines/machines.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMachinesMachinesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Structure */\r\ntable {\r\n    width: 100%;\r\n  }\r\n.mat-form-field {\r\n    font-size: 14px;\r\n    width: 14%;\r\n    margin: 0 1% 0 0;\r\n  }\r\n.mat-raised-button{\r\n    width: 10%;\r\n  }\r\n.mat-card{\r\n    margin-bottom: 1%;\r\n\r\n  }\r\n.ver{\r\n    margin-right: 1rem;\r\n  }\r\n.ng-container{\r\n    text-align: center;\r\n    -webkit-box-pack:center;\r\n            justify-content:center;\r\n    padding: 2rem 2rem 2rem 2rem;\r\n    width: 30rem;\r\n  }\r\n.mat-header-cell {\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column; \r\n   text-align: center;\r\n   -webkit-box-pack: center;\r\n           justify-content: center;\r\n   padding-right: 2rem;\r\n   width: 30rem;\r\n }\r\n.mat-cell {\r\n   text-align: center;\r\n   -webkit-box-pack:center;\r\n           justify-content:center;\r\n   padding-right: 2rem;\r\n   width: 30rem;\r\n }\r\ntd , th {\r\n   text-align: center;\r\n   -webkit-box-pack:center;\r\n           justify-content:center;\r\n   white-space: normal;\r\n   word-wrap: break-word;\r\n   max-width: 200px;\r\n}\r\n.mat-card{\r\n  width: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFjaGluZXMvbWFjaGluZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjO0FBQ2Q7SUFDSSxXQUFXO0VBQ2I7QUFFQTtJQUNFLGVBQWU7SUFDZixVQUFVO0lBQ1YsZ0JBQWdCO0VBQ2xCO0FBRUE7SUFDRSxVQUFVO0VBQ1o7QUFFQTtJQUNFLGlCQUFpQjs7RUFFbkI7QUFFQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHVCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLFlBQVk7RUFDZDtBQUVBO0lBQ0UsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7R0FDdkIsa0JBQWtCO0dBQ2xCLHdCQUF1QjtXQUF2Qix1QkFBdUI7R0FDdkIsbUJBQW1CO0dBQ25CLFlBQVk7Q0FDZDtBQUVBO0dBQ0Usa0JBQWtCO0dBQ2xCLHVCQUFzQjtXQUF0QixzQkFBc0I7R0FDdEIsbUJBQW1CO0dBQ25CLFlBQVk7Q0FDZDtBQUVBO0dBQ0Usa0JBQWtCO0dBQ2xCLHVCQUFzQjtXQUF0QixzQkFBc0I7R0FDdEIsbUJBQW1CO0dBQ25CLHFCQUFxQjtHQUNyQixnQkFBZ0I7QUFDbkI7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL21hY2hpbmVzL21hY2hpbmVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTdHJ1Y3R1cmUgKi9cclxudGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB3aWR0aDogMTQlO1xyXG4gICAgbWFyZ2luOiAwIDElIDAgMDtcclxuICB9XHJcblxyXG4gIC5tYXQtcmFpc2VkLWJ1dHRvbntcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgfVxyXG5cclxuICAubWF0LWNhcmR7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxJTtcclxuXHJcbiAgfVxyXG5cclxuICAudmVye1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLm5nLWNvbnRhaW5lcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAycmVtIDJyZW0gMnJlbSAycmVtO1xyXG4gICAgd2lkdGg6IDMwcmVtO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgcGFkZGluZy1yaWdodDogMnJlbTtcclxuICAgd2lkdGg6IDMwcmVtO1xyXG4gfVxyXG4gXHJcbiAubWF0LWNlbGwge1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XHJcbiAgIHdpZHRoOiAzMHJlbTtcclxuIH1cclxuXHJcbiB0ZCAsIHRoIHtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgIG1heC13aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5tYXQtY2FyZHtcclxuICB3aWR0aDogYXV0bztcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/machines/machines.component.ts":
  /*!************************************************!*\
    !*** ./src/app/machines/machines.component.ts ***!
    \************************************************/

  /*! exports provided: MachinesComponent */

  /***/
  function srcAppMachinesMachinesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MachinesComponent", function () {
      return MachinesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/fesm2015/http.js");
    /* harmony import */


    var _batteries_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../batteries.service */
    "./src/app/batteries.service.ts");
    /* harmony import */


    var _machines_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../machines.service */
    "./src/app/machines.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var MachinesComponent = /*#__PURE__*/function () {
      function MachinesComponent(http, BS, MS) {
        _classCallCheck(this, MachinesComponent);

        this.http = http;
        this.BS = BS;
        this.MS = MS;
        this.Batteries = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
        this.BatteryNames = [];
        this.data = null;
        this.ShowAdd = false;
        this.Update = false;
        this.UpdateData = [];
        this.AddMachineData = [];
        this.displayedColumns = ['OEM', 'Catergory', 'Model', 'voltage', 'minCap', 'maxCap', 'Energy', 'minWeight', 'Width', 'Length', 'Height', 'verified', 'UpdateButtons', 'DelButtons'];
        this.getTableData();
        this.getBats();
      }

      _createClass(MachinesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getTableData();
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(event) {
          var test = event.target.value;
          var filterValue = test.toString();
          this.dataSource.filter = filterValue.trim().toLowerCase();

          if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
          }
        }
      }, {
        key: "addBattery",
        value: function addBattery() {
          var _this4 = this;

          console.log(this.AddMachineData);
          this.MS.addMachine(this.AddMachineData).subscribe(function (data) {
            console.log(data);

            _this4.getTableData();

            for (var x in _this4.AddMachineData) {
              console.log(_this4.AddMachineData[x], x);
              _this4.AddMachineData[x] = null;
            }

            _this4.ShowAdd = !_this4.ShowAdd;
          });
        }
      }, {
        key: "DisplayUpdateData",
        value: function DisplayUpdateData(element) {
          this.Update = !this.Update;
          console.log(element);
          this.UpdateData = element;
        }
      }, {
        key: "deleteData",
        value: function deleteData(i) {
          var _this5 = this;

          // console.log(i);
          var machineId = this.dataSource[i]['_id']; // console.log(this.dataSource[i]['_id'])

          this.MS.DelMachine(machineId).subscribe(function (data) {
            // console.log(data);
            _this5.getTableData();
          });
        }
      }, {
        key: "UpdateMachineData",
        value: function UpdateMachineData(updateData) {
          var _this6 = this;

          console.log(updateData);
          this.MS.UpdateMachine(updateData).subscribe(function (data) {
            console.log(data);

            for (var x in _this6.UpdateMachineData) {
              console.log(_this6.UpdateMachineData[x], x);
              _this6.UpdateMachineData[x] = null;
            }

            _this6.Update = !_this6.Update;
          });
        }
      }, {
        key: "getTableData",
        value: function getTableData() {
          var _this7 = this;

          this.MS.getMachines().subscribe(function (data) {
            var machineData = JSON.parse(data['_body']);
            _this7.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](machineData['machines']);
            _this7.dataSource.paginator = _this7.paginator;
          });
        }
      }, {
        key: "getBats",
        value: function getBats() {
          var _this8 = this;

          this.BS.getBatteries().subscribe(function (data) {
            var batteries = JSON.parse(data['_body']);
            var bats = batteries['batteries'];

            for (var bat in bats) {
              _this8.BatteryNames.push(bats[bat].name); // console.log(bats[bat].name)

            } // console.log(bats);

          });
        }
      }]);

      return MachinesComponent;
    }();

    MachinesComponent.ctorParameters = function () {
      return [{
        type: _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"]
      }, {
        type: _batteries_service__WEBPACK_IMPORTED_MODULE_6__["BatteriesService"]
      }, {
        type: _machines_service__WEBPACK_IMPORTED_MODULE_7__["MachinesService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      static: true
    })], MachinesComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], {
      static: true
    })], MachinesComponent.prototype, "sort", void 0);
    MachinesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-machines',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./machines.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/machines/machines.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./machines.component.css */
      "./src/app/machines/machines.component.css")).default]
    })], MachinesComponent);
    /***/
  },

  /***/
  "./src/app/tabel/tabel.component.css":
  /*!*******************************************!*\
    !*** ./src/app/tabel/tabel.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabelTabelComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Structure */\r\ntable {\r\n    width: 100%;\r\n  }\r\n.mat-form-field {\r\n    font-size: 14px;\r\n    width: 15%;\r\n    margin: 0 1% 0 0;\r\n  }\r\n.mat-raised-button{\r\n    width: 15%;\r\n  }\r\n.mat-card{\r\n    margin-bottom: 1%;\r\n\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiZWwvdGFiZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjO0FBQ2Q7SUFDSSxXQUFXO0VBQ2I7QUFFQTtJQUNFLGVBQWU7SUFDZixVQUFVO0lBQ1YsZ0JBQWdCO0VBQ2xCO0FBRUE7SUFDRSxVQUFVO0VBQ1o7QUFFQTtJQUNFLGlCQUFpQjs7RUFFbkIiLCJmaWxlIjoic3JjL2FwcC90YWJlbC90YWJlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU3RydWN0dXJlICovXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIG1hcmdpbjogMCAxJSAwIDA7XHJcbiAgfVxyXG5cclxuICAubWF0LXJhaXNlZC1idXR0b257XHJcbiAgICB3aWR0aDogMTUlO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1jYXJke1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMSU7XHJcblxyXG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/tabel/tabel.component.ts":
  /*!******************************************!*\
    !*** ./src/app/tabel/tabel.component.ts ***!
    \******************************************/

  /*! exports provided: TabelComponent */

  /***/
  function srcAppTabelTabelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabelComponent", function () {
      return TabelComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/fesm2015/http.js");
    /* harmony import */


    var _batteries_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../batteries.service */
    "./src/app/batteries.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _machines_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../machines.service */
    "./src/app/machines.service.ts"); // const ELEMENT_DATA: Battery[] =[];

    /**
     * @title Table with filtering
     */


    var TabelComponent = /*#__PURE__*/function () {
      function TabelComponent(http, BS, MS) {
        _classCallCheck(this, TabelComponent);

        this.http = http;
        this.BS = BS;
        this.MS = MS;
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
        this.AddBatteryData = [];
        this.displayedColumns = ['name', 'description', 'voltage', 'capacity', 'energy', 'width', 'length', 'height', 'weight', 'UpdateButtons', 'DelButtons'];
        this.getTableData();
        this.getMachines();
      }

      _createClass(TabelComponent, [{
        key: "addBattery",
        value: function addBattery() {
          var _this9 = this;

          console.log(this.AddBatteryData);
          this.BS.addBattery(this.AddBatteryData).subscribe(function (data) {
            console.log(data);

            _this9.getTableData();

            for (var x in _this9.AddBatteryData) {
              console.log(_this9.AddBatteryData[x], x);
              _this9.AddBatteryData[x] = null;
            }

            _this9.ShowAdd = !_this9.ShowAdd;
          });
        }
      }, {
        key: "DisplayUpdateData",
        value: function DisplayUpdateData(Bat) {
          this.Update = !this.Update;
          this.UpdateData = Bat;
        }
      }, {
        key: "deleteData",
        value: function deleteData(i) {
          var _this10 = this;

          console.log(i);
          var batId = this.dataSource[i]['_id'];
          console.log(this.dataSource[i]['_id']);
          this.BS.DelBat(batId).subscribe(function (data) {
            console.log(data);

            _this10.getTableData();
          });
        }
      }, {
        key: "UpdateBatData",
        value: function UpdateBatData(updateData) {
          var _this11 = this;

          console.log(updateData);
          this.BS.UpdateBat(updateData).subscribe(function (data) {
            console.log(data);

            for (var x in _this11.UpdateBatData) {
              console.log(_this11.UpdateBatData[x], x);
              _this11.UpdateBatData[x] = null;
            }

            _this11.Update = !_this11.Update;

            _this11.getTableData();
          });
        }
      }, {
        key: "getTableData",
        value: function getTableData() {
          var _this12 = this;

          this.BS.getBatteries().subscribe(function (data) {
            var batteryData = JSON.parse(data['_body']);
            _this12.dataSource = batteryData['batteries'];
          });
        }
      }, {
        key: "getMachines",
        value: function getMachines() {
          var _this13 = this;

          var a = [];
          this.MS.getMachines().subscribe(function (data) {
            var machineData = JSON.parse(data['_body']);
            var machines = machineData['machines'];

            for (var ma in machines) {
              if (_this13.Catergory.indexOf(machines[ma].catergory) == -1) {
                _this13.Catergory.push(machines[ma].catergory);
              }
            } // console.log(this.Catergory)


            for (var cat in _this13.Catergory) {
              // console.log(cat)
              var temp = [];

              for (var ma in machines) {
                if (_this13.Catergory[cat] == machines[ma].catergory) {
                  temp.push(machines[ma].model);
                } // console.log(temp)

              }

              var test = {
                cat: _this13.Catergory[cat],
                models: temp
              };

              _this13.CatModels.push(test);
            } // console.log(this.CatModels)

          });
        }
      }]);

      return TabelComponent;
    }();

    TabelComponent.ctorParameters = function () {
      return [{
        type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]
      }, {
        type: _batteries_service__WEBPACK_IMPORTED_MODULE_3__["BatteriesService"]
      }, {
        type: _machines_service__WEBPACK_IMPORTED_MODULE_5__["MachinesService"]
      }];
    };

    TabelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tabel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tabel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabel/tabel.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tabel.component.css */
      "./src/app/tabel/tabel.component.css")).default]
    })], TabelComponent);
    /***/
  },

  /***/
  "./src/app/toolbar/toolbar.component.css":
  /*!***********************************************!*\
    !*** ./src/app/toolbar/toolbar.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppToolbarToolbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".Logo{\r\n    height: 50px;\r\n    width: auto;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.loginBtn{\r\n    position: absolute;\r\n    right: 2%;\r\n    margin: 0;\r\n  \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsU0FBUzs7QUFFYiIsImZpbGUiOiJzcmMvYXBwL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkxvZ297XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5sb2dpbkJ0bntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAyJTtcclxuICAgIG1hcmdpbjogMDtcclxuICBcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/toolbar/toolbar.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/toolbar/toolbar.component.ts ***!
    \**********************************************/

  /*! exports provided: ToolbarComponent */

  /***/
  function srcAppToolbarToolbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function () {
      return ToolbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ToolbarComponent = /*#__PURE__*/function () {
      function ToolbarComponent() {
        _classCallCheck(this, ToolbarComponent);
      }

      _createClass(ToolbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ToolbarComponent;
    }();

    ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-toolbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./toolbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/toolbar/toolbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./toolbar.component.css */
      "./src/app/toolbar/toolbar.component.css")).default]
    })], ToolbarComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\User\Documents\Balancell\balancellTabel\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map