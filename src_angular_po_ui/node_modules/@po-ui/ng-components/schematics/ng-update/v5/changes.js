"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDepedenciesVersion = exports.replaceChanges = void 0;
exports.replaceChanges = [
    {
        replace: 'PoLineChartSeries|PoBarChartSeries|PoColumnChartSeries|PoPieChartSeries|PoDonutChartSeries',
        replaceWith: 'PoChartSerie'
    },
    {
        // Caso conter mais de um interface sendo importada do pacote,
        // será mantido o primeiro e os outros serão removidos.
        replace: /(?<=PoChartSerie[^]*)((\s)?(,)(\s)+?PoChartSerie)/,
        replaceWith: ''
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
    ]
};
//# sourceMappingURL=changes.js.map