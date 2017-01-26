/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from './app.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from './telnet.service';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/http/src/http';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from './app.component.css.shim.ngstyle';
import * as import11 from './ip-input.component';
import * as import12 from './ip-input.component.ngfactory';
import * as import13 from './logs.component';
import * as import14 from './logs.component.ngfactory';
var Wrapper_AppComponent = (function () {
    function Wrapper_AppComponent() {
        this._changed = false;
        this.context = new import0.AppComponent();
    }
    Wrapper_AppComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_AppComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_AppComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_AppComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_AppComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_AppComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_AppComponent;
}());
export { Wrapper_AppComponent };
var renderType_AppComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_AppComponent_Host0 = (function (_super) {
    __extends(View_AppComponent_Host0, _super);
    function View_AppComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_AppComponent_Host0, renderType_AppComponent_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways) || this;
    }
    Object.defineProperty(View_AppComponent_Host0.prototype, "_TelnetService_0_4", {
        get: function () {
            if ((this.__TelnetService_0_4 == null)) {
                (this.__TelnetService_0_4 = new import5.TelnetService(this.injectorGet(import8.Http, this.parentIndex)));
            }
            return this.__TelnetService_0_4;
        },
        enumerable: true,
        configurable: true
    });
    View_AppComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'my-app', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_AppComponent0(this.viewUtils, this, 0, this._el_0);
        this._AppComponent_0_3 = new Wrapper_AppComponent();
        this.compView_0.create(this._AppComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import9.ComponentRef_(0, this, this._el_0, this._AppComponent_0_3.context);
    };
    View_AppComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.AppComponent) && (0 === requestNodeIndex))) {
            return this._AppComponent_0_3.context;
        }
        if (((token === import5.TelnetService) && (0 === requestNodeIndex))) {
            return this._TelnetService_0_4;
        }
        return notFoundResult;
    };
    View_AppComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._AppComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_AppComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_AppComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AppComponent_Host0;
}(import1.AppView));
export var AppComponentNgFactory = new import9.ComponentFactory('my-app', View_AppComponent_Host0, import0.AppComponent);
var styles_AppComponent = [import10.styles];
var renderType_AppComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_AppComponent, {});
var View_AppComponent0 = (function (_super) {
    __extends(View_AppComponent0, _super);
    function View_AppComponent0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_AppComponent0, renderType_AppComponent, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_AppComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'h1', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, 'Hello World!', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_3 = import3.createRenderElement(this.renderer, parentRenderNode, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._text_4 = this.renderer.createText(this._el_3, 'Test', null);
        this._text_5 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_6 = import3.createRenderElement(this.renderer, parentRenderNode, 'app-ip', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_6 = new import12.View_ipComponent0(this.viewUtils, this, 6, this._el_6);
        this._ipComponent_6_3 = new import12.Wrapper_ipComponent(this.parentView.injectorGet(import5.TelnetService, this.parentIndex));
        this.compView_6.create(this._ipComponent_6_3.context);
        this._text_7 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_8 = import3.createRenderElement(this.renderer, parentRenderNode, 'log-list', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_8 = new import14.View_LogsComponent0(this.viewUtils, this, 8, this._el_8);
        this._LogsComponent_8_3 = new import14.Wrapper_LogsComponent(this.parentView.injectorGet(import5.TelnetService, this.parentIndex));
        this.compView_8.create(this._LogsComponent_8_3.context);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._el_8
        ]), null);
        return null;
    };
    View_AppComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import11.ipComponent) && (6 === requestNodeIndex))) {
            return this._ipComponent_6_3.context;
        }
        if (((token === import13.LogsComponent) && (8 === requestNodeIndex))) {
            return this._LogsComponent_8_3.context;
        }
        return notFoundResult;
    };
    View_AppComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        this._ipComponent_6_3.ngDoCheck(this, this._el_6, throwOnChange);
        this._LogsComponent_8_3.ngDoCheck(this, this._el_8, throwOnChange);
        this.compView_6.internalDetectChanges(throwOnChange);
        this.compView_8.internalDetectChanges(throwOnChange);
    };
    View_AppComponent0.prototype.destroyInternal = function () {
        this.compView_6.destroy();
        this.compView_8.destroy();
    };
    return View_AppComponent0;
}(import1.AppView));
export { View_AppComponent0 };