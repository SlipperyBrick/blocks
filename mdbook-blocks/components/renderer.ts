import Token from "markdown-it/lib/token";

import {
  ComponentAttributes,
  componentRenderers,
  containerRenderers,
} from "./components";

export function renderComponentToken(
  componentType: string,
  attributes: ComponentAttributes
): string {
  const component = componentRenderers[componentType.split("_")[1]];
  return component(attributes);
}

export function renderContainerToken(
  containerType: string,
  components: Token[]
): string {
  const container = containerRenderers[containerType.split("_")[1]];
  return container(components);
}

export { componentRenderers, containerRenderers };
