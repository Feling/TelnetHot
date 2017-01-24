import { Component } from '@angular/core';
import {TelnetService} from "./telnet.service";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [TelnetService]
})
export class AppComponent {

    constructor(private telnetService: TelnetService){}
    doTest(){
        this.telnetService.getData()
            .subscribe(
                result => console.log(JSON.stringify(result))
            )
    }
}