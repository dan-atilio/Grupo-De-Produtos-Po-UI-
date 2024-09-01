import { ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PoControlPositionService {
    private arrowDirection;
    private customPositions;
    private differenceDiagonalToWidthArrow;
    private element;
    private elementOffset;
    private isCornerAligned;
    private isSetElementWidth;
    private offsetArrow;
    private targetElement;
    /**
     * @description Ajusta a posição do elemento, caso não couber em tela irá para próxima posição.
     *
     * @param value posição para exibição do elemento
     */
    adjustPosition(value: string): void;
    /**
     * @description Retorna a direção da seta, conforme a posição do elemento.
     */
    getArrowDirection(): string;
    /**
     * @description Método responsável por definir as propriedades utilizadas para exibir o elemento na posição correta.
     *
     * @param element elemento que será exibido
     * @param elementOffset offSet do elemento
     * @param targetElement elemento de onde deve partir a exibição
     * @param customPositions posições que sobrescreve as posições padrões
     * @param isSetElementWidth indica se deve definir o tamanho do elemento a ser exibido, caso for verdadeiro será igual do targetElement
     * @param isCornerAligned indica se o elemento filho será alinhado nos cantos do elemneto pai.
     */
    setElements(element: ElementRef | HTMLElement, elementOffset: number, targetElement: ElementRef | HTMLElement, customPositions?: Array<string>, isSetElementWidth?: boolean, isCornerAligned?: boolean): void;
    private adjustCustomPosition;
    private adjustDefaultPosition;
    private elementPosition;
    private getMainPosition;
    private getMainPositions;
    private getMainPositionsByCustomPositions;
    private getOverflows;
    private getSizesAndPositions;
    private nextPosition;
    private overflowAllSides;
    private overflowMain;
    private setAlignedArrowDirection;
    private setAlignedBottomPositions;
    private setAlignedElementPosition;
    private setAlignedTopPositions;
    private setArrowDirection;
    private setBottomPositions;
    private setElementPosition;
    private setElementWidth;
    private setLeftPositions;
    private setRightPositions;
    private setTopPositions;
    private verifySubPositions;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoControlPositionService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PoControlPositionService>;
}
