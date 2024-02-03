import StateBlock from "markdown-it/lib/rules_block/state_block";
import Token from "markdown-it/lib/token";

import { ComponentAttributes } from "../../components/components";

import {
  renderComponentToken,
  renderContainerToken,
} from "../../components/renderer";

export function readLine(
  state: StateBlock,
  currentLine: number,
  _lastLine: number
): { currentLine: number; blockMatch: RegExpMatchArray } | undefined {
  let startPos = state.bMarks[currentLine] + state.tShift[currentLine];
  const endPos = state.eMarks[currentLine];

  const lineContent = state.src.slice(startPos, endPos);
  const blockMatch = lineContent.match(/^\[blocks-(\w+)]/);

  if (blockMatch) {
    return { currentLine, blockMatch };
  }

  return undefined;
}

export function tokenizeComponent(
  state: StateBlock,
  startLine: number,
  lastLine: number,
  componentType: string,
  content: ComponentAttributes,
  addState: boolean = true
): void | Token {
  if (addState) {
    const token = state.push(`component_${componentType}`, "", 0);
    token.block = true;
    token.attrs = content;
    token.map = [startLine - 1, lastLine + 1];
    state.line = lastLine + 1;
    return token;
  } else {
    const token: Token = {
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
      attrPush: () => {},
      attrSet: () => {},
      attrGet: () => "",
      attrJoin: () => "",
    };

    return token;
  }
}

export function tokenizeContainer(
  state: StateBlock,
  startLine: number,
  lastLine: number,
  containerType: string,
  tokens: Token[]
): void {
  const token = state.push(`container_${containerType}`, "", 0);
  token.block = true;
  token.children = tokens;
  token.map = [startLine - 1, lastLine + 1];
  state.line = lastLine + 1;
}

export function parseAttributes(content: string): {
  attributes: { [key: string]: string };
} {
  const attributes: { [key: string]: string } = {};

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

export function parseComponentToken(token: Token): string {
  return renderComponentToken(token.type, token.attrs!);
}

export function parseContainerToken(token: Token): string {
  return renderContainerToken(token.type, token.children!);
}
