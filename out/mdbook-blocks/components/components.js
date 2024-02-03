"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.componentRenderers = exports.containerRenderers = exports.components = exports.containers = void 0;
const markdown_it_1 = __importDefault(require("markdown-it"));
const rendererUtilities_1 = require("./utilities/rendererUtilities");
const md = new markdown_it_1.default();
exports.containers = ["row"];
exports.components = ["alert", "badge", "button", "card"];
exports.containerRenderers = {
    // Containers
    row: (components) => `<div class="row"><div class="d-flex justify-content-around flex-grow-1 flex-wrap">${(0, rendererUtilities_1.renderComponents)(components)}</div></div>`,
};
// Blocks component library
exports.componentRenderers = {
    alert: (attributes) => `<div class="alert alert-primary my-4 w-100" role="alert"><div class="mr-2 fa ${(0, rendererUtilities_1.findAttribute)(attributes, "icon") || ""}"></div>${(0, rendererUtilities_1.findAttribute)(attributes, "content")
        ? md.renderInline((0, rendererUtilities_1.findAttribute)(attributes, "content"))
        : ""}</div>`,
    badge: (attributes) => `<h1 class="my-4">${(0, rendererUtilities_1.findAttribute)(attributes, "title")}<span class="badge badge-primary ml-2">${md.renderInline((0, rendererUtilities_1.findAttribute)(attributes, "content"))}</span></h1>`,
    button: (attributes) => `<a href="${(0, rendererUtilities_1.findAttribute)(attributes, "link")}" data-href="${(0, rendererUtilities_1.findAttribute)(attributes, "link")}" class="btn-wrap"><button class="btn btn-primary mt-auto align-self-start">${md.renderInline((0, rendererUtilities_1.findAttribute)(attributes, "content"))}</button></a>`,
    card: (attributes) => `<div class="row col-3 my-4"><div class="card h-100"><img src="${(0, rendererUtilities_1.findAttribute)(attributes, "image")}" class="card-img-top" alt="..."><div class="card-body d-flex flex-column flex-grow-1"><p class="card-title">${(0, rendererUtilities_1.findAttribute)(attributes, "title")}</p><p class="card-text mb-5">${md.renderInline((0, rendererUtilities_1.findAttribute)(attributes, "caption"))}</p><a href="${(0, rendererUtilities_1.findAttribute)(attributes, "link")}" data-href="${(0, rendererUtilities_1.findAttribute)(attributes, "link")}" class="btn-wrap mt-auto align-self-start"><button class="btn btn-primary">${md.renderInline((0, rendererUtilities_1.findAttribute)(attributes, "button"))}</button></a></div></div></div>`,
};
//# sourceMappingURL=components.js.map