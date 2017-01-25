import { Component, Input } from '@angular/core';
export var LogComponent = (function () {
    function LogComponent() {
    }
    LogComponent.prototype.ngOnInit = function () { };
    LogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-log',
                    templateUrl: './log.component.html'
                },] },
    ];
    /** @nocollapse */
    LogComponent.ctorParameters = [];
    LogComponent.propDecorators = {
        'log': [{ type: Input },],
    };
    return LogComponent;
}());
