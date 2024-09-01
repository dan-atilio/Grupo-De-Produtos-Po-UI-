import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PoLookupFilter } from '../interfaces/po-lookup-filter.interface';
import { PoLookupFilteredItemsParams } from '../interfaces/po-lookup-filtered-items-params.interface';
import * as i0 from "@angular/core";
/**
 * @docsPrivate
 *
 * @description
 *
 * Serviço padrão utilizado para filtrar os dados do componente po-lookup.
 */
export declare class PoLookupFilterService implements PoLookupFilter {
    private httpClient;
    readonly headers: HttpHeaders;
    private url;
    private fieldValue;
    private multiple;
    constructor(httpClient: HttpClient);
    getFilteredItems(filteredItemsParams: PoLookupFilteredItemsParams): Observable<any>;
    getObjectByValue(value: any, filterParams?: any): Observable<Array<any> | {
        [key: string]: any;
    }>;
    setConfig(url: string, fieldValue: string, multiple: boolean): void;
    private validateParams;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoLookupFilterService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PoLookupFilterService>;
}
