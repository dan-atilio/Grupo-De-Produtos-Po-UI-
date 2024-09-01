import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PoModalPasswordRecovery } from './interfaces/po-modal-password-recovery.interface';
import * as i0 from "@angular/core";
export declare class PoModalPasswordRecoveryService {
    private http;
    constructor(http: HttpClient);
    post(urlRecovery: string, item: PoModalPasswordRecovery, params?: HttpParams | {
        [param: string]: string | Array<string>;
    }): Observable<HttpResponse<Object>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoModalPasswordRecoveryService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PoModalPasswordRecoveryService>;
}
