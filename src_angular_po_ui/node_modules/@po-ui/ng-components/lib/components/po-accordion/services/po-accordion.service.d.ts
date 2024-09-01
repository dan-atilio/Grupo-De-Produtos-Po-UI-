import { PoAccordionItemComponent } from '../po-accordion-item/po-accordion-item.component';
import * as i0 from "@angular/core";
/**
 * @docsPrivate
 *
 * @description
 *
 * Serviço para poder notificar o componente `po-accordion` quando um `po-accordion-item` for
 * expandido/colapsado.
 */
export declare class PoAccordionService {
    private subjectChild;
    receiveFromChildAccordionClicked(): import("rxjs").Observable<PoAccordionItemComponent>;
    sendToParentAccordionItemClicked(accordionItem: PoAccordionItemComponent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoAccordionService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PoAccordionService>;
}
