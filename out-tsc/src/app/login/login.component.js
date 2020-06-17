import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let LoginComponent = class LoginComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    ngOnInit() {
    }
    Login() {
        this.auth.Login(this.USERNAME, this.PASSWORD).subscribe((data) => {
            var ans = JSON.parse(data['_body']);
            if (ans['message'] == 'Successful') {
                this.router.navigate(['/addProducts']);
            }
        });
    }
};
LoginComponent = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map