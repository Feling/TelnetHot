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
import * as import0 from './logs.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from './telnet.service';
import * as import9 from './log.component';
import * as import10 from './log.component.ngfactory';
import * as import11 from '@angular/core/src/linker/view_container';
import * as import12 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import13 from '@angular/core/src/linker/template_ref';
import * as import14 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import15 from '@angular/common/src/directives/ng_for';
var Wrapper_LogsComponent = (function () {
    function Wrapper_LogsComponent(p0) {
        this._changed = false;
        this.context = new import0.LogsComponent(p0);
    }
    Wrapper_LogsComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_LogsComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_LogsComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_LogsComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_LogsComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_LogsComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_LogsComponent;
}());
export { Wrapper_LogsComponent };
var renderType_LogsComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_LogsComponent_Host0 = (function (_super) {
    __extends(View_LogsComponent_Host0, _super);
    function View_LogsComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_LogsComponent_Host0, renderType_LogsComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_LogsComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'log-list', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_LogsComponent0(this.viewUtils, this, 0, this._el_0);
        this._LogsComponent_0_3 = new Wrapper_LogsComponent(this.injectorGet(import8.TelnetService, this.parentIndex));
        this.compView_0.create(this._LogsComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._LogsComponent_0_3.context);
    };
    View_LogsComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.LogsComponent) && (0 === requestNodeIndex))) {
            return this._LogsComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_LogsComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._LogsComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_LogsComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_LogsComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_LogsComponent_Host0;
}(import1.AppView));
export var LogsComponentNgFactory = new import7.ComponentFactory('log-list', View_LogsComponent_Host0, import0.LogsComponent);
var styles_LogsComponent = [];
var View_LogsComponent1 = (function (_super) {
    __extends(View_LogsComponent1, _super);
    function View_LogsComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_LogsComponent1, renderType_LogsComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_LogsComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'app-log', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_0 = new import10.View_LogComponent0(this.viewUtils, this, 0, this._el_0);
        this._LogComponent_0_3 = new import10.Wrapper_LogComponent();
        this.compView_0.create(this._LogComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return null;
    };
    View_LogsComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import9.LogComponent) && (0 === requestNodeIndex))) {
            return this._LogComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_LogsComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this.context.$implicit;
        this._LogComponent_0_3.check_log(currVal_0_0_0, throwOnChange, false);
        this._LogComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_LogsComponent1.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_LogsComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_LogsComponent1;
}(import1.AppView));
var renderType_LogsComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_LogsComponent, {});
var View_LogsComponent0 = (function (_super) {
    __extends(View_LogsComponent0, _super);
    function View_LogsComponent0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_LogsComponent0, renderType_LogsComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_LogsComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'button', import3.EMPTY_INLINE_ARRAY, null);
        this._text_2 = this.renderer.createText(this._el_1, 'Click me', null);
        this._text_3 = this.renderer.createText(parentRenderNode, '\n            ', null);
        this._el_4 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'col-md-8 col-md-offset2'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n            ', null);
        this._anchor_6 = this.renderer.createTemplateAnchor(this._el_4, null);
        this._vc_6 = new import11.ViewContainer(6, 4, this, this._anchor_6);
        this._TemplateRef_6_5 = new import13.TemplateRef_(this, 6, this._anchor_6);
        this._NgFor_6_6 = new import12.Wrapper_NgFor(this._vc_6.vcRef, this._TemplateRef_6_5, this.parentView.injectorGet(import14.IterableDiffers, this.parentIndex), this.ref);
        this._text_7 = this.renderer.createText(this._el_4, '\n', null);
        this._text_8 = this.renderer.createText(parentRenderNode, '\n                ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_1, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_1));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._el_1,
            this._text_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._anchor_6,
            this._text_7,
            this._text_8
        ]), [disposable_0]);
        return null;
    };
    View_LogsComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import13.TemplateRef) && (6 === requestNodeIndex))) {
            return this._TemplateRef_6_5;
        }
        if (((token === import15.NgFor) && (6 === requestNodeIndex))) {
            return this._NgFor_6_6.context;
        }
        return notFoundResult;
    };
    View_LogsComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_6_0_0 = this.context.logs;
        this._NgFor_6_6.check_ngForOf(currVal_6_0_0, throwOnChange, false);
        this._NgFor_6_6.ngDoCheck(this, this._anchor_6, throwOnChange);
        this._vc_6.detectChangesInNestedViews(throwOnChange);
    };
    View_LogsComponent0.prototype.destroyInternal = function () {
        this._vc_6.destroyNestedViews();
    };
    View_LogsComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 6)) {
            return new View_LogsComponent1(this.viewUtils, this, 6, this._anchor_6, this._vc_6);
        }
        return null;
    };
    View_LogsComponent0.prototype.handleEvent_1 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.onButton() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_LogsComponent0;
}(import1.AppView));
export { View_LogsComponent0 };