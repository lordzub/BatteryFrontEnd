import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
let BatteryCardsComponent = class BatteryCardsComponent {
    constructor(BS, MS) {
        this.BS = BS;
        this.MS = MS;
        this.CustomSearchBool = false;
        this.customSearch = [];
        this.Machines = new FormControl();
        this.Models = new FormControl();
        this.Modelss = new FormControl();
        this.Model = new FormControl();
        this.Batteries = [];
        this.B = false;
        this.Catergory = [];
        this.CatModels = [];
        this.MA = [];
        this.ManU = [];
        this.OEMS = [];
        this.SearchTest = false;
        this.Bool = [];
        this.test = this.BS.getBatteries().subscribe((data) => {
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
                    models: Batteries[bat]['models'],
                };
                this.Bool.push(this.B);
                this.Batteries.push(battery);
            }
        });
        this.getMachines();
    }
    Show() {
        console.log(this.customSearch);
        console.log(Object.keys(this.customSearch));
        var keys = Object.keys(this.customSearch);
        console.log(this.customSearch[keys[0]]);
    }
    checkCustomSearch() {
        if (Object.keys(this.customSearch).length > 0) {
            return true;
        }
        else {
            return false;
        }
    }
    ValidateCustomSearch(bat) {
        var correctCount = 0;
        var batKeys = Object.keys(bat);
        // console.log(batKeys)
        var keys = Object.keys(this.customSearch);
        for (var keyNo in keys) {
            console.log(keyNo);
            var SearchKey = keys[keyNo];
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
                if (this.customSearch[SearchKey] >= bat[SearchKey] || this.customSearch[SearchKey] >= bat['width']) {
                    correctCount += 1;
                }
            }
            if (SearchKey == 'width') {
                if (this.customSearch[SearchKey] >= bat[SearchKey] || this.customSearch[SearchKey] >= bat['len']) {
                    correctCount += 1;
                }
            }
        }
        if (correctCount == keys.length) {
            return true;
        }
        else {
            return false;
        }
    }
    getMachines() {
        var a = [];
        this.MS.getMachines().subscribe((data) => {
            var machineData = JSON.parse(data['_body']);
            var machines = machineData['machines'];
            console.log(machines);
            for (var ma in machines) {
                this.MA.push(machines[ma]);
                if (this.OEMS.indexOf(machines[ma].OEM) == -1) {
                    this.OEMS.push(machines[ma].OEM);
                }
                // console.log(this.ManU)
                for (var man in this.OEMS) {
                    for (var cat in this.Catergory) {
                        // console.log(cat)
                        var temp = [];
                        for (var ma in machines) {
                            if (this.Catergory[cat] == machines[ma].catergory && this.OEMS[man] == machines[ma].OEM) {
                                temp.push(machines[ma].model);
                            }
                        }
                    }
                    var test = {
                        oem: this.OEMS[man],
                        cat: this.Catergory[cat],
                        models: temp
                    };
                    if (this.CatModels.indexOf(this.OEMS[man]) == -1) {
                        this.CatModels.push(test);
                    }
                    console.log(this.CatModels);
                }
            }
            // console.log(this.OEMS)
            // console.log(this.Catergory)
        });
    }
    CheckValid(Bat) {
        if (Math.abs(this.USERSEARCH.voltage - Bat.voltage) < 5 && this.USERSEARCH.height > Bat.height && this.USERSEARCH.width > Bat.width && this.USERSEARCH.len > Bat.len && this.USERSEARCH.minCap / 3 > Bat.capacity) {
            return true;
        }
        if (Math.abs(this.USERSEARCH.voltage - Bat.voltage) < 5) {
            console.log('Volatge Check 1/5');
        }
        if (this.USERSEARCH.height > Bat.height) {
            console.log('Height Check 2/5');
        }
        if (this.USERSEARCH.width > Bat.width && this.USERSEARCH.len > Bat.len) {
            console.log('Width and length 3/5');
        }
        if (this.USERSEARCH.minCap / 3 < Bat.capacity) {
            console.log('minCap 4/5');
        }
        if (this.USERSEARCH.maxCap / 3 > Bat.capacity) {
            console.log('macCap 5/5');
        }
        else {
            return false;
        }
    }
};
BatteryCardsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-battery-cards',
        templateUrl: './battery-cards.component.html',
        styleUrls: ['./battery-cards.component.css']
    })
], BatteryCardsComponent);
export { BatteryCardsComponent };
//# sourceMappingURL=battery-cards.component.js.map