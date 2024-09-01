import { PoComponentInjectorService } from './../po-component-injector/po-component-injector.service';
import { PoDialogAlertOptions, PoDialogConfirmOptions } from './interfaces/po-dialog.interface';
import { PoDialogBaseService } from './po-dialog-base.service';
import { PoDialogType } from './po-dialog.enum';
import * as i0 from "@angular/core";
/**
 * @docsExtends PoDialogBaseService
 *
 * @example
 *
 * <example name="po-dialog-basic" title="PO Dialog Basic">
 *  <file name="sample-po-dialog-basic/sample-po-dialog-basic.component.html"> </file>
 *  <file name="sample-po-dialog-basic/sample-po-dialog-basic.component.ts"> </file>
 * </example>
 *
 * <example name="po-dialog-labs" title="PO Dialog Labs">
 *  <file name="sample-po-dialog-labs/sample-po-dialog-labs.component.html"> </file>
 *  <file name="sample-po-dialog-labs/sample-po-dialog-labs.component.ts"> </file>
 * </example>
 *
 * <example name="po-dialog-cancel-credit-card" title="PO Dialog - Cancel Credit Card">
 *  <file name="sample-po-dialog-cancel-credit-card/sample-po-dialog-cancel-credit-card.component.html"> </file>
 *  <file name="sample-po-dialog-cancel-credit-card/sample-po-dialog-cancel-credit-card.component.ts"> </file>
 * </example>
 */
export declare class PoDialogService extends PoDialogBaseService {
    private poComponentInjector;
    constructor(poComponentInjector: PoComponentInjectorService);
    openDialog(dialogType: PoDialogType, dialogOptions: PoDialogAlertOptions | PoDialogConfirmOptions): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoDialogService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PoDialogService>;
}
