import { Component } from '@angular/core';
import { TelnetService } from "./telnet.service";
export var AppComponent = (function () {
    function AppComponent(telnetService) {
        this.telnetService = telnetService;
    }
    AppComponent.prototype.doTest = function () {
        this.telnetService.getData()
            .subscribe(function (result) { return console.log(JSON.stringify(result)); });
    };
    AppComponent.decorators = [
        { type: Component, args: [{
                    selector: 'my-app',
                    templateUrl: './app.component.html',
                    styleUrls: ['./app.component.css'],
                    providers: [TelnetService]
                },] },
    ];
    /** @nocollapse */
    AppComponent.ctorParameters = [
        { type: TelnetService, },
    ];
    return AppComponent;
}());
