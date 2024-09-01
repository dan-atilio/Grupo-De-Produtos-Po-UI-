"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const build_component_1 = require("@po-ui/ng-schematics/build-component");
/**
 * Scaffolds a new <name> component with <po-page-list>
 * - The property dataView set which component will be used to display data.
 */
function default_1(options) {
    return (0, schematics_1.chain)([createPageListComponent(options)]);
}
exports.default = default_1;
function createPageListComponent(options) {
    return (0, build_component_1.buildComponent)(options);
}
//# sourceMappingURL=index.js.map