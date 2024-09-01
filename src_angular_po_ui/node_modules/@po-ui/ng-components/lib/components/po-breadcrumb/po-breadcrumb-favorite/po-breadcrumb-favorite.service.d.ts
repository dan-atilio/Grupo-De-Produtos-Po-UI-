import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * @docsPrivate
 *
 * @description
 *
 * Serviço utilizado para favoritar/desfavoritar uma url no componente po-breadcrumb.
 * A API deve retornar um objeto no formato { isFavorite: booleano, url: string }. Em ambos os métodos, GET e POST este
 * objeto deve ser retornado.
 * Ao alterar o status de favorito, a API deve retornar o objeto acima, com o novo status atualizado.
 * No método POST, existe a possibilidade de ser enviado parâmetros junto com a requisição. Neste caso, o objeto enviado
 * para a API terá o formato: { isFavorite: booleano, url: string, params: {} }, onde params é o objeto que pode ser enviado
 * junto com a requisição.
 *
 */
export declare class PoBreadcrumbFavoriteService {
    private http;
    private _url;
    private _bodyParams;
    get url(): string;
    get bodyParams(): object;
    constructor(http: HttpClient);
    configService(url: any, params: any, item: any): void;
    sendStatusFavorite(status: any): Observable<any>;
    getFavorite(): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoBreadcrumbFavoriteService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PoBreadcrumbFavoriteService>;
}
