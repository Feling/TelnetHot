/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './ip-input.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from './telnet.service';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
var renderType_ipComponent_Host:import0.RenderComponentType = (null as any);
class _View_ipComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _ipComponent_0_4:import3.ipComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ipComponent_Host0,renderType_ipComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('app-ip',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_ipComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._ipComponent_0_4 = new import3.ipComponent(this.parentInjector.get(import8.TelnetService));
    this._appEl_0.initComponent(this._ipComponent_0_4,[],compView_0);
    compView_0.create(this._ipComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.ipComponent) && (0 === requestNodeIndex))) { return this._ipComponent_0_4; }
    return notFoundResult;
  }
}
function viewFactory_ipComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_ipComponent_Host === (null as any))) { (renderType_ipComponent_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,[],{})); }
  return new _View_ipComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const ipComponentNgFactory:import10.ComponentFactory<import3.ipComponent> = new import10.ComponentFactory<import3.ipComponent>('app-ip',viewFactory_ipComponent_Host0,import3.ipComponent);
const styles_ipComponent:any[] = [];
var renderType_ipComponent:import0.RenderComponentType = (null as any);
class _View_ipComponent0 extends import1.AppView<import3.ipComponent> {
  _el_0:any;
  _text_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _text_10:any;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ipComponent0,renderType_ipComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'H1',(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'TEST',(null as any));
    this._text_2 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_3 = this.renderer.createElement(parentRenderNode,'input',(null as any));
    this._text_4 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_5 = this.renderer.createElement(parentRenderNode,'p',(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'',(null as any));
    this._text_7 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_8 = this.renderer.createElement(parentRenderNode,'button',(null as any));
    this._text_9 = this.renderer.createText(this._el_8,'Send Ip',(null as any));
    this._text_10 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_3,'keyup.enter',this.eventHandler(this._handle_keyup_enter_3_0.bind(this)));
    this._expr_1 = import7.UNINITIALIZED;
    var disposable_1:Function = this.renderer.listen(this._el_8,'click',this.eventHandler(this._handle_click_8_0.bind(this)));
    this.init([],[
      this._el_0,
      this._text_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._text_10
    ]
    ,[
      disposable_0,
      disposable_1
    ]
    ,[]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_1:any = import4.interpolate(1,'',this.context.value,'');
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setText(this._text_6,currVal_1);
      this._expr_1 = currVal_1;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_keyup_enter_3_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.onEnter(this._el_3.value)) !== false);
    return (true && pd_0);
  }
  private _handle_click_8_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.sendIp()) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_ipComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.ipComponent> {
  if ((renderType_ipComponent === (null as any))) { (renderType_ipComponent = viewUtils.createRenderComponentType('C:/Users/igork/Desktop/Telnet/assets/app/ip-input.html',0,import9.ViewEncapsulation.None,styles_ipComponent,{})); }
  return new _View_ipComponent0(viewUtils,parentInjector,declarationEl);
}