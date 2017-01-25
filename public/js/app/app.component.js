import { Component } from '@angular/core';
import { TelnetService } from "./telnet.service";
export var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.decorators = [
        { type: Component, args: [{
                    selector: 'my-app',
                    templateUrl: './app.component.html',
                    styleUrls: ['./app.component.css'],
                    providers: [TelnetService]
                },] },
    ];
    /** @nocollapse */
    AppComponent.ctorParameters = [];
    return AppComponent;
}());
