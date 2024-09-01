import { Tree } from '@angular-devkit/schematics';
/** Interface dos dados que serão substituidos. */
export interface ReplaceChanges {
    replace: string | RegExp;
    replaceWith: string | Function;
}
/**
 * Método responsável por realizar as substituições no arquivo informado.
 *
 * @param file Arquivo que sofrerá a alteração
 * @param changes Lista de objetos que possuem
 */
export declare function replaceInFile(file: string, changes?: Array<ReplaceChanges>): (tree: Tree) => import("@angular-devkit/schematics/src/tree/interface").Tree;
