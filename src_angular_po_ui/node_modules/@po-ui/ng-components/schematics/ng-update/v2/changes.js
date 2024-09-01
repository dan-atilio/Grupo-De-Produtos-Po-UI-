"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replacePackages = exports.angularJsonReplaces = exports.tsLintReplaces = exports.dependeciesChanges = exports.regexPackages = exports.changesComponents = exports.replaceChanges = void 0;
exports.replaceChanges = [
    {
        replace: 'p-focus',
        replaceWith: 'p-auto-focus'
    },
    {
        replace: 'X-Portinari',
        replaceWith: 'X-PO'
    }
];
exports.changesComponents = [
    { component: 'po-page-edit', actions: ['cancel', 'save', 'saveNew'] },
    { component: 'po-page-detail', actions: ['edit', 'remove', 'back'] }
];
exports.regexPackages = new RegExp([
    '@portinari/(portinari-)?((ui)|',
    '(storage)|',
    '(templates)|',
    '(sync)|',
    '(code-editor)|',
    '(style))' // @po-ui/style
].join(''), 'g');
exports.dependeciesChanges = {
    '@portinari/portinari-ui': '@po-ui/ng-components',
    '@portinari/portinari-sync': '@po-ui/ng-sync',
    '@portinari/portinari-storage': '@po-ui/ng-storage',
    '@portinari/portinari-style': '@po-ui/style',
    '@portinari/portinari-templates': '@po-ui/ng-templates',
    '@portinari/portinari-code-editor': '@po-ui/ng-code-editor',
    '@totvs/portinari-theme': '@totvs/po-theme'
};
exports.tsLintReplaces = [
    {
        replace: '@portinari/tslint',
        replaceWith: '@po-ui/ng-tslint'
    }
];
exports.angularJsonReplaces = [
    { replace: exports.regexPackages, replaceWith: replacePackages },
    { replace: /portinari\-theme/g, replaceWith: 'po-theme' }
];
function replacePackages(foundString, _, pkg) {
    const org = '@po-ui';
    if (pkg === 'ui') {
        return `${org}/ng-components`;
    }
    else if (pkg === 'style') {
        return `${org}/style`;
    }
    else if (pkg) {
        return `${org}/ng-${pkg}`;
    }
    return foundString;
}
exports.replacePackages = replacePackages;
//# sourceMappingURL=changes.js.map