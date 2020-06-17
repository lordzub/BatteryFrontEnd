import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
// const ELEMENT_DATA: Battery[] =[];
/**
 * @title Table with filtering
 */
let TabelComponent = class TabelComponent {
    constructor(http, BS, MS) {
        this.http = http;
        this.BS = BS;
        this.MS = MS;
        this.disableSelect = true;
        this.Machines = new FormControl();
        this.Models = new FormControl();
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
    addBattery() {
        console.log(this.AddBatteryData);
        this.BS.addBattery(this.AddBatteryData).subscribe(data => {
            console.log(data);
            this.getTableData();
            for (var x in this.AddBatteryData) {
                console.log(this.AddBatteryData[x], x);
                this.AddBatteryData[x] = null;
            }
            this.ShowAdd = !this.ShowAdd;
        });
    }
    DisplayUpdateData(Bat) {
        this.Update = !this.Update;
        this.UpdateData = Bat;
    }
    deleteData(i) {
        console.log(i);
        var batId = this.dataSource[i]['_id'];
        console.log(this.dataSource[i]['_id']);
        this.BS.DelBat(batId).subscribe(data => {
            console.log(data);
            this.getTableData();
        });
    }
    UpdateBatData(updateData) {
        console.log(updateData);
        this.BS.UpdateBat(updateData).subscribe(data => {
            console.log(data);
            for (var x in this.UpdateBatData) {
                console.log(this.UpdateBatData[x], x);
                this.UpdateBatData[x] = null;
            }
            this.Update = !this.Update;
            this.getTableData();
        });
    }
    getTableData() {
        this.BS.getBatteries().subscribe((data) => {
            var batteryData = JSON.parse(data['_body']);
            this.dataSource = batteryData['batteries'];
        });
    }
    getMachines() {
        var a = [];
        this.MS.getMachines().subscribe((data) => {
            var machineData = JSON.parse(data['_body']);
            var machines = machineData['machines'];
            for (var ma in machines) {
                if (this.Catergory.indexOf(machines[ma].catergory) == -1) {
                    this.Catergory.push(machines[ma].catergory);
                }
            }
            console.log(this.Catergory);
            for (var cat in this.Catergory) {
                console.log(cat);
                var temp = [];
                for (var ma in machines) {
                    if (this.Catergory[cat] == machines[ma].catergory) {
                        temp.push(machines[ma].model);
                    }
                    console.log(temp);
                }
                var test = {
                    cat: this.Catergory[cat],
                    models: temp
                };
                this.CatModels.push(test);
            }
            console.log(this.CatModels);
        });
    }
};
TabelComponent = tslib_1.__decorate([
    Component({
        selector: 'tabel',
        styleUrls: ['tabel.component.css'],
        templateUrl: 'tabel.component.html',
    })
], TabelComponent);
export { TabelComponent };
//# sourceMappingURL=tabel.component.js.map