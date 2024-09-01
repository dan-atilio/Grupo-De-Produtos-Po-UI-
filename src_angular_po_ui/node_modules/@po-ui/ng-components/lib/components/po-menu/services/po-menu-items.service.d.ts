import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * @docsPrivate
 *
 * @description
 *
 * Serviço que implementa a comunicação entre os items do po-menu.
 */
export declare class PoMenuItemsService {
    private subjectParent;
    private subjectChild;
    sendToParentMenuClicked(menu: object): void;
    receiveFromChildMenuClicked(): Observable<any>;
    sendToChildMenuClicked(menu: object): void;
    receiveFromParentMenuClicked(): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoMenuItemsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PoMenuItemsService>;
}
