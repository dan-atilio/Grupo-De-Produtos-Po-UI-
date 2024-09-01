import { Tree } from '@angular-devkit/schematics';
import { WorkspaceProject, WorkspaceSchema } from '@schematics/angular/utility/workspace-models';
export declare function getWorkspaceConfigGracefully(tree: Tree): null | WorkspaceSchema;
export declare function getProjectFromWorkspace(workspace: WorkspaceSchema, projectName?: string): WorkspaceProject;
/** Resolves the architect options for the build target of the given project. */
export declare function getProjectTargetOptions(project: WorkspaceProject, buildTarget: string): any;
/** Looks for the main TypeScript file in the given project and returns its path. */
export declare function getProjectMainFile(project: WorkspaceProject): string;
export declare function getDefaultPath(project: WorkspaceProject): string;
