import MarkdownIt from "markdown-it";
import Token from "markdown-it/lib/token";

import { findAttribute, renderComponents } from "./utilities/rendererUtilities";

const md = new MarkdownIt();

export type ComponentAttributes = Array<[string, string]>;
export type ContainerComponents = Token[];

type ComponentRenderer = (attributes: ComponentAttributes) => string;
type ContainerRenderer = (components: ContainerComponents) => string;

export const containers = ["row"];
export const components = ["alert", "badge", "button", "card"];

export const containerRenderers: { [key: string]: ContainerRenderer } = {
  // Containers
  row: (components) =>
    `<div class="row"><div class="d-flex justify-content-around flex-grow-1 flex-wrap">${renderComponents(
      components
    )}</div></div>`,
};

// Blocks component library
export const componentRenderers: { [key: string]: ComponentRenderer } = {
  alert: (attributes) =>
    `<div class="alert alert-primary my-4 w-100" role="alert"><div class="mr-2 fa ${
      findAttribute(attributes, "icon") || ""
    }"></div>${
      findAttribute(attributes, "content")
        ? md.renderInline(findAttribute(attributes, "content"))
        : ""
    }</div>`,
  badge: (attributes) =>
    `<h1 class="my-4">${findAttribute(
      attributes,
      "title"
    )}<span class="badge badge-primary ml-2">${md.renderInline(
      findAttribute(attributes, "content")
    )}</span></h1>`,
  button: (attributes) =>
    `<a href="${findAttribute(attributes, "link")}" data-href="${findAttribute(
      attributes,
      "link"
    )}" class="btn-wrap"><button class="btn btn-primary mt-auto align-self-start">${md.renderInline(
      findAttribute(attributes, "content")
    )}</button></a>`,
  card: (attributes) =>
    `<div class="row col-3 my-4"><div class="card h-100"><img src="${findAttribute(
      attributes,
      "image"
    )}" class="card-img-top" alt="..."><div class="card-body d-flex flex-column flex-grow-1"><p class="card-title">${findAttribute(
      attributes,
      "title"
    )}</p><p class="card-text mb-5">${md.renderInline(
      findAttribute(attributes, "caption")
    )}</p><a href="${findAttribute(
      attributes,
      "link"
    )}" data-href="${findAttribute(
      attributes,
      "link"
    )}" class="btn-wrap mt-auto align-self-start"><button class="btn btn-primary">${md.renderInline(
      findAttribute(attributes, "button")
    )}</button></a></div></div></div>`,
};
