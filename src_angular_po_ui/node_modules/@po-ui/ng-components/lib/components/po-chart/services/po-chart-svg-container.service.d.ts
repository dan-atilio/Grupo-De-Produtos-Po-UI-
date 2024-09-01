import { PoChartContainerSize } from '../interfaces/po-chart-container-size.interface';
import * as i0 from "@angular/core";
export declare class PoChartSvgContainerService {
    constructor();
    /**
     * Retorna um objeto do tipo PoChartContainerSize contendo as dimensões necessárias para plotagem do SVG.
     *
     * @param chartHeight
     * @param chartWrapperWidth
     * @param chartHeaderHeight
     * @param chartLegendHeight
     */
    calculateSVGContainerMeasurements(chartHeight?: number, chartWrapperWidth?: number, chartHeaderHeight?: number, chartLegendHeight?: number): PoChartContainerSize;
    private svgWidth;
    private center;
    private svgHeight;
    /**
     * Altura da área de plotagem.
     * Subtrai a altura do container SVG pelo padding superior + área para overflow de labels do eixo X.
     */
    private svgPlottingAreaHeight;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoChartSvgContainerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PoChartSvgContainerService>;
}
