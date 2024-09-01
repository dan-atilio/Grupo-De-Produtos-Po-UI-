"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceInFile = void 0;
/**
 * Método responsável por realizar as substituições no arquivo informado.
 *
 * @param file Arquivo que sofrerá a alteração
 * @param changes Lista de objetos que possuem
 */
function replaceInFile(file, changes = []) {
    return (tree) => {
        if (tree.exists(file)) {
            const sourceText = tree.read(file).toString('utf-8');
            let updated = sourceText;
            if (updated) {
                changes.forEach(replaceChange => {
                    // força a tipagem para string pois o ts não reconhece a função no String.replace
                    updated = updated.replace(replaceChange.replace, replaceChange.replaceWith);
                });
            }
            if (updated !== sourceText) {
                tree.overwrite(file, updated);
            }
        }
        return tree;
    };
}
exports.replaceInFile = replaceInFile;
//# sourceMappingURL=replace.js.map