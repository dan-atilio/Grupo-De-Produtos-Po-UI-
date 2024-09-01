import { Tree } from '@angular-devkit/schematics';
import * as ts from 'typescript';
export declare function addModuleImportToRootModule(options: any, moduleName: string, modulePath: string): (host: Tree) => import("@angular-devkit/schematics/src/tree/interface").Tree;
/** Reads file given path and returns TypeScript source file. */
export declare function getSourceFile(host: Tree, path: string): ts.SourceFile;
/** */
export declare function addModuleImportToModule(tree: Tree, modulePath: string, moduleName: string, importPath: string): void;
/** */
export declare function addDeclarationComponentToModule(tree: Tree, modulePath: string, moduleName: string, importPath: string): void;
/** */
export declare function addExportComponentToModule(tree: Tree, modulePath: string, moduleName: string, importPath: string): void;
/**
 * Whether the Angular module in the given path imports the specified module class name.
 */
export declare function hasNgModuleImport(tree: Tree, modulePath: string, className: string): boolean;
