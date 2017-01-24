import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import {HttpModule} from "@angular/http";
import {ipComponent} from "./ip-input.component";

@NgModule({
    declarations: [AppComponent,
        ipComponent
    ],
    imports: [BrowserModule,
        HttpModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}