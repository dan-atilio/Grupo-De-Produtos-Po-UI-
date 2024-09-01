import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PoComponentInjectorService } from '../../services/po-component-injector/po-component-injector.service';
import { PoHttpRequesControltService } from './po-http-request-control-service';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * O serviço PO Http Request Interceptor realiza a contabilização de requisições pendentes na aplicação.
 *
 * Existe a possibilidade de não efetuar a contabilização das requisições pendentes, utilizando o parâmetro
 * `X-PO-No-Count-Pending-Requests`. Para isso deve ser informado no cabeçalho da requisição com o valor `'true'`,
 * por exemplo:
 *
 * ```
 * ...
 *  const headers = { 'X-PO-No-Count-Pending-Requests': 'true' };
 *
 *  this.http.get(`/customers/1`, { headers: headers });
 * ...
 *
 * ```
 * Para obter a quantidade de requisições pendentes, deve inscrever-se no método `getCountPendingRequests` do
 * serviço `PoHttpRequestInterceptorService`, com isso, ao realizar requisições utilizando `HttpClient`,
 * será retornado a quantidade de requisições pendentes.
 *
 * Também existe a possibildade de travar a tela e mostrar uma imagem de _loading_ durante o processamento de uma requisição
 * deve-se passar o parâmetro `X-PO-Screen-Lock` no cabeçalho da requisição com valor `'true'`.
 *
 * por exemplo:
 *
 * ```
 * ...
 *  const headers = { 'X-PO-Screen-Lock': 'true' };
 *
 *  this.http.get(`/customers/1`, { headers: headers });
 * ...
 *
 * ```
 * > Após a validação no interceptor, o parâmetro será removido do cabeçalho da requisição.
 *
 * Ao importar o módulo `PoModule` na aplicação, o `po-http-request-interceptor` é automaticamente configurado sem a necessidade
 * de qualquer configuração extra.
 *
 *
 * Segue abaixo um exemplo de uso:
 *
 * ```
 * import { HttpClient } from '@angular/common/http';
 *
 * ...
 *
 * @Injectable()
 * export class CustomersService {
 *
 *  headers = { 'X-PO-No-Count-Pending-Requests': true, 'X-PO-Screen-Lock': 'true' }
 *  pendingRequests: number = 0;
 *  subscription: Subscription;
 *
 *  constructor(
 *    private http: HttpClient,
 *    private httpRequestInterceptor: PoHttpRequestInterceptorService) { }
 *
 *  ngOnDestroy(): void {
 *    this.subscription.unsubscribe();
 *  }
 *
 *  ngOnInit(): void {
 *    this.subscription = this.httpRequestInterceptor.getCountPendingRequests().subscribe(data => {
 *      this.pendingRequests = data;
 *    });
 *  }
 *
 *  getCustomers() {
 *    return this.http.get(`/customers/1`, { headers: headers });
 *  }
 *
 *  ...
 *
 * }
 * ```
 *
 * @example
 * <example name='po-http-request-interceptor-labs' title='PO Http Request Interceptor Labs'>
 *  <file name='sample-po-http-request-interceptor-labs.component.ts'> </file>
 *  <file name='sample-po-http-request-interceptor-labs.component.html'> </file>
 * </example>
 */
export declare class PoHttpRequestInterceptorService implements HttpInterceptor {
    private controlHttpRequest;
    private poComponentInjector;
    private loadingOverlayComponent;
    private pendingRequests;
    private overlayRequests;
    constructor(controlHttpRequest: PoHttpRequesControltService, poComponentInjector: PoComponentInjectorService);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<import("@angular/common/http").HttpEvent<any>>;
    getCountPendingRequests(): Observable<any>;
    private buildLoading;
    private destroyLoading;
    private requestCloneWithoutHeaderParam;
    private setCountPendingRequests;
    private setCountOverlayRequests;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoHttpRequestInterceptorService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PoHttpRequestInterceptorService>;
}
