import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @docsPrivate
 *
 * @description
 *
 * Pipe responsável por apresentar um horário baseado no formato de entrada definido na API do PO UI.
 */
export declare class PoTimePipe implements PipeTransform {
    transform(time: string, format?: string): string;
    private addDotMiliseconds;
    private formatValue;
    private getFormatMiliseconds;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoTimePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<PoTimePipe, "po_time", false>;
}
