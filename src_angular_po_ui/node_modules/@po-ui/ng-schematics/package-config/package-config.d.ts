import { Tree } from '@angular-devkit/schematics';
import { UpdateDependencies } from './update-dependencies.interface';
/** Adds a package to the package.json in the given host tree. */
export declare function addPackageToPackageJson(host: Tree, pkg: string, version: string): Tree;
export declare function updatePackageJson(version: string, { dependencies, devDependencies }: UpdateDependencies): (tree: Tree) => Tree;
/** Gets the version of the specified package by looking at the package.json in the given tree. */
export declare function getPackageVersionFromPackageJson(tree: Tree, name: string): string | null;
/**
 * Sorts the keys of the given object.
 * @returns A new object instance with sorted keys
 */
export declare function sortObjectByKeys(obj: any): any;
