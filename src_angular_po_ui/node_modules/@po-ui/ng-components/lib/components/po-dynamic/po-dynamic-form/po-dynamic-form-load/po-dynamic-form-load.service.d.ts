import { HttpClient } from '@angular/common/http';
import { PoDynamicFormField } from '../po-dynamic-form-field.interface';
import { PoDynamicFormOperation } from '../po-dynamic-form-operation/po-dynamic-form-operation';
import * as i0 from "@angular/core";
export declare class PoDynamicFormLoadService extends PoDynamicFormOperation {
    constructor(http: HttpClient);
    createAndUpdateFieldsForm(loadedFields?: Array<PoDynamicFormField>, fields?: Array<PoDynamicFormField>): PoDynamicFormField[];
    executeLoad(load: Function | string, value: any): import("rxjs").Observable<import("@po-ui/ng-components").PoDynamicFormLoad | import("@po-ui/ng-components").PoDynamicFormValidation>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoDynamicFormLoadService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PoDynamicFormLoadService>;
}
