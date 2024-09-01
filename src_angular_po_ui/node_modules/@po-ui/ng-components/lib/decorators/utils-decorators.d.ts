import { PropertyDecoratorInterface } from './property-decorator.interface';
/**
 * Função utilizada pela fábrica de decoradores para validar uma propriedade de uma classe durante
 * o ciclo de vida do Angular.
 *
 * @param decoratorProperties propriedades da interface PoPropertyDecoratorInterface.
 * @param lifecycleName clico de vida que se deseja executar com a validação.
 * @param callback função que será executada para validadar a propriedade.
 */
export declare function validatePropertyOnLifeCycle(decoratorProperties: PropertyDecoratorInterface, lifecycleName: string, callback: Function): void;
/**
 * Função utilizada pela fábrica de decoradores para alterar/manipular o valor de uma propriedade.
 *
 * > Este decorator irá criar os métodos get e set internamente. Portanto,
 * é importante **não** criar nomes privados para as propriedades utilizando
 * `$$__nomeDaPropriedade` ao utilizar este decorator, pois ela será sobrescrita pela propriedade privada
 * criada pelo decorator.
 *
 * @param decoratorProperties propriedades da interface PoPropertyDecoratorInterface.
 * @param decoratorName nome do decorator
 * @param callback função que será executada para alterar o valor da propriedade
 */
export declare function changeValueByCallback(decoratorProperties: PropertyDecoratorInterface, decoratorName: string, callback: Function): {
    get: () => any;
    set: (value: any) => void;
};
export declare function createPrivateProperty(target: any, propertyName: string, decoratorName: string): string;
