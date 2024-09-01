import { PoDynamicFormField } from '../po-dynamic-form-field.interface';
/**
 * @docsPrivate
 *
 * @description
 *
 * Interface utilizada para os *fields* tratados internamente.
 */
export interface PoDynamicFormFieldInternal extends PoDynamicFormField {
    componentClass?: string;
    control?: string;
    /** Aplica foco no campo quando o componente for iniciado. */
    focus?: boolean;
}
