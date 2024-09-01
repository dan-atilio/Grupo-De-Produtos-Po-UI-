import { ReplaceChanges } from '@po-ui/ng-schematics/replace';
export declare const replaceChanges: Array<ReplaceChanges>;
export declare const changesComponents: {
    component: string;
    actions: string[];
}[];
export declare const regexPackages: RegExp;
export declare const dependeciesChanges: {
    '@portinari/portinari-ui': string;
    '@portinari/portinari-sync': string;
    '@portinari/portinari-storage': string;
    '@portinari/portinari-style': string;
    '@portinari/portinari-templates': string;
    '@portinari/portinari-code-editor': string;
    '@totvs/portinari-theme': string;
};
export declare const tsLintReplaces: Array<ReplaceChanges>;
export declare const angularJsonReplaces: Array<ReplaceChanges>;
export declare function replacePackages(foundString: string, _: any, pkg: string): string;
