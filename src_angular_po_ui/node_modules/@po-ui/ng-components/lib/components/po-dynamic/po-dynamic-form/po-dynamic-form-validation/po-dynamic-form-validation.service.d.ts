import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PoDynamicFormField } from '../po-dynamic-form-field.interface';
import { PoDynamicFormOperation } from '../po-dynamic-form-operation/po-dynamic-form-operation';
import { PoDynamicFormValidation } from './po-dynamic-form-validation.interface';
import * as i0 from "@angular/core";
export declare class PoDynamicFormValidationService extends PoDynamicFormOperation {
    constructor(http: HttpClient);
    sendFieldChange(field: PoDynamicFormField, value: any): Observable<any>;
    sendFormChange(validate: Function | string, field: PoDynamicFormField, value: any): Observable<PoDynamicFormValidation>;
    updateFieldsForm(validatedFields?: Array<PoDynamicFormField>, fields?: Array<PoDynamicFormField>): PoDynamicFormField[];
    private setFieldDefaultIfEmpty;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoDynamicFormValidationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PoDynamicFormValidationService>;
}
