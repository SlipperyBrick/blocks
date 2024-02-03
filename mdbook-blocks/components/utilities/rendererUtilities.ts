import { renderComponentToken } from "../renderer";

import { ComponentAttributes, ContainerComponents } from "../components";

export function findAttribute(
  attributes: ComponentAttributes,
  key: string
): string {
  const attribute = attributes!.find(([attrKey]) => attrKey === key);
  return attribute ? attribute[1] : "";
}

export function renderComponents(components: ContainerComponents): string {
  return components
    .map((token) => renderComponentToken(token.type, token.attrs!))
    .join(" ");
}
