/**
 * Para usar o po-mask é preciso instanciar esta classe passando a máscara como
 * primeiro parâmetro, e no segundo parâmetro, deve se informado true, caso queira
 * que o model seja formatado ou false para o que o model seja limpo.
 */
export declare class PoMask {
    mask: string;
    formatModel: boolean;
    initialPosition: number;
    finalPosition: number;
    pattern: string;
    get getPattern(): string;
    valueToInput: string;
    get getValueToInput(): string;
    set setValueToInput(value: string);
    valueToModel: string;
    get getValueToModel(): string;
    set setValueToModel(value: string);
    formattingEnds: boolean;
    constructor(mask: string, formatModel: boolean);
    keyup($event: any): void;
    setPositionNotShiftKey($event: any): void;
    setSelectionRange($event: any): void;
    keydown($event: any): void;
    clearRangeSelection(value: string, $event: any, isBackspace: boolean): void;
    click($event: any): void;
    blur($event: any): void;
    revertPositions(initialPosition: number, finalPosition: number): void;
    resetPositions($event: any): void;
    setPositions($event: any): void;
    changePosition($event: any, value: number): void;
    getPosition($event: any): void;
    controlFormatting(value: string): any;
    formatValue(value: string, mask: string): string;
    checkMaskBefore($event: any, position: number): void;
    checkMaskAfter($event: any, position: number): void;
    replaceOptionalNumber(mask: string): string;
    isFixedCharacterGuide(key: any): any;
    getFixedCharacterGuide(): RegExp;
    listValidKeys(): RegExp;
    isKeyValid(keyCode: any): boolean;
    isKeyCodeValid(keyCode: number): boolean;
    isKeyValidMask(key: any, keyMask: any): any;
    testRegex(key: any, regex: any): any;
    removeFormattingValue(value: string): string;
    hasOptionalNumber(mask: string): RegExpMatchArray;
    replaceMask(char: string): RegExp;
    getRegexFromMask(mask: string): any;
}
