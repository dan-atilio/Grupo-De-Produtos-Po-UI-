import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PoComboFilter } from './interfaces/po-combo-filter.interface';
import { PoComboOption } from './interfaces/po-combo-option.interface';
import * as i0 from "@angular/core";
/**
 * @docsPrivate
 *
 * @description
 *
 * Serviço padrão utilizado para filtrar os dados do componente po-combo.
 */
export declare class PoComboFilterService implements PoComboFilter {
    private http;
    fieldLabel: string;
    fieldValue: string;
    hasNext: boolean;
    readonly headers: HttpHeaders;
    private _url;
    private messages;
    get url(): string;
    constructor(http: HttpClient);
    getFilteredData(param: any, filterParams?: any): Observable<Array<PoComboOption>>;
    getObjectByValue(value: string | number, filterParams?: any): Observable<PoComboOption>;
    configProperties(url: string, fieldLabel: string, fieldValue: string): void;
    scrollListener(componentListner: HTMLElement): Observable<any>;
    private prepareParams;
    private parseToArrayComboOption;
    private parseToComboOption;
    private addMessage;
    private displayMessages;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoComboFilterService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PoComboFilterService>;
}
