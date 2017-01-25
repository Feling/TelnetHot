var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { TelnetService } from "./telnet.service";
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
var LogsComponent = (function () {
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
    return LogsComponent;
}());
LogsComponent = __decorate([
    Component({
        selector: 'log-list',
        template: "\n<button (click)=\"onButton()\">Click me</button>\n            <div class=\"col-md-8 col-md-offset2\">\n            <app-log\n                [log]=\"log\"\n                *ngFor=\"let log of logs\"></app-log>\n</div>\n                "
    }),
    __metadata("design:paramtypes", [TelnetService])
], LogsComponent);
export { LogsComponent };
