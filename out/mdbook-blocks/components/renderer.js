"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.containerRenderers = exports.componentRenderers = exports.renderContainerToken = exports.renderComponentToken = void 0;
const components_1 = require("./components");
Object.defineProperty(exports, "componentRenderers", { enumerable: true, get: function () { return components_1.componentRenderers; } });
Object.defineProperty(exports, "containerRenderers", { enumerable: true, get: function () { return components_1.containerRenderers; } });
function renderComponentToken(componentType, attributes) {
    const component = components_1.componentRenderers[componentType.split("_")[1]];
    return component(attributes);
}
exports.renderComponentToken = renderComponentToken;
function renderContainerToken(containerType, components) {
    const container = components_1.containerRenderers[containerType.split("_")[1]];
    return container(components);
}
exports.renderContainerToken = renderContainerToken;
//# sourceMappingURL=renderer.js.map