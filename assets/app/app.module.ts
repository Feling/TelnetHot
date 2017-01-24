import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import {HttpModule} from "@angular/http";
import {ipComponent} from "./ip-input.component";
import {LogsComponent} from "./logs.component";
import {LogComponent} from "./log.component";

@NgModule({
    declarations: [AppComponent,
        ipComponent,
        LogsComponent,
        LogComponent
    ],
    imports: [BrowserModule,
        HttpModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}