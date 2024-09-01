import { ComponentRef, ComponentFactoryResolver, ApplicationRef, Injector } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PoComponentInjectorService {
    private componentResolver;
    private applicationRef;
    private injector;
    constructor(componentResolver: ComponentFactoryResolver, applicationRef: ApplicationRef, injector: Injector);
    createComponentInApplication(component: any): ComponentRef<any>;
    destroyComponentInApplication(componentRef: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoComponentInjectorService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PoComponentInjectorService>;
}
