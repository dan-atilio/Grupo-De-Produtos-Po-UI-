import { PoChartType } from '../enums/po-chart-type.enum';
import { PoChartMinMaxValues } from '../interfaces/po-chart-min-max-values.interface';
import { PoChartOptions } from '../interfaces/po-chart-options.interface';
import { PoChartSerie } from '../interfaces/po-chart-serie.interface';
import * as i0 from "@angular/core";
export declare class PoChartMathsService {
    /**
     * Calcula e retorna os válores mínimo e máximo das séries.
     *
     * @param series Lista de séries.
     * @param acceptNegativeValues boolean.
     */
    calculateMinAndMaxValues(series: Array<any>, acceptNegativeValues?: boolean): PoChartMinMaxValues;
    /**
     * Retorna o valor com maior quantidade de dígitos entre todas as séries.
     * Pode receber uma lista de categorias para o caso de gráfico de barra, ou então a lista de séries se o tipo de gráfico for linha ou coluna.
     *
     * @param data Lista de séries.
     * @param type O tipo do gráfico'.
     * @param options As opções para validação de número de linhas do eixo X'.
     */
    getLongestDataValue(data: Array<PoChartSerie | string>, type: PoChartType, options: PoChartOptions): number | string;
    /**
     * Retorna o tamanho da série que tiver mais itens.
     *
     * @param series Lista de séries.
     */
    seriesGreaterLength(series: Array<PoChartSerie>): number;
    /**
     * Retorna o percentual em decimal da série passada pela distância entre os valores mínimos e máximos da série.
     *
     * Se o valor mínimo for negativo o alcance partirá dele como sendo zero %.
     *
     * Por exemplo:
     *    minValue = -10;
     *    maxValue = 0;
     *    serieValue = -8
     *    O resultado será de 0.20;
     *
     * @param minMaxValues Objeto contendo os valores mínimo e máximo de todas as séries.
     * @param serieValue O valor da série.
     */
    getSeriePercentage(minMaxValues: any, serieValue: number): number;
    /**
     * Calcula e retorna uma lista de valores referentes aos textos dos eixos X em relação à quantidade de linhas horizontais.
     *
     * @param minMaxValues Objeto contendo os valores mínimo e máximo de todas as séries.
     * @param gridLines Quantidade de linhas horizontais. Valor default é 5.
     */
    range(minMaxValues: PoChartMinMaxValues, gridLines?: number): any[];
    /**
     *
     * Verifica se o valor passado é um Integer ou Float.
     *
     * @param number O valor a ser validado
     */
    verifyIfFloatOrInteger(number: number): boolean;
    private amountOfGridLines;
    private getAxisXLabelLongestValue;
    private getGridLineArea;
    private getDomain;
    private getFractionFromInt;
    private getLongestData;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoChartMathsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PoChartMathsService>;
}
