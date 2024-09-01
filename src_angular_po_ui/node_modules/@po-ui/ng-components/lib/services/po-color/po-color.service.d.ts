import * as i0 from "@angular/core";
interface PoColorArgs {
    color?: string;
}
export declare class PoColorService {
    defaultColors: Array<string>;
    private readonly colorBlack;
    /**
     * Avalia a propriedade `color` na lista de items passada. Caso sim, trata se é decimal ou string `po-color`. Caso não haja, retorna a cor default.
     *
     * @param data
     */
    getColors<T extends PoColorArgs>(data: Array<T>): Array<T>;
    private verifyIfHasColorProperty;
    private verifyIfIsPoColorPalette;
    private getDefaultColors;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoColorService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PoColorService>;
}
export {};
