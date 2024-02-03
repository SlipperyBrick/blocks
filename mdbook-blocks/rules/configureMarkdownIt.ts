import MarkdownIt from "markdown-it";

import { parseComponent, parseContainer } from "./parser";

import {
  parseComponentToken,
  parseContainerToken,
} from "./utilities/parserUtilities";

import { components, containers } from "../components/components";

function blocks(md: MarkdownIt): void {
  md.block.ruler.before("fence", "components", parseComponent, {
    alt: ["paragraph", "header", "blockquote"],
  });

  // Registers the parseToken function for each component type in the Blocks component library
  components.forEach((component) => {
    md.renderer.rules[`component_${component}`] = (
      tokens,
      index,
      _options,
      _env,
      _self
    ) => {
      return parseComponentToken(tokens[index]);
    };
  });

  md.block.ruler.before("fence", "containers", parseContainer, {
    alt: ["paragraph", "header", "blockquote"],
  });

  // Registers the parseToken function for each container type in the Blocks component library
  containers.forEach((container) => {
    md.renderer.rules[`container_${container}`] = (
      tokens,
      index,
      _options,
      _env,
      _self
    ) => {
      return parseContainerToken(tokens[index]);
    };
  });
}

export default blocks;
