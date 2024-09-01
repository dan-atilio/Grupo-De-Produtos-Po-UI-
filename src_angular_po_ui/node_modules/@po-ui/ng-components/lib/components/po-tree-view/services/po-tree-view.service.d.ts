import { PoTreeViewItem } from '../po-tree-view-item/po-tree-view-item.interface';
import * as i0 from "@angular/core";
export declare class PoTreeViewService {
    private expandedEvent;
    private selectedEvent;
    emitExpandedEvent(treeViewItem: PoTreeViewItem): void;
    emitSelectedEvent(treeViewItem: PoTreeViewItem): void;
    onExpand(): import("rxjs").Observable<PoTreeViewItem>;
    onSelect(): import("rxjs").Observable<PoTreeViewItem>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoTreeViewService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PoTreeViewService>;
}
