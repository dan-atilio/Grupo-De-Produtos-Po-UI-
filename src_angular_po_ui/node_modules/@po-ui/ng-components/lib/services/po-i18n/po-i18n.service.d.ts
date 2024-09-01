import { HttpClient } from '@angular/common/http';
import { PoLanguageService } from './../po-language/po-language.service';
import { PoI18nBaseService } from './po-i18n-base.service';
import { PoI18nConfig } from './interfaces/po-i18n-config.interface';
import * as i0 from "@angular/core";
/**
 * @docsExtends PoI18nBaseService
 */
export declare class PoI18nService extends PoI18nBaseService {
    static ɵfac: i0.ɵɵFactoryDeclaration<PoI18nService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PoI18nService>;
}
export declare function returnPoI18nService(config: PoI18nConfig, http: HttpClient, languageService: PoLanguageService): PoI18nService;
