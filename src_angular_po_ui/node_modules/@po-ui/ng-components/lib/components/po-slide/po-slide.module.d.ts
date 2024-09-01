import * as i0 from "@angular/core";
import * as i1 from "./po-slide-circles/po-slide-circles.component";
import * as i2 from "./po-slide.component";
import * as i3 from "./po-slide-control/po-slide-control.component";
import * as i4 from "./directives/po-slide-content-template.directive";
import * as i5 from "./po-slide-item/po-slide-item.component";
import * as i6 from "@angular/common";
import * as i7 from "@angular/router";
import * as i8 from "../po-container/po-container.module";
/**
 * @description
 *
 * Módulo do componente `po-slide`.
 *
 * > Para o correto funcionamento do componente `po-slide`, deve ser importado o módulo `BrowserAnimationsModule` no
 * > módulo principal da sua aplicação.
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
 */
export declare class PoSlideModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<PoSlideModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<PoSlideModule, [typeof i1.PoSlideCirclesComponent, typeof i2.PoSlideComponent, typeof i3.PoSlideControlComponent, typeof i4.PoSlideContentTemplateDirective, typeof i5.PoSlideItemComponent], [typeof i6.CommonModule, typeof i7.RouterModule, typeof i8.PoContainerModule], [typeof i2.PoSlideComponent, typeof i4.PoSlideContentTemplateDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<PoSlideModule>;
}
