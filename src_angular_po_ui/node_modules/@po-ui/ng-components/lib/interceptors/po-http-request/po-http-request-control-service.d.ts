import { Observable, Subject } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * @docsPrivate
 *
 * Serviço responsável por efetuar o controle de interação com o serviço de interceptor `PoHttpRequestInterceptorService`
 * gerenciando o seu estado.
 */
export declare class PoHttpRequesControltService {
    controlHttpRequest: Subject<number>;
    getControlHttpRequest(): Observable<any>;
    send(value?: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoHttpRequesControltService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PoHttpRequesControltService>;
}
