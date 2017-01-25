var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs";
var TelnetService = (function () {
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
    return TelnetService;
}());
TelnetService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], TelnetService);
export { TelnetService };
