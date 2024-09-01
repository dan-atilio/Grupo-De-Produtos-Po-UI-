import { PoDialogAlertOptions, PoDialogConfirmOptions } from './interfaces/po-dialog.interface';
import { PoDialogType } from './po-dialog.enum';
/**
 * @description
 *
 * O po-dialog é um serviço para exibição de caixas de diálogo, é possível customiza-los passando alguns parâmetros de acordo com a
 * necessidade do desenvolvedor.
 */
export declare abstract class PoDialogBaseService {
    /** Exibe um diálogo de confirmação, é possível definir ações para as opções de confirmação e cancelamento. */
    confirm(confirmOptions: PoDialogConfirmOptions): void;
    /** Exibe um diálogo de alerta. */
    alert(alertOptions: PoDialogAlertOptions): void;
    abstract openDialog(dialogType: PoDialogType, dialogOptions: PoDialogAlertOptions | PoDialogConfirmOptions): void;
}
