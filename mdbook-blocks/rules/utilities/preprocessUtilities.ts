import StateBlock from "markdown-it/lib/rules_block/state_block";
import Token from "markdown-it/lib/token";

import { parseAttributes, tokenizeComponent } from "./parserUtilities";

import {
  ComponentAttributes,
  components,
  containers,
} from "../../components/components";

export function preprocessAttributes(
  state: StateBlock,
  startLine: number,
  lastLine: number,
  componentType: string
): { blockComponentAttributes: ComponentAttributes; closingLine: number } {
  let closingLine = startLine;
  const blockComponentAttributes: ComponentAttributes = [];
  const blockClosingTag = `[/blocks-${componentType}]`;

  while (closingLine < lastLine) {
    const lineContent = state.src.slice(
      state.bMarks[closingLine],
      state.eMarks[closingLine]
    );

    if (lineContent.trim().includes(":")) {
      const attributes = parseAttributes(lineContent);
      blockComponentAttributes.push(...Object.entries(attributes.attributes));
    } else if (lineContent.trim() === blockClosingTag) {
      break;
    }

    closingLine++;
  }

  return { blockComponentAttributes, closingLine };
}

export function preprocessComponents(
  state: StateBlock,
  startLine: number,
  lastLine: number,
  containerType: string
): { blockComponents: Token[]; closingLine: number } {
  let closingLine = startLine;
  const blockComponents: Token[] = [];
  const blockClosingTag = `[/blocks-${containerType}]`;

  while (closingLine < lastLine) {
    const lineContent = state.src.slice(
      state.bMarks[closingLine],
      state.eMarks[closingLine]
    );

    if (
      components.some((component) =>
        lineContent.includes(`[blocks-${component}`)
      )
    ) {
      const { blockComponentAttributes, closingLine: nestedClosingLine } =
        preprocessAttributes(
          state,
          closingLine,
          lastLine,
          lineContent.split("[blocks-")[1].slice(0, -1)
        );

      // Tokenize the component and add it to the array of tokens
      const componentToken = tokenizeComponent(
        state,
        closingLine,
        nestedClosingLine,
        lineContent.split("[blocks-")[1].slice(0, -1),
        blockComponentAttributes,
        false
      );

      blockComponents.push(componentToken!);

      closingLine = nestedClosingLine;
    } else if (lineContent.trim() === blockClosingTag) {
      break;
    }

    closingLine++;
  }

  return { blockComponents, closingLine };
}
