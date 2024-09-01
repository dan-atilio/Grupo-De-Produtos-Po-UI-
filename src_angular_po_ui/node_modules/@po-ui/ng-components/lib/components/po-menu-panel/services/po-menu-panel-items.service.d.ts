import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * @docsPrivate
 *
 * @description
 *
 * Serviço que implementa a comunicação entre os items do po-menu-panel.
 */
export declare class PoMenuPanelItemsService {
    private subjectChild;
    private subjectParent;
    receiveFromChildMenuClicked(): Observable<any>;
    receiveFromParentMenuClicked(): Observable<any>;
    sendToParentMenuClicked(menu: object): void;
    sendToChildMenuClicked(menu: object): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoMenuPanelItemsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PoMenuPanelItemsService>;
}
