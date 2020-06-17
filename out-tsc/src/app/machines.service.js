import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let MachinesService = class MachinesService {
    constructor(http) {
        this.http = http;
        this.url = '//127.0.0.1:8080/api/machines';
    }
    getMachines() {
        return this.http.get(this.url);
    }
    addMachine(Machine) {
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
        };
        console.log('Adding Battery');
        console.log('Battery Added');
        return this.http.post(this.url, { machine });
    }
    DelMachine(id) {
        var deleteUrl = this.url + '/' + id;
        return this.http.delete(deleteUrl);
    }
    UpdateMachine(machine) {
        var id = machine['_id'];
        console.log(machine);
        var updateUrl = this.url + '/' + id;
        return this.http.put(updateUrl, { machine });
    }
};
MachinesService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], MachinesService);
export { MachinesService };
//# sourceMappingURL=machines.service.js.map