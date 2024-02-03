"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parser_1 = require("./parser");
const parserUtilities_1 = require("./utilities/parserUtilities");
const components_1 = require("../components/components");
function blocks(md) {
    md.block.ruler.before("fence", "components", parser_1.parseComponent, {
        alt: ["paragraph", "header", "blockquote"],
    });
    // Registers the parseToken function for each component type in the Blocks component library
    components_1.components.forEach((component) => {
        md.renderer.rules[`component_${component}`] = (tokens, index, _options, _env, _self) => {
            return (0, parserUtilities_1.parseComponentToken)(tokens[index]);
        };
    });
    md.block.ruler.before("fence", "containers", parser_1.parseContainer, {
        alt: ["paragraph", "header", "blockquote"],
    });
    // Registers the parseToken function for each container type in the Blocks component library
    components_1.containers.forEach((container) => {
        md.renderer.rules[`container_${container}`] = (tokens, index, _options, _env, _self) => {
            return (0, parserUtilities_1.parseContainerToken)(tokens[index]);
        };
    });
}
exports.default = blocks;
//# sourceMappingURL=configureMarkdownIt.js.map