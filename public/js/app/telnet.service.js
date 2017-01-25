import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs";
export var TelnetService = (function () {
    function TelnetService(http) {
        this.http = http;
    }
    TelnetService.prototype.getData = function () {
        var _this = this;
        this.loading = true;
        return this.http.get('https://telnet-app.herokuapp.com//telnet')
            .map(function (response) {
            var messages = response.json().obj;
            console.log(messages);
            _this.loading = false;
            return messages;
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    TelnetService.prototype.setIp = function (ip) {
        var body = JSON.stringify(ip);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('https://telnet-app.herokuapp.com/telnet', body, { headers: headers })
            .map(function (response) {
            var result = response.json();
        });
    };
    TelnetService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    TelnetService.ctorParameters = [
        { type: Http, },
    ];
    return TelnetService;
}());
