import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare class PoPageChangePasswordService {
    private http;
    constructor(http: HttpClient);
    post(url: string, item: any): Observable<HttpResponse<Object>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoPageChangePasswordService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PoPageChangePasswordService>;
}
