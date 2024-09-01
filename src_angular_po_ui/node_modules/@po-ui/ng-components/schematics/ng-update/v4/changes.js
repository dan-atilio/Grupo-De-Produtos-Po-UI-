"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDepedenciesVersion = exports.replaceChanges = void 0;
exports.replaceChanges = [
    {
        replace: 'axisXGridLines',
        replaceWith: 'gridLines'
    }
];
exports.updateDepedenciesVersion = {
    dependencies: [
        '@po-ui/ng-components',
        '@po-ui/ng-code-editor',
        '@po-ui/ng-templates',
        '@po-ui/ng-storage',
        '@po-ui/ng-sync',
        '@po-ui/style'
    ],
    devDependencies: [{ package: '@po-ui/ng-tslint', version: '4.0.0' }]
};
//# sourceMappingURL=changes.js.map