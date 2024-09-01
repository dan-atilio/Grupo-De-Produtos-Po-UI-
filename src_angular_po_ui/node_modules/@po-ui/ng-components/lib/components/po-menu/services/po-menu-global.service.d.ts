import { Observable } from 'rxjs';
import { PoMenuComponent } from '../po-menu.component';
import { PoMenuItem } from '../po-menu-item.interface';
import * as i0 from "@angular/core";
export declare class PoMenuGlobalService {
    private applicationMenu;
    private menus;
    private removedApplicationMenu;
    receiveApplicationMenu$: Observable<PoMenuComponent>;
    receiveMenus$: Observable<PoMenuItem[]>;
    receiveRemovedApplicationMenu$: Observable<string>;
    sendApplicationMenu(menu: PoMenuComponent): void;
    sendMenus(menus: Array<PoMenuItem>): void;
    sendRemovedApplicationMenu(id: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoMenuGlobalService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PoMenuGlobalService>;
}
