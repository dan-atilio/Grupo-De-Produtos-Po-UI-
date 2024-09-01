import { PoComponentInjectorService } from './../po-component-injector/po-component-injector.service';
import { PoNotificationBaseService } from './po-notification-base.service';
import { PoToaster } from './po-toaster/po-toaster.interface';
import * as i0 from "@angular/core";
/**
 * @docsExtends PoNotificationBaseService
 *
 * @example
 *
 * <example name="po-notification-basic" title="PO Notification Basic">
 *  <file name="sample-po-notification-basic/sample-po-notification-basic.component.html"> </file>
 *  <file name="sample-po-notification-basic/sample-po-notification-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-notification-labs" title="PO Notification Labs">
 *  <file name="sample-po-notification-labs/sample-po-notification-labs.component.html"> </file>
 *  <file name="sample-po-notification-labs/sample-po-notification-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-notification-sales" title="PO Notification - Sales">
 *  <file name="sample-po-notification-sales/sample-po-notification-sales.component.html"> </file>
 *  <file name="sample-po-notification-sales/sample-po-notification-sales.component.ts"> </file>
 * </example>
 */
export declare class PoNotificationService extends PoNotificationBaseService {
    private poComponentInjector;
    constructor(poComponentInjector: PoComponentInjectorService);
    createToaster(toaster: PoToaster): void;
    destroyToaster(toaster: any): void;
    private observableOnClose;
    private verifyLimitToaster;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoNotificationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PoNotificationService>;
}
