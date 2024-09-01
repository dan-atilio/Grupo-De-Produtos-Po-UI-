import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PoPageDynamicDetailActions } from './interfaces/po-page-dynamic-detail-actions.interface';
import { PoPageDynamicDetailBeforeBack } from './interfaces/po-page-dynamic-detail-before-back.interface';
import { PoPageDynamicDetailBeforeRemove } from './interfaces/po-page-dynamic-detail-before-remove.interface';
import { PoPageDynamicDetailBeforeEdit } from './interfaces/po-page-dynamic-detail-before-edit.interface';
import * as i0 from "@angular/core";
export declare class PoPageDynamicDetailActionsService {
    private http;
    readonly headers: HttpHeaders;
    constructor(http: HttpClient);
    beforeBack(action?: PoPageDynamicDetailActions['beforeBack']): Observable<PoPageDynamicDetailBeforeBack>;
    beforeEdit(action: PoPageDynamicDetailActions['beforeEdit'], id: any, body: any): Observable<PoPageDynamicDetailBeforeEdit>;
    beforeRemove(action: PoPageDynamicDetailActions['beforeRemove'], id: any, body: any): Observable<PoPageDynamicDetailBeforeRemove>;
    private executeAction;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoPageDynamicDetailActionsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PoPageDynamicDetailActionsService>;
}
