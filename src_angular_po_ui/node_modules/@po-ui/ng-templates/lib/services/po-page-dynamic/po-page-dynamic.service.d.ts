import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PoLanguageService, PoNotificationService } from '@po-ui/ng-components';
import { PoPageDynamicLiterals } from './po-page-dynamic-literals.interface';
import * as i0 from "@angular/core";
export declare const poPageDynamicLiterals: {
    [key: string]: PoPageDynamicLiterals;
};
export declare class PoPageDynamicService {
    private http;
    private notification;
    readonly headers: HttpHeaders;
    private endpoint;
    private language;
    private metadata;
    constructor(http: HttpClient, notification: PoNotificationService, languageService: PoLanguageService);
    configServiceApi(config?: {
        endpoint?: string;
        metadata?: string;
    }): void;
    getMetadata<T>(type?: string): Observable<T>;
    deleteResource(id?: any, endpoint?: string): Observable<any>;
    deleteResources(ids: Array<any>, endpoint?: string): Observable<any>;
    getResources(params?: HttpParams, endpoint?: string): Observable<any>;
    getResource(id: any, endpoint?: string): Observable<any>;
    createResource(resource: any, endpoint?: string): Observable<any>;
    updateResource(id: any, resource: any, endpoint?: string): Observable<any>;
    private getLocalEndPoint;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoPageDynamicService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PoPageDynamicService>;
}
