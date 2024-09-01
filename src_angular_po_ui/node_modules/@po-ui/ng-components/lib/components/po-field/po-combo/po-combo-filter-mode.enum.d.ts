/**
 * @usedBy PoComboComponent
 *
 * @description
 *
 * Define o tipo de busca usado no po-combo.
 */
export declare enum PoComboFilterMode {
    /** Verifica se o texto *inicia* com o valor pesquisado. Caso não seja especificado um tipo, será esse o utilizado. */
    startsWith = 0,
    /** Verifica se o texto *contém* o valor pesquisado. */
    contains = 1,
    /** Verifica se o texto *finaliza* com o valor pesquisado. */
    endsWith = 2
}
