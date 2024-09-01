import { PoLanguageService } from '../../services/po-language/po-language.service';
import { PoComponentInjectorService } from '../../services/po-component-injector/po-component-injector.service';
import { PoNotificationService } from './../../services/po-notification/po-notification.service';
import { PoHttpInterceptorBaseService } from './po-http-interceptor-base.service';
import * as i0 from "@angular/core";
/**
 * @docsExtends PoHttpInterceptorBaseService
 *
 * @example
 * <example name='po-http-interceptor-labs' title='PO Http Interceptor Labs'>
 *  <file name='sample-po-http-interceptor-labs.component.ts'> </file>
 *  <file name='sample-po-http-interceptor-labs.component.html'> </file>
 * </example>
 */
export declare class PoHttpInterceptorService extends PoHttpInterceptorBaseService {
    constructor(notification: PoNotificationService, componentInjector: PoComponentInjectorService, languageService: PoLanguageService);
    static ɵfac: i0.ɵɵFactoryDeclaration<PoHttpInterceptorService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PoHttpInterceptorService>;
}
