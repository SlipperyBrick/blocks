"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseContainerToken = exports.parseComponentToken = exports.parseAttributes = exports.tokenizeContainer = exports.tokenizeComponent = exports.readLine = void 0;
const renderer_1 = require("../../components/renderer");
function readLine(state, currentLine, _lastLine) {
    let startPos = state.bMarks[currentLine] + state.tShift[currentLine];
    const endPos = state.eMarks[currentLine];
    const lineContent = state.src.slice(startPos, endPos);
    const blockMatch = lineContent.match(/^\[blocks-(\w+)]/);
    if (blockMatch) {
        return { currentLine, blockMatch };
    }
    return undefined;
}
exports.readLine = readLine;
function tokenizeComponent(state, startLine, lastLine, componentType, content, addState = true) {
    if (addState) {
        const token = state.push(`component_${componentType}`, "", 0);
        token.block = true;
        token.attrs = content;
        token.map = [startLine - 1, lastLine + 1];
        state.line = lastLine + 1;
        return token;
    }
    else {
        const token = {
            type: `component_${componentType}`,
            tag: "",
            nesting: 0,
            level: 0,
            children: [],
            content: "",
            block: true,
            attrs: content,
            map: [startLine - 1, lastLine + 1],
            markup: "",
            info: "",
            meta: "",
            hidden: false,
            attrIndex: () => 0,
            attrPush: () => { },
            attrSet: () => { },
            attrGet: () => "",
            attrJoin: () => "",
        };
        return token;
    }
}
exports.tokenizeComponent = tokenizeComponent;
function tokenizeContainer(state, startLine, lastLine, containerType, tokens) {
    const token = state.push(`container_${containerType}`, "", 0);
    token.block = true;
    token.children = tokens;
    token.map = [startLine - 1, lastLine + 1];
    state.line = lastLine + 1;
}
exports.tokenizeContainer = tokenizeContainer;
function parseAttributes(content) {
    const attributes = {};
    content.split("\n").forEach((line) => {
        const match = line.match(/^(\w+):\s*(.*)$/);
        if (match) {
            attributes[match[1]] = match[2].replace(/^"(.*)"$/, "$1");
        }
    });
    return {
        attributes,
    };
}
exports.parseAttributes = parseAttributes;
function parseComponentToken(token) {
    return (0, renderer_1.renderComponentToken)(token.type, token.attrs);
}
exports.parseComponentToken = parseComponentToken;
function parseContainerToken(token) {
    return (0, renderer_1.renderContainerToken)(token.type, token.children);
}
exports.parseContainerToken = parseContainerToken;
//# sourceMappingURL=parserUtilities.js.map