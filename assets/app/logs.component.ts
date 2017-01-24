import { Component, OnInit } from '@angular/core';
import {TelnetService} from "./telnet.service";

@Component({
    selector: 'log-list',
    template: `
            <div class="col-md-8 col-md-offset2">
            <app-log
                [log]="log"
                *ngFor="let log of logs"></app-log>
</div>
                `
})
export class LogsComponent implements OnInit {
    logs: Log[];

    constructor( private telnetService: TelnetService) { }

    ngOnInit() {
        this.telnetService.getData()
            .subscribe(
                (logs: Log[]) =>{
                    this.logs = logs;
                }
            );
    }

}