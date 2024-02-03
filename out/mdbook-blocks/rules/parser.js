"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseContainer = exports.parseComponent = void 0;
const components_1 = require("../components/components");
const parserUtilities_1 = require("./utilities/parserUtilities");
const preprocessUtilities_1 = require("./utilities/preprocessUtilities");
function parseComponent(state, startLine, lastLine, _skip = false) {
    let currentLine = startLine;
    const match = (0, parserUtilities_1.readLine)(state, currentLine, lastLine);
    if (match && components_1.components.includes(match.blockMatch[1])) {
        // Pre-processes the attributes of any found Blocks components
        const { blockComponentAttributes, closingLine } = (0, preprocessUtilities_1.preprocessAttributes)(state, match.currentLine, lastLine, match.blockMatch[1]);
        // Tokenizes the Block component type and its corresponding attributes
        (0, parserUtilities_1.tokenizeComponent)(state, match.currentLine, closingLine, match.blockMatch[1], blockComponentAttributes);
        currentLine = match.currentLine + 1;
    }
    else {
        return false;
    }
    return true;
}
exports.parseComponent = parseComponent;
function parseContainer(state, startLine, lastLine, _skip = false) {
    let currentLine = startLine;
    const match = (0, parserUtilities_1.readLine)(state, currentLine, lastLine);
    if (match && components_1.containers.includes(match.blockMatch[1])) {
        // Pre-processes the attributes of any found Blocks components
        const { blockComponents, closingLine } = (0, preprocessUtilities_1.preprocessComponents)(state, match.currentLine, lastLine, match.blockMatch[1]);
        // Tokenizes the Block component type and its corresponding attributes
        (0, parserUtilities_1.tokenizeContainer)(state, match.currentLine, closingLine, match.blockMatch[1], blockComponents);
        currentLine = closingLine + 1;
    }
    else {
        return false;
    }
    return true;
}
exports.parseContainer = parseContainer;
//# sourceMappingURL=parser.js.map