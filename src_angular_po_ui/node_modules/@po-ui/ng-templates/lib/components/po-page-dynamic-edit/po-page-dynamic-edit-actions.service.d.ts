import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PoPageDynamicEditActions } from './interfaces/po-page-dynamic-edit-actions.interface';
import { PoPageDynamicEditBeforeCancel } from './interfaces/po-page-dynamic-edit-before-cancel.interface';
import { PoPageDynamicEditBeforeSave } from './interfaces/po-page-dynamic-edit-before-save.interface';
import { PoPageDynamicEditBeforeSaveNew } from './interfaces/po-page-dynamic-edit-before-save-new.interface';
import * as i0 from "@angular/core";
export declare class PoPageDynamicEditActionsService {
    private http;
    readonly headers: HttpHeaders;
    constructor(http: HttpClient);
    beforeCancel(action: PoPageDynamicEditActions['beforeCancel']): Observable<PoPageDynamicEditBeforeCancel>;
    beforeSave(action: PoPageDynamicEditActions['beforeSave'], id: string, body: any): Observable<PoPageDynamicEditBeforeSave>;
    beforeSaveNew(action: PoPageDynamicEditActions['beforeSaveNew'], id: string, body: any): Observable<PoPageDynamicEditBeforeSaveNew>;
    private executeAction;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoPageDynamicEditActionsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PoPageDynamicEditActionsService>;
}
