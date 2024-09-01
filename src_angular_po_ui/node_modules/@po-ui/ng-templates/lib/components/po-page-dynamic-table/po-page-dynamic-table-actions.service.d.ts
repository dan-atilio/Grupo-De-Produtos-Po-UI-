import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PoPageDynamicTableActions } from './interfaces/po-page-dynamic-table-actions.interface';
import { PoPageDynamicTableBeforeDuplicate } from './interfaces/po-page-dynamic-table-before-duplicate.interface';
import { PoPageDynamicTableBeforeEdit } from './interfaces/po-page-dynamic-table-before-edit.interface';
import { PoPageDynamicTableBeforeNew } from './interfaces/po-page-dynamic-table-before-new.interface';
import { PoPageDynamicTableBeforeRemove } from './interfaces/po-page-dynamic-table-before-remove.interface';
import { PoPageDynamicTableBeforeDetail } from './interfaces/po-page-dynamic-table-before-detail.interface';
import { PoPageDynamicTableBeforeRemoveAll } from './interfaces/po-page-dynamic-table-before-remove-all.interface';
import { PoPageDynamicTableCustomAction } from './interfaces/po-page-dynamic-table-custom-action.interface';
import * as i0 from "@angular/core";
export declare class PoPageDynamicTableActionsService {
    private http;
    readonly headers: HttpHeaders;
    constructor(http: HttpClient);
    beforeDuplicate(action: PoPageDynamicTableActions['beforeDuplicate'], id: any, body: any): Observable<PoPageDynamicTableBeforeDuplicate>;
    beforeEdit(action: PoPageDynamicTableActions['beforeEdit'], id: any, body: any): Observable<PoPageDynamicTableBeforeEdit>;
    beforeNew(action?: PoPageDynamicTableActions['beforeNew']): Observable<PoPageDynamicTableBeforeNew>;
    beforeRemove(action: PoPageDynamicTableActions['beforeRemove'], id: string, resource: any): Observable<PoPageDynamicTableBeforeRemove>;
    beforeRemoveAll(action: PoPageDynamicTableActions['beforeRemoveAll'], resources: Array<any>): Observable<PoPageDynamicTableBeforeRemoveAll>;
    beforeDetail(action: PoPageDynamicTableActions['beforeDetail'], id: string, resource: any): Observable<PoPageDynamicTableBeforeDetail>;
    customAction(action: PoPageDynamicTableCustomAction['action'], resource?: any): Observable<unknown>;
    private executeAction;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoPageDynamicTableActionsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PoPageDynamicTableActionsService>;
}
