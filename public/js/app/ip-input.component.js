import { Component } from '@angular/core';
import { TelnetService } from "./telnet.service";
import { IP } from "./ip.model";
import { Observable } from "rxjs";
export var ipComponent = (function () {
    function ipComponent(telnetService) {
        this.telnetService = telnetService;
        this.value = '';
    }
    ipComponent.prototype.onEnter = function (value) {
        this.value = value;
    };
    ipComponent.prototype.sendIp = function () {
        this.onPooling()
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
    };
    ipComponent.prototype.onPooling = function () {
        var _this = this;
        var ip = new IP(this.value);
        return Observable
            .interval(15000)
            .flatMap(function () {
            return _this.telnetService.setIp(ip);
        });
    };
    ipComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-ip',
                    templateUrl: './ip-input.html'
                },] },
    ];
    /** @nocollapse */
    ipComponent.ctorParameters = [
        { type: TelnetService, },
    ];
    return ipComponent;
}());
