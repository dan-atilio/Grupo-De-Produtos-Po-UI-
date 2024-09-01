import { ComponentRef } from '@angular/core';
import { PoNotification } from './po-notification.interface';
import { PoToaster } from './po-toaster/po-toaster.interface';
/**
 * @description
 *
 * Serviço responsável por emitir as notificações em uma página. São disponibilizados os métodos de:
 *
 * - success,
 * - warning,
 * - error,
 * - information.
 *
 * Cada um destes métodos recebe como parâmetro o objeto `PoNotification` que contém os dados da mensagem e o
 * objeto ViewContainerRef que é a representação do container do componente onde será criada a notificação.
 *
 * Estas notificações serão exibidas durante 9 segundos por padrão, podendo ser alterada conforme necessidade.
 * Após este tempo a mesma é removida automaticamente.
 *
 * Notificações com ação ou notificações de `erro` permanecerão em tela até o usuário fecha-lá ou clicar na ação.
 *
 * O serviço possui um limite de até 5 notificações por vez, a partir do sexto a primeira notificação será removida dando lugar a nova.
 *
 */
export declare abstract class PoNotificationBaseService {
    stackTop: Array<ComponentRef<any>>;
    stackBottom: Array<ComponentRef<any>>;
    private defaultDuration;
    /**
     * Emite uma notificação de sucesso.
     *
     * @param {PoNotification | string} notification Objeto com os dados da notificação ou somente a string com a mensagem da notificação.
     */
    success(notification: PoNotification | string): void;
    /**
     * Emite uma notificação de atenção.
     *
     * @param {PoNotification | string} notification Objeto com os dados da notificação ou somente a string com a mensagem da notificação
     */
    warning(notification: PoNotification | string): void;
    /**
     * Emite uma notificação de erro.
     *
     * @param {PoNotification | string} notification Objeto com os dados da notificação ou somente a string com a mensagem da notificação
     */
    error(notification: PoNotification | string): void;
    /**
     * Emite uma notificação de informação.
     *
     * @param {PoNotification | string} notification Objeto com os dados da notificação ou somente a string com a mensagem da notificação
     */
    information(notification: PoNotification | string): void;
    /**
     * Define em milissegundos a duração padrão para as notificações.
     *
     * > Padrão 9 segundos.
     *
     * @param {number} defaultDuration Duração em milisegundos
     */
    setDefaultDuration(defaultDuration: number): void;
    /**
     * @docsPrivate
     *
     * Cria um objeto do tipo PoToaster de acordo o tipo.
     *
     * @param {PoNotification | string} notification Objeto PoNotification com os dados da notificação
     */
    private buildToaster;
    /**
     * @docsPrivate
     *
     * Método responsável por criar o po-toaster.
     *
     * @param {PoToaster} toaster Objeto contendo as informações do toaster.
     */
    abstract createToaster(toaster: PoToaster): void;
    /**
     * @docsPrivate
     *
     * Método responsável por destruir o po-toaster.
     *
     * @param {ComponentRef} toaster Número da posição ou instancia do toaster a ser destruído.
     * @param {PoToasterOrientation} orientation Orientação do PoToaster: Top ou Bottom
     */
    abstract destroyToaster(toaster: ComponentRef<any>): void;
}
