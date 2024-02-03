"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderComponents = exports.findAttribute = void 0;
const renderer_1 = require("../renderer");
function findAttribute(attributes, key) {
    const attribute = attributes.find(([attrKey]) => attrKey === key);
    return attribute ? attribute[1] : "";
}
exports.findAttribute = findAttribute;
function renderComponents(components) {
    return components
        .map((token) => (0, renderer_1.renderComponentToken)(token.type, token.attrs))
        .join(" ");
}
exports.renderComponents = renderComponents;
//# sourceMappingURL=rendererUtilities.js.map