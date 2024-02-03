import StateBlock from "markdown-it/lib/rules_block/state_block";

import { components, containers } from "../components/components";

import {
  readLine,
  tokenizeComponent,
  tokenizeContainer,
} from "./utilities/parserUtilities";

import {
  preprocessAttributes,
  preprocessComponents,
} from "./utilities/preprocessUtilities";

export function parseComponent(
  state: StateBlock,
  startLine: number,
  lastLine: number,
  _skip: boolean = false
): boolean {
  let currentLine = startLine;

  const match = readLine(state, currentLine, lastLine);

  if (match && components.includes(match.blockMatch[1])) {
    // Pre-processes the attributes of any found Blocks components
    const { blockComponentAttributes, closingLine } = preprocessAttributes(
      state,
      match.currentLine,
      lastLine,
      match.blockMatch[1]
    );

    // Tokenizes the Block component type and its corresponding attributes
    tokenizeComponent(
      state,
      match.currentLine,
      closingLine,
      match.blockMatch[1],
      blockComponentAttributes
    );

    currentLine = match.currentLine + 1;
  } else {
    return false;
  }

  return true;
}

export function parseContainer(
  state: StateBlock,
  startLine: number,
  lastLine: number,
  _skip: boolean = false
): boolean {
  let currentLine = startLine;

  const match = readLine(state, currentLine, lastLine);

  if (match && containers.includes(match.blockMatch[1])) {
    // Pre-processes the attributes of any found Blocks components
    const { blockComponents, closingLine } = preprocessComponents(
      state,
      match.currentLine,
      lastLine,
      match.blockMatch[1]
    );

    // Tokenizes the Block component type and its corresponding attributes
    tokenizeContainer(
      state,
      match.currentLine,
      closingLine,
      match.blockMatch[1],
      blockComponents
    );

    currentLine = closingLine + 1;
  } else {
    return false;
  }

  return true;
}
