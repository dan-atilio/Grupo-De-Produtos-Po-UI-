"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const build_component_1 = require("@po-ui/ng-schematics/build-component");
/** Scaffolds a new <name> component with <po-page-edit> */
function default_1(options) {
    return (0, schematics_1.chain)([createPageEditComponent(options)]);
}
exports.default = default_1;
function createPageEditComponent(options) {
    return (0, build_component_1.buildComponent)(options);
}
//# sourceMappingURL=index.js.map