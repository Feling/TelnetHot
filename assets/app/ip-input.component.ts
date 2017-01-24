import {Component, OnInit} from '@angular/core';
import {TelnetService} from "./telnet.service";
import {IP} from "./ip.model";

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
        const ip = new IP(this.value);
        this.telnetService.setIp(ip)
            .subscribe(
                data => console.log(data),
                error => console.error(error)
            );
    }
}

