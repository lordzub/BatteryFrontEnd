import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let BatteriesService = class BatteriesService {
    constructor(http) {
        this.http = http;
        this.url = '//127.0.0.1:8080/api/battery';
    }
    getBatteries() {
        return this.http.get(this.url);
    }
    addBattery(bat) {
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
        return this.http.post(this.url, { battery });
    }
    DelBat(id) {
        var deleteUrl = this.url + '/' + id;
        return this.http.delete(deleteUrl);
    }
    UpdateBat(bat) {
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
            cellWeight: bat.cellWeight,
        };
        var updateUrl = this.url + '/' + id;
        return this.http.put(updateUrl, { battery });
    }
};
BatteriesService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], BatteriesService);
export { BatteriesService };
//# sourceMappingURL=batteries.service.js.map