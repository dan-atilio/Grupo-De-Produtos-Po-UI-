import { PoMenuPanelItem } from './po-menu-panel-item.interface';
/**
 * @docsPrivate
 *
 * @usedBy PoMenuPanelItem
 *
 * @description
 *
 * Interface para os itens de menu internos do componente `po-menu-panel`.
 *
 */
export interface PoMenuPanelItemInternal extends PoMenuPanelItem {
    id: string;
    type: string;
    isSelected?: boolean;
}
