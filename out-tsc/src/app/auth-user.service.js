import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let AuthUserService = class AuthUserService {
    constructor(http) {
        this.http = http;
        this.url = '//127.0.0.1:8080/api/auth';
    }
    Login(username, password) {
        return this.http.post(this.url, { username: username, password: password });
    }
};
AuthUserService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthUserService);
export { AuthUserService };
//# sourceMappingURL=auth-user.service.js.map