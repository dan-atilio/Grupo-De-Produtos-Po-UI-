import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PoPageLogin } from './interfaces/po-page-login.interface';
import { PoPageLoginAuthenticationType } from './enums/po-page-login-authentication-type.enum';
import * as i0 from "@angular/core";
export declare class PoPageLoginService {
    private http;
    constructor(http: HttpClient);
    onLogin(url: string, type: PoPageLoginAuthenticationType, loginForm: PoPageLogin): Observable<Object>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoPageLoginService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PoPageLoginService>;
}
