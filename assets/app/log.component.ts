import {Component, OnInit, Input} from '@angular/core';
import {LogClass} from "./log.model";

@Component({
    selector: 'app-log',
    templateUrl: './log.component.html'
})
export class LogComponent implements OnInit {
    @Input() log: LogClass;
    constructor() { }

    ngOnInit() { }

}