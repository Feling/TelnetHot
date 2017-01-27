import {Component, OnInit} from '@angular/core';
import {TelnetService} from "./telnet.service";
import {IP} from "./ip.model";
import {Observable} from "rxjs";

@Component({
    selector: 'app-ip',
    templateUrl: './ip-input.html'
})
export class ipComponent {
    constructor(private telnetService: TelnetService) {
    }

    value = '';

    onEnter(value: string) {
        this.value = value;
    }

    sendIp() {
        this.onPooling()
            .subscribe(
                data => console.log(data),
                error => console.error(error)
            );
    }
    onPooling() {
        const ip = new IP(this.value);
        return Observable
            .interval(180000)
            .flatMap(() => {
                return   this.telnetService.setIp(ip);
            });
    }
}

