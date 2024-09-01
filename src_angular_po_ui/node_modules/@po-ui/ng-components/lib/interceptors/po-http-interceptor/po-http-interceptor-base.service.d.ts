import { HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PoComponentInjectorService } from '../../services/po-component-injector/po-component-injector.service';
import { PoLanguageService } from '../../services/po-language/po-language.service';
/**
 * @description
 *
 * O *interceptor* tem a finalidade de exibir notificações com mensagens na tela, baseado nas respostas das requisições HTTP.
 *
 * Pode ser utilizado para dar feedback das ações do usuário como, por exemplo: erro de autorização, mensagens de regras de negócio,
 * atualizações de registros, erro quando o servidor estiver indisponível e entre outros.
 *
 * ## Configuração
 *
 * Para o correto funcionamento do interceptor `po-http-interceptor`, deve ser importado o `BrowserAnimationsModule` no
 * módulo principal da sua aplicação.
 *
 * Módulo da aplicação:
 * ```
 * import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 * import { PoModule } from '@po-ui/ng-components';
 * ...
 *
 * @NgModule({
 *   imports: [
 *     BrowserModule,
 *     BrowserAnimationsModule,
 *     ...
 *     PoModule
 *   ],
 *   declarations: [
 *     AppComponent,
 *     ...
 *   ],
 *   providers: [],
 *   bootstrap: [AppComponent]
 * })
 * export class AppModule { }
 * ```
 *
 * Ao importar o módulo `PoModule` na aplicação, o `po-http-interceptor` é automaticamente configurado sem a necessidade
 * de qualquer configuração extra.
 *
 * Ao realizar requisições utilize o `HttpClient`, conforme exemplo abaixo:
 *
 * ```
 * import { HttpClient } from '@angular/common/http';
 *
 * ...
 *
 * @Injectable()
 * export class UserService {
 *
 *   constructor(private http: HttpClient) { }
 *
 *   getUsers() {
 *     return this.http.get('/api/users');
 *   }
 *
 *   ...
 *
 * }
 * ```
 *
 * ## Como usar
 *
 * Para exibir as noticações é necessário informar a mensagem no retorno da requisição. A estrutura da mensagem
 * é feita com base no status da resposta, conforme será apresentado nos próximos tópicos.
 *
 * ### Estrutura das mensagens
 *
 * #### Mensagens de sucesso `2xx`
 *
 * Para exibir mensagens ao retornar uma lista ou um item, deve-se incluir a propriedade `_messages` no objeto de retorno.
 * Por exemplo:
 * ```
 * {
 *   "_messages": [
 *     {
 *       "type": "success" || "warning" || "error" || "information" (será exibido a `tag` apenas se esta propriedade possuir valor),
 *       "code": "título ou código da mensagem",
 *       "message": "texto da mensagem",
 *       "detailedMessage": "detalhamento da mensagem"
 *     }
 *   ]
 * }
 * ```
 *
 * #### Mensagens de erro `4xx` ou `5xx`
 *
 * Ao retornar erro, o objeto não necessita ter `_messages`, deve-se retornar o objeto diretamente:
 *
 * ```
 * {
 *    "code": "título ou código da mensagem",
 *    "message": "texto da mensagem",
 *    "detailedMessage": "detalhamento da mensagem"
 * }
 * ```
 *
 * Também é possível informar as seguintes propriedades:
 *
 * - `helpUrl`: link para a documentação do erro;
 *    - Caso for informado, será exibido uma ação de "Ajuda" na notificação, para isso não deverá ter a propriedade `detailedMessage`.
 * - `type`: É possível informar `error`, `warning` e `information`, sendo `error` o valor padrão.
 * - `details`: Uma lista de objetos de mensagem (recursiva) com mais detalhes sobre a mensagem principal.
 * - `detailTitle`: caso for informado, será apresentado como título dos detalhes substituindo o padrão `code - message`
 *
 * > Veja o [Guia de implementação de APIs](guides/api) para mais detalhes sobre a estrutura das mensagens.
 *
 * ### Cabeçalho
 *
 * É possível dispensar a notificação para o usuário utilizando no cabeçalho da requisição os parâmetros listados abaixo com o valor
 * igual a `true`:
 *
 * - `X-PO-No-Message`: Não exibe notificações de erro e/ou sucesso.
 *
 * - `X-PO-No-Error`: Não mostra notificações de erro com códigos `4xx` e `5xx`.
 *
 * ```
 * ...
 *  const headers = { 'X-PO-No-Message': 'true' };
 *
 *  this.http.get(`/customers/1`, { headers: headers });
 * ...
 *
 * ```
 *
 * > Após a validação no *interceptor*, os parâmetros serão removidos do cabeçalho da requisição.
 *
 */
export declare abstract class PoHttpInterceptorBaseService implements HttpInterceptor {
    private componentInjector;
    private notification;
    private languageService;
    notificationTypes: string[];
    literals: any;
    private httpInterceptorDetailComponent;
    constructor(componentInjector: PoComponentInjectorService, notification: any, languageService: PoLanguageService);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    processResponse(response: HttpResponse<any>, request: HttpRequest<any>): void;
    processErrorResponse(response: HttpErrorResponse, request: HttpRequest<any>): void;
    private cloneRequestWithoutParameters;
    private createModal;
    private destroyModal;
    private hasMessage;
    private hasNoErrorParam;
    private hasNoMessageParam;
    private hasParameters;
    private showNotification;
    private generateDetailModal;
    private generateNotificationAction;
    private generateUrlHelpFunction;
}
