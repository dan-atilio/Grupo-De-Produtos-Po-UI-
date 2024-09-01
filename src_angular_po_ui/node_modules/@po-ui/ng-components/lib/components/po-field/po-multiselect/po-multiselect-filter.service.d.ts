import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PoMultiselectFilter } from './po-multiselect-filter.interface';
import { PoMultiselectOption } from './po-multiselect-option.interface';
import * as i0 from "@angular/core";
export declare class PoMultiselectFilterService implements PoMultiselectFilter {
    private http;
    fieldLabel: string;
    fieldValue: string;
    private _url;
    private messages;
    get url(): string;
    constructor(http: HttpClient);
    getFilteredData({ value }: any): Observable<Array<PoMultiselectOption | any>>;
    getObjectsByValues(value: Array<string | number>): Observable<Array<PoMultiselectOption | any>>;
    configProperties(url: string, fieldLabel: string, fieldValue: string): void;
    private parseToArrayMultiselectOptions;
    private parseToMultiselectOption;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoMultiselectFilterService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PoMultiselectFilterService>;
}
