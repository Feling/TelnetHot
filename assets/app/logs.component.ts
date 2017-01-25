import {Component, OnInit} from '@angular/core';
import {TelnetService} from "./telnet.service";
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';

@Component({
    selector: 'log-list',
    template: `
<button (click)="onButton()">Click me</button>
            <div class="col-md-8 col-md-offset2">
            <app-log
                [log]="log"
                *ngFor="let log of logs"></app-log>
</div>
                `
})
export class LogsComponent implements OnInit {
    logs: Log[];

    constructor(private telnetService: TelnetService) {
    }

    ngOnInit() {
   /*    this.onPooling()
            .subscribe(
                (logs: Log[]) => {
                    this.logs = logs;
                }
            );*/
    }

    onButton(){
        this.onPooling()
            .subscribe(
                (logs: Log[]) => {
                    this.logs = logs;
                }
            );
    }

    onPooling() {
        return Observable
            .interval(30000)
            .flatMap(() => {
                return  this.telnetService.getData();
            });
    }

}