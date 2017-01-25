import { Component } from '@angular/core';
import { TelnetService } from "./telnet.service";
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
export var LogsComponent = (function () {
    function LogsComponent(telnetService) {
        this.telnetService = telnetService;
    }
    LogsComponent.prototype.ngOnInit = function () {
        /*    this.onPooling()
                 .subscribe(
                     (logs: Log[]) => {
                         this.logs = logs;
                     }
                 );*/
    };
    LogsComponent.prototype.onButton = function () {
        var _this = this;
        this.onPooling()
            .subscribe(function (logs) {
            _this.logs = logs;
        });
    };
    LogsComponent.prototype.onPooling = function () {
        var _this = this;
        return Observable
            .interval(2000)
            .flatMap(function () {
            return _this.telnetService.getData();
        });
    };
    LogsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'log-list',
                    template: "\n<button (click)=\"onButton()\">Click me</button>\n            <div class=\"col-md-8 col-md-offset2\">\n            <app-log\n                [log]=\"log\"\n                *ngFor=\"let log of logs\"></app-log>\n</div>\n                "
                },] },
    ];
    /** @nocollapse */
    LogsComponent.ctorParameters = [
        { type: TelnetService, },
    ];
    return LogsComponent;
}());
