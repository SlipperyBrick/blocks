"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.preprocessComponents = exports.preprocessAttributes = void 0;
const parserUtilities_1 = require("./parserUtilities");
const components_1 = require("../../components/components");
function preprocessAttributes(state, startLine, lastLine, componentType) {
    let closingLine = startLine;
    const blockComponentAttributes = [];
    const blockClosingTag = `[/blocks-${componentType}]`;
    while (closingLine < lastLine) {
        const lineContent = state.src.slice(state.bMarks[closingLine], state.eMarks[closingLine]);
        if (lineContent.trim().includes(":")) {
            const attributes = (0, parserUtilities_1.parseAttributes)(lineContent);
            blockComponentAttributes.push(...Object.entries(attributes.attributes));
        }
        else if (lineContent.trim() === blockClosingTag) {
            break;
        }
        closingLine++;
    }
    return { blockComponentAttributes, closingLine };
}
exports.preprocessAttributes = preprocessAttributes;
function preprocessComponents(state, startLine, lastLine, containerType) {
    let closingLine = startLine;
    const blockComponents = [];
    const blockClosingTag = `[/blocks-${containerType}]`;
    while (closingLine < lastLine) {
        const lineContent = state.src.slice(state.bMarks[closingLine], state.eMarks[closingLine]);
        if (components_1.components.some((component) => lineContent.includes(`[blocks-${component}`))) {
            const { blockComponentAttributes, closingLine: nestedClosingLine } = preprocessAttributes(state, closingLine, lastLine, lineContent.split("[blocks-")[1].slice(0, -1));
            // Tokenize the component and add it to the array of tokens
            const componentToken = (0, parserUtilities_1.tokenizeComponent)(state, closingLine, nestedClosingLine, lineContent.split("[blocks-")[1].slice(0, -1), blockComponentAttributes, false);
            blockComponents.push(componentToken);
            closingLine = nestedClosingLine;
        }
        else if (lineContent.trim() === blockClosingTag) {
            break;
        }
        closingLine++;
    }
    return { blockComponents, closingLine };
}
exports.preprocessComponents = preprocessComponents;
//# sourceMappingURL=preprocessUtilities.js.map