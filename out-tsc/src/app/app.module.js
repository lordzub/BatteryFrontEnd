import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabelComponent } from './tabel/tabel.component';
import { MatTableModule } from '@angular/material/table';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material';
import { BatteryCardsComponent } from './battery-cards/battery-cards.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MachinesComponent } from './machines/machines.component';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoginComponent } from './login/login.component';
const appRoutes = [
    { path: 'products', component: BatteryCardsComponent },
    { path: 'addProducts', component: TabelComponent },
    { path: 'login', component: LoginComponent },
    { path: '',
        redirectTo: '/products',
        pathMatch: 'full'
    },
];
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            TabelComponent,
            BatteryCardsComponent,
            ToolbarComponent,
            MachinesComponent,
            LoginComponent
        ],
        imports: [
            RouterModule.forRoot(appRoutes),
            BrowserModule,
            MatButtonModule,
            AppRoutingModule,
            MatSelectModule,
            NoopAnimationsModule,
            MatTableModule,
            MatFormFieldModule,
            MatInputModule,
            HttpModule,
            MatCardModule,
            MatExpansionModule,
            MatGridListModule,
            FormsModule,
            Ng2SearchPipeModule,
            MatToolbarModule,
            ReactiveFormsModule,
            CommonModule,
            MatProgressBarModule
        ],
        providers: [HttpModule],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map