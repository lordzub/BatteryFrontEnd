import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
let MachinesComponent = class MachinesComponent {
    constructor(http, BS, MS) {
        this.http = http;
        this.BS = BS;
        this.MS = MS;
        this.Batteries = new FormControl();
        this.BatteryNames = [];
        this.data = null;
        this.dataSource = [];
        this.ShowAdd = false;
        this.Update = false;
        this.UpdateData = [];
        this.AddMachineData = [];
        this.displayedColumns = ['OEM', 'Catergory', 'Model', 'voltage', 'minCap', 'maxCap', 'Energy', 'minWeight', 'Width', 'Length', 'Height', 'UpdateButtons', 'DelButtons'];
        this.getTableData();
        this.getBats();
    }
    addBattery() {
        console.log(this.AddMachineData);
        this.MS.addMachine(this.AddMachineData).subscribe(data => {
            console.log(data);
            this.getTableData();
            for (var x in this.AddMachineData) {
                console.log(this.AddMachineData[x], x);
                this.AddMachineData[x] = null;
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
        var machineId = this.dataSource[i]['_id'];
        console.log(this.dataSource[i]['_id']);
        this.MS.DelMachine(machineId).subscribe(data => {
            console.log(data);
            this.getTableData();
        });
    }
    UpdateMachineData(updateData) {
        console.log(updateData);
        this.MS.UpdateMachine(updateData).subscribe(data => {
            console.log(data);
            for (var x in this.UpdateMachineData) {
                console.log(this.UpdateMachineData[x], x);
                this.UpdateMachineData[x] = null;
            }
            this.Update = !this.Update;
        });
    }
    getTableData() {
        this.MS.getMachines().subscribe((data) => {
            var machineData = JSON.parse(data['_body']);
            this.dataSource = machineData['machines'];
            console.log(this.dataSource);
        });
    }
    getBats() {
        this.BS.getBatteries().subscribe((data) => {
            var batteries = JSON.parse(data['_body']);
            var bats = batteries['batteries'];
            for (var bat in bats) {
                this.BatteryNames.push(bats[bat].name);
                console.log(bats[bat].name);
            }
            console.log(bats);
        });
    }
};
MachinesComponent = tslib_1.__decorate([
    Component({
        selector: 'app-machines',
        templateUrl: './machines.component.html',
        styleUrls: ['./machines.component.css']
    })
], MachinesComponent);
export { MachinesComponent };
//# sourceMappingURL=machines.component.js.map