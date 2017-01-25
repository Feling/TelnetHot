import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import { HttpModule } from "@angular/http";
import { ipComponent } from "./ip-input.component";
import { LogsComponent } from "./logs.component";
import { LogComponent } from "./log.component";
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [AppComponent,
                        ipComponent,
                        LogsComponent,
                        LogComponent
                    ],
                    imports: [BrowserModule,
                        HttpModule
                    ],
                    bootstrap: [AppComponent]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = [];
    return AppModule;
}());
