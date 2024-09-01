import { HttpClient } from '@angular/common/http';
import { PoDynamicFormLoad } from '../po-dynamic-form-load/po-dynamic-form-load.interface';
import { PoDynamicFormValidation } from '../po-dynamic-form-validation/po-dynamic-form-validation.interface';
export declare class PoDynamicFormOperation {
    private http;
    constructor(http: HttpClient);
    protected execute(action: Function | string, param: any): import("rxjs").Observable<any>;
    protected post(url: string, body: PoDynamicFormValidation | any): import("rxjs").Observable<Object>;
    protected setFormDefaultIfEmpty(validateFields: any): PoDynamicFormValidation | PoDynamicFormLoad;
}
