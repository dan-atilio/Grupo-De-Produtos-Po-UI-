import * as i0 from "@angular/core";
/**
 * @docsPrivate
 *
 * @description
 *
 * Serviço responsável por gerenciar o tratamento dos formatos de data e hora.
 */
export declare class PoDateService {
    private readonly dateRegex;
    private readonly isoRegex;
    /**
     * Método responsável por converter datas do formato `yyyy-mm-ddThh:mm:ss+|-hh:mm` para o formato `Date`.
     *
     * @param dateString Data no formato `yyyy-mm-ddThh:mm:ss+|-hh:mm`.
     * @param minDate Definir `true` caso seja `minDate`.
     * @param maxDate Definir `true` caso seja `maxDate`.
     */
    convertIsoToDate(dateString: string, minDate?: boolean, maxDate?: boolean): Date;
    /**
     * Método responsável por converter data do formato `Date` para o formato `yyyy-mm-dd`.
     *
     * @param date Data no formato `Date`.
     */
    convertDateToISO(date: Date): string;
    /**
     * Método responsável por adicionar zeros a esquerda do anos em formato string.
     *
     * @param year Ano a ser validado.
     */
    formatYear(year: number): string;
    /**
     * Método responsável por retornar o dia, mês e ano separados em formato de objeto.
     *
     * @param isoDate Ano em formato string.
     */
    getDateFromIso(isoDate: string): {
        year: number;
        month: number;
        day: number;
    };
    /**
     * Método responsável por retornar a data com a hora definida para `00:00:00` caso `isMinDate` for igual a `true` ou `23:59:59`
     * caso `isMindate` seja igual a `false` .
     *
     * @param date Data no formato `Date` ou `yyyy-mm-ddThh:mm:ss+|-hh:mm`.
     * @param isMinDate Caso `true` aplica `00:00:00`, caso `false` aplica `23:59:59` a hora da data informada.
     */
    getDateForDateRange(date: any, isMinDate: boolean): Date;
    /**
     * Retorna `true` caso o período seja válido, para isso a primeira data deve ser maior que a segunda data.
     *
     * @param dateA primeira data
     * @param dateB segunda data
     */
    isDateRangeValid(dateA?: string, dateB?: string): boolean;
    /**
     * Método responsável por validar se uma data está no formato `yyyy-mm-ddThh:mm:ss+|-hh:mm` ou `yyyy-mm-dd`.
     *
     * @param stringDate Data.
     */
    isValidIso(stringDate: string): boolean;
    /**
     * Método responsável por corrigir a data caso a mesma esteja entre os anos 0 e 99.
     *
     * @param date Data.
     * @param year .
     */
    setYearFrom0To100(date: Date, year: number): void;
    /**
     * Método responsável por retornar o dia , mês e ano de uma data informada.
     *
     * @param date Valor da data.
     */
    splitDate(date: Date): {
        year: number;
        month: number;
        day: number;
    };
    /**
     * Método responsável por validar se uma data está entre a `minDate` e `maxDate`.
     *
     * @param date Data a ser validada.
     * @param minDate Data inicial.
     * @param maxDate Data final.
     */
    validateDateRange(date: Date, minDate: Date, maxDate: Date): boolean;
    /**
     * Método responsável por validar se a data foi informada nos padrões 'yyyy-mm-dd', 'yyyy-mm-ddThh:mm:ss+|-hh:mm' ou
     * 'Date' padrão do javascript.
     *
     * @param date Data que será validada.
     */
    private validateDate;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoDateService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PoDateService>;
}
