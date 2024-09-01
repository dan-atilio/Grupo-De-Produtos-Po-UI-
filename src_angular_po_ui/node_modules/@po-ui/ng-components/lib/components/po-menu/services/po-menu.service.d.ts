import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PoMenuItemFiltered } from '../po-menu-item/po-menu-item-filtered.interface';
import { PoMenuFilter } from '../po-menu-filter/po-menu-filter.interface';
import * as i0 from "@angular/core";
/**
 * @docsPrivate
 *
 * @description
 *
 * Serviço que implementa a interface `PoMenuFilter`, utilizado para fazer requisições ao serviço informado pelo usuário,
 * caso for uma URL, no componente `po-menu`.
 */
export declare class PoMenuService implements PoMenuFilter {
    private http;
    private _url;
    get url(): string;
    constructor(http: HttpClient);
    configProperties(url: string): void;
    getFilteredData(search: string, params?: any): Observable<Array<PoMenuItemFiltered>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoMenuService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PoMenuService>;
}
