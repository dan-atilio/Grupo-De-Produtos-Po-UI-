import { Tree } from '@angular-devkit/schematics';
import { WorkspaceProject, WorkspaceSchema } from '@schematics/angular/utility/workspace-models';
import { AssetSpecification } from './asset-specification.interface';
/** Add a file or asset in project workspace */
export declare function configuringBuildTargets(options: any, optionsProperty: string, buildTargetElement: string | AssetSpecification): (tree: Tree) => Tree;
/** Adds an entry to the given project target options. */
export declare function addOptionToTarget(project: WorkspaceProject, targetName: 'test' | 'build', host: Tree, optionsProperty: string, optionPath: string | AssetSpecification, workspace: WorkspaceSchema): void;
